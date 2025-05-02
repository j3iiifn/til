# Androidアプリ開発

## edge-to-edge
- [DroidKaigi 2022 \- 実践 \`edge\-to\-edge\`: 端から端まで解説 \| Yuki Ando \[JA\] \- YouTube](https://www.youtube.com/watch?v=KOUiX0_R00I)
- [DroidKaigi 2022 \- Android アプリの内と外をつなぐ UI \| 荒木佑一 \[JA\] \- YouTube](https://www.youtube.com/watch?v=7qh80shWF-A)

## [Android 15〜] dataSyncタイプのフォアグラウンドサービスのタイムアウト
（2025/05/01）

targetSdkVersionを35に上げたアプリをAndroid 15端末で実行したときにタイムアウトの制限がかかるようになった。targetSdkVersionが35でも、Android 14以下の端末にはタイムアウトの制限はかからない（Android 13、12で動作確認済み）。

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
