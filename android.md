# Androidアプリ開発

## edge-to-edge
- [DroidKaigi 2022 \- 実践 \`edge\-to\-edge\`: 端から端まで解説 \| Yuki Ando \[JA\] \- YouTube](https://www.youtube.com/watch?v=KOUiX0_R00I)
- [DroidKaigi 2022 \- Android アプリの内と外をつなぐ UI \| 荒木佑一 \[JA\] \- YouTube](https://www.youtube.com/watch?v=7qh80shWF-A)

## [Android 15〜] dataSyncタイプのフォアグラウンドサービスのタイムアウト
（2025/05/01）

targetSdkVersionを35に上げたアプリをAndroid 15端末で実行したときにタイムアウトの制限がかかるようになった。targetSdkVersionが35でも、Android 14以下の端末にはタイムアウトの制限はかからない（Android 14/Pixel 7a、Android 13/Pixel 6a、Android 12/Pixel 3aで動作確認済み）。

- [Foreground service timeouts  \|  Background work  \|  Android Developers](https://developer.android.com/develop/background-work/services/fgs/timeout)
- Service#onTimeout(int, int) : [Reference](https://developer.android.com/reference/android/app/Service#onTimeout(int,%20int))
- Service#onTimeout(int) : [Reference](https://developer.android.com/reference/android/app/Service#onTimeout(int))

## [Android 14〜] UIDT (User-initiated data transfer)
（2025/05/01）

JobServiceの一種。ユーザが能動的に開始したデータ通信を伴う長時間のバックグラウンド処理に対して使用する。

- [User\-initiated data transfer  \|  Background work  \|  Android Developers](https://developer.android.com/develop/background-work/background-tasks/uidt)
- [Android Developers Blog: Google Maps improved download reliability by 10% using user initiated data transfer API](https://android-developers.googleblog.com/2024/09/google-maps-improved-download-reliability-user-initiated-data-transfer-api.html)
- `JobInfo.Builder#setEstimatedNetworkBytes()` : [Reference](https://developer.android.com/reference/android/app/job/JobInfo.Builder#setEstimatedNetworkBytes(long,%20long))
- `JobService#updateEstimatedNetworkBytes()` : [Reference](https://developer.android.com/reference/android/app/job/JobService.html#updateEstimatedNetworkBytes(android.app.job.JobParameters,%20long,%20long))

### UIDTのタイムアウト
（2025/05/02）

UIDTのJobServiceに対して EstimatedNetworkBytes を設定しても設定しなくても、最長稼働時間は12時間になる。
実際にPixel 8a/Android 15とPixel 7a/Android 14で検証してみたところ、開始後ピッタリ12時間でタイムアウトが発生し、次のLogcatが出力されてJobServiceのonStopJob関数が呼び出された。
`JobServiceContext: Client timed out while executing (no jobFinished received). Sending onStop: bdb5b52 #u0a317/2 xxxxx`

12時間というのは `JobSchedulerService.java` に定数として定義されている（下記参照）。Device Configで変更可能なようだが、とりあえずPixelシリーズはデフォルトの12時間のままなのだろう。

```java
public static final long DEFAULT_RUNTIME_UI_LIMIT_MS =
        Math.max(12 * HOUR_IN_MILLIS, DEFAULT_RUNTIME_FREE_QUOTA_MAX_LIMIT_MS);
```
https://cs.android.com/android/platform/superproject/main/+/main:frameworks/base/apex/jobscheduler/service/java/com/android/server/job/JobSchedulerService.java;l=796;drc=61197364367c9e404c7da6900658f1b16c42d0da

上記の定数はLogcatのメッセージから該当のソースコード（下記）を検索し、そこから辿って発見した。

```java
final long latestStopTimeElapsed =
        mExecutionStartTimeElapsed + mMaxExecutionTimeMillis;
final long earliestStopTimeElapsed =
        mExecutionStartTimeElapsed + mMinExecutionGuaranteeMillis;
final long nowElapsed = sElapsedRealtimeClock.millis();
if (nowElapsed >= latestStopTimeElapsed) {
    // Not an error - client ran out of time.
    Slog.i(TAG, "Client timed out while executing (no jobFinished received)."
            + " Sending onStop: " + getRunningJobNameLocked());
```
https://cs.android.com/android/platform/superproject/main/+/main:frameworks/base/apex/jobscheduler/service/java/com/android/server/job/JobServiceContext.java;l=1454;drc=175d54f39b9c0a580b9e3d424569793c1b78219c
