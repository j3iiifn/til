# Androidアプリ開発

## Google I/O 2025
- （公開日：2025/05/23、閲覧日：2025/06/18）[Android 開発ツールの新機能](https://www.youtube.com/watch?v=KXKP2tDPW4)
    - [Journeys for Android Studio](https://developer.android.com/studio/preview/gemini/journeys) : 自然言語でテストを記述できる機能
-　（公開日：2025/05/23、閲覧日：2025/07/02）[Androidの新機能](https://www.youtube.com/watch?v=IaNpcrCSDiI)

## edge-to-edge
- DroidKaigi
    - [DroidKaigi 2022 \- 実践 \`edge\-to\-edge\`: 端から端まで解説 \| Yuki Ando \[JA\] \- YouTube](https://www.youtube.com/watch?v=KOUiX0_R00I)
    - [DroidKaigi 2022 \- Android アプリの内と外をつなぐ UI \| 荒木佑一 \[JA\] \- YouTube](https://www.youtube.com/watch?v=7qh80shWF-A)
    - [DroidKaigi 2020 \- System UIをコントロールして、画面を最大限に生かしたアプリを構築する / Sato Shun \[JA\] \- YouTube](https://www.youtube.com/watch?v=LuZwy1-sF6w)
- Android公式
    - [Behavior changes: Apps targeting Android 15 or higher  |  Android Developers](https://developer.android.com/about/versions/15/behavior-changes-15)
    - [About window insets  |  Jetpack Compose  |  Android Developers](https://developer.android.com/develop/ui/compose/system/insets)
    - [Display content edge-to-edge in views  |  Views  |  Android Developers](https://developer.android.com/develop/ui/views/layout/edge-to-edge)
    - [Manually set up the edge\-to\-edge display  \|  Views  \|  Android Developers](https://developer.android.com/develop/ui/views/layout/edge-to-edge-manually)
    - [WindowInsets — listeners to layouts \| by Chris Banes \| Android Developers \| Medium](https://medium.com/androiddevelopers/windowinsets-listeners-to-layouts-8f9ccc8fa4d1) → 2019年の記事なので情報が古かった
    - [Insets handling tips for Android 15’s edge\-to\-edge enforcement \| by Ash Nohe \| Android Developers \| Medium](https://medium.com/androiddevelopers/insets-handling-tips-for-android-15s-edge-to-edge-enforcement-872774e8839b)
    - [Is your app providing a backward compatible edge\-to\-edge experience? \| by Yuichi Araki \| Android Developers \| Medium](https://medium.com/androiddevelopers/is-your-app-providing-a-backward-compatible-edge-to-edge-experience-2479267073a0)
- oss-licenses-plugin は edge-to-edge に非対応（2025/05/12時点）
    - [oss\-licenses\-plugin is not edge\-to\-edge ready · Issue \#296 · google/play\-services\-plugins](https://github.com/google/play-services-plugins/issues/296)


## [Android 15] three-button navigation barの背景色について
Android 15ではedge-to-edge強制化の影響で、navigation barの背景色がデフォルトで透明に設定されている。
Android 14以下のように、`setNavigationBarColor(int)`や`android.R.styleable#Window_navigationBarColor`で自由に変更することはできない。
`window.isNavigationBarContrastEnforced = true` で背景色が付くようになるが、色は自由に変えられない。
`isNavigationBarContrastEnforced` をヒントにして色を決定するロジックをAndroid Code Searchで探したところ、次のコードが見つかった。

```java
    private int calculateNavigationBarColor(@Appearance int appearance) {
        return calculateBarColor(mWindow.getAttributes().flags, FLAG_TRANSLUCENT_NAVIGATION,
                mSemiTransparentBarColor, mWindow.mNavigationBarColor,
                appearance, APPEARANCE_LIGHT_NAVIGATION_BARS,
                mWindow.mEnsureNavigationBarContrastWhenTransparent
                        && (mLastSuppressScrimTypes & WindowInsets.Type.navigationBars()) == 0,
                mWindow.mEdgeToEdgeEnforced);
    }

    public static int calculateBarColor(int flags, int translucentFlag, int semiTransparentBarColor,
            int barColor, @Appearance int appearance, @Appearance int lightAppearanceFlag,
            boolean ensuresContrast, boolean movesBarColorToScrim) {
        if ((flags & translucentFlag) != 0) {
            return semiTransparentBarColor;
        } else if ((flags & FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS) == 0) {
            return Color.BLACK;
        } else if (ensuresContrast) {
            final int alpha = Color.alpha(barColor);
            if (alpha == 0) {
                boolean light = (appearance & lightAppearanceFlag) != 0;
                return light ? SCRIM_LIGHT : semiTransparentBarColor;
            } else if (movesBarColorToScrim) {
                return (barColor & 0xffffff) | SCRIM_ALPHA;
            }
        } else if (movesBarColorToScrim) {
            return Color.TRANSPARENT;
        }
        return barColor;
    }
```
https://cs.android.com/android/platform/superproject/main/+/main:frameworks/base/core/java/com/android/internal/policy/DecorView.java;l=1409;drc=61197364367c9e404c7da6900658f1b16c42d0da

`calculateBarColor` 関数が実際にはどのような値になるのかが気になるが、Androidフレームワーク側のコードであるため、ブレークポイントは設定できない。
`calculateBarColor` 関数の戻り値を使用する箇所を調べてみたら、その戻り値は最終的に`mNavigationColorViewState.color`に代入されていた。

それならデバッガから覗き見できると思い、ソースコードの適当なところに `window.decorView` と書いてブレークポイントを設定してAndroid15端末でデバッグ実行し、デバッガで `decorView` の中身を開き、 `mNavigationColorViewState > color` を確認してみたら、値は `-872415232` だった。
デバッガのEvaluate Expressionを開き、 `String.format("#%08X", -872415232)` を実行してInt値を16進数のカラーコードに変換すると、`#CC000000` になった。
これは下記のSCRIM_ALPHA定数の値と一致する。

```java
    private static final int SCRIM_ALPHA = 0xcc000000; // 80% alpha
```
https://cs.android.com/android/platform/superproject/main/+/main:frameworks/base/core/java/com/android/internal/policy/DecorView.java;l=143;drc=61197364367c9e404c7da6900658f1b16c42d0da

Android StudioのRunning Devices機能で端末の画面をMacに投影し、Digital Color Meter.appでnavigation barの色を計測すると `#313131` だった（白背景のアプリ）。
`#CC000000`（アルファ値80%の黒）を `#FFFFFF`（白）の上に描画した場合、合成後のカラーコードは `#333333` になるので、実測値とおよそ一致する（Macに投影した影響？で値が微妙にズレてしまうのは仕方ない）。

### windowOptOutEdgeToEdgeEnforcement について
edge-to-edge強制化をオプトアウトする設定がある。
Activityのテーマに `<item name="android:windowOptOutEdgeToEdgeEnforcement" tools:targetApi="35">true</item>` を追加してAndroid 15端末で動作確認してみると、Android 14以下のように、`setNavigationBarColor(int)`や`android.R.styleable#Window_navigationBarColor`でnavigation barの色を自由に変更することができた。


## ProtectionLayout
[Display content edge-to-edge in views  |  Views  |  Android Developers](https://developer.android.com/develop/ui/views/layout/edge-to-edge)

に登場する [androidx.core.view.insets.ProtectionLayout](https://developer.android.com/reference/androidx/core/view/insets/ProtectionLayout) はAPIリファレンスと上記の公式ドキュメントの簡単な記述以外、検索に情報が全く引っかからない。
先月リリースされた [androidx.core Version 1.6.0 (2025/04/09)](https://developer.android.com/jetpack/androidx/releases/core#1.16.0) の新機能ということもあり、まだほとんど誰も使っていないのかもしれない。

[Insets handling tips for Android 15’s edge\-to\-edge enforcement \| by Ash Nohe \| Android Developers \| Medium](https://medium.com/androiddevelopers/insets-handling-tips-for-android-15s-edge-to-edge-enforcement-872774e8839b) に

> We are planning to release an AndroidX library to support this use case.

という記載があるが、そのライブラリがこの `ProtectionLayout` なのだろう。


## immersive mode
- Android公式ドキュメント
    - [Hide system bars for immersive mode  \|  Views  \|  Android Developers](https://developer.android.com/develop/ui/views/layout/immersive)
- immersive mode中に画面をタップしたときの挙動（実機で検証）：
    - Android 15, 14, 13, 12: 何も起こらない（status bar/navigation barは隠れたまま）
    - Android 11, 10, 8, 7: OSがタップを検知し、status bar/navigation barを表示させてくれる


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


## ConstraintLayout TIPS
### gone margin
制約対象のvisibilityがGONEのときにmarginの値を変えたいときに使う

```
layout_goneMarginStart
layout_goneMarginEnd
layout_goneMarginLeft
layout_goneMarginTop
layout_goneMarginRight
layout_goneMarginBottom
layout_goneMarginBaseline
```


## Fragment TIPS
### Fragment#setFragmentResultListener(requestKey,listener)
- 同じFragmentManager・同じrequestKeyでリスナーを登録すると、後から登録したリスナーが前のリスナーを上書きしてしまう
- 同じActivity上で異なる2つのFragmentを表示しているときに、両方のFragmentで同じrequestKeyでリスナーを登録すると、リスナーが上書きされ、後から登録したリスナーだけが有効になる

### LifecycleOwnerとしてのFragment自身 vs Fragment.viewLifecycleOwnerプロパティ
- [【Android】LifecycleOwner として Fragment 自身ではなく viewLifecycleOwner を使うべき場合 \#ライフサイクル \- Qiita](https://qiita.com/sdkei/items/100580137e7b2f705205)
