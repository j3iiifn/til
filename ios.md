# iOS

## 用語
- Dynamic Island : [iPhone 14 Pro以降] 画面最上部の時計と電池の間にある領域のこと。iPhone 14 Pro以降の端末に搭載されている
    - [iPhoneでDynamic Islandを使用する \- Apple サポート \(日本\)](https://support.apple.com/ja-jp/guide/iphone/iph28f50d10d/ios)
- Live Activities : [iOS 16.1以降] Lock ScreenやDynamic Islandに表示する。情報をリアルタイムに表示でき、クイックアクションも行える。
    - [ライブアクティビティ \| Apple Developer Documentation](https://developer.apple.com/jp/design/human-interface-guidelines/live-activities)
    - [ActivityKit \| Apple Developer Documentation](https://developer.apple.com/documentation/ActivityKit)


## ipaファイルの再署名
2025/08/05
とある不具合が過去のどのバージョンから発生するか調査するために、過去のバージョンのAppStore用ipaファイルを実機にインストールする必要があった。
ipaファイルを[iOS App Signer](https://github.com/DanTheMan827/ios-app-signer)で有効期限内のDevelopment証明書とProvisioning Profileで再署名すると、Apple ConfiguratorもしくはXcodeで実機にインストールできた。


## Xcode

### ファイル名を変更する方法
- Project navigatorで対象のファイルを選択し、Enterキーを押下すると変更モードになる
- ファイルを右クリックしてコンテキストメニューを表示しても、その中に「Rename」という選択肢は存在しない。極めて不親切なUI
- 参考: [Xcodeでのグループ名、ファイル名変更方法 \- yakisakeの日記](https://yakisake.hatenablog.com/entry/Xcode%E3%81%A7%E3%81%AE%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97%E5%90%8D%E3%80%81%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E5%90%8D%E5%A4%89%E6%9B%B4%E6%96%B9%E6%B3%95)


### ビルドの成功/失敗時に効果音を鳴らす方法
- メニューバー > Xcode > Preferences > Behaviorsタブ で左ペインからイベントを選択し、右ペインで `Play sound` をONにする
- 私は以下のように設定した
    - Build > Succeeds : Funky
    - Build > Fails : Sonumi
    - Testing > Succeeds : Crystal
    - Testing > Fails : Sonumi
- 参考: [【Xcode】iOSエンジニアが真っ先に設定すべきXcode設定集 \#Swift \- Qiita](https://qiita.com/zrn-ns/items/8493413e55b7329c023a)


### コマンドでテストを実行したときの出力の整形
- [cpisciotta/xcbeautify: A little beautifier tool for xcodebuild](https://github.com/cpisciotta/xcbeautify)
- （公開日：2024/06/17、閲覧日：2025/07/22）[xcprettyだとXCTestExpectationのタイムアウトエラーやXCTSkipが結果に反映されず、xcbeautifyだと問題なく動く \- いけだや技術ノート](https://ikesyo.hatenablog.com/entry/2024/06/17/153954)


## LSP
- [swiftlang/sourcekit\-lsp: Language Server Protocol implementation for Swift and C\-based languages](https://github.com/swiftlang/sourcekit-lsp)
    - これをMCP化すればAIが漏れなくリネームできるようになるし、コンパイルエラーも高速に検知できるようになるはず


## Claude Code
- （公開日：2025/06/19、閲覧日：2025/07/10）[How to use Claude Code for iOS Development with Swift/SwiftUI \- YouTube](https://www.youtube.com/watch?v=KgWojTdbvBU)
    - XcodeBuildMCP, context7


## 勉強会
- （2025/05/21）Findy主催 - 【iOSエンジニア特集】iOSアプリ開発の裏側 開発組織が向き合う課題とこれから [＜アーカイブ動画＞](https://findy-code.io/events/5twIvDRz5VkUF)
    - クラシルリワードにおけるiOSアプリ開発の取り組み（dely株式会社 中澤 郁斗さん）[＜資料＞](https://speakerdeck.com/funzin/kurasiruriwadoniokeru-iosapurikai-fa-noqu-rizu-mi)
        - 技術スタック、アーキテクチャ
        - Swift Package Managerによるモジュール管理
        - 画面のアーキテクチャ：Builder, ViewController, ScreenView (SwiftUI), ViewModel(ObservableObjectを使用)
        - 画面遷移：RouterService
    - （株式会社カウシェ 深谷 哲史さん）[＜資料＞](https://speakerdeck.com/akifumifukaya/20250521-findy-ios-tech-event-kauche)
        - MVVM、マルチモジュール、SwiftUI
        - Swift Package Managerによるモジュール管理
    - TVer iOSチームの共通認識の作り方（株式会社TVer 小森 英明さん）[＜資料＞](https://speakerdeck.com/techtver/tver-iostimunogong-tong-ren-shi-nozuo-rifang-findy-job-lt-iosapurikai-fa-noli-ce-kai-fa-zu-zhi-gaxiang-kihe-uke-ti-tokorekara)
        - レビュープロセス：UI設計レビュー、Reducer設計レビュー、Test設計レビュー
        - ドキュメント整備：コーディング規約（GitHub issueで起案、採択されたものをWikiへ追記）、ADR (Architectural Decision Records)、TIPS


## [slackhq/PanModal: An elegant and highly customizable presentation API for constructing bottom sheet modals on iOS\.](https://github.com/slackhq/PanModal)
- PanModalの初期状態はshort form
- モーダルを上へスワイプして引き上げるとモーダルが高くなる（long formに変形する）
- long formの状態からモーダルを下へスワイプするとモーダルが低くなる（short formに変形する）
- short formの状態からモーダルを下へスワイプするとモーダルが閉じる
- PanModal内部では現在の状態（short formとlong formのどちらなのか）は保持していない
- ユーザのスワイプジェスチャーの方向と、モーダルの現在位置を元に、①longFormへ変形、②shortFormへ変形、③dismissのどれを実行するかを決定している


## マルチプラットフォーム
- （公開日：2025/10/27、閲覧日：2025/10/27）[Apple、「Swift SDK for Android」プレビュー公開。Swift言語でAndroid対応アプリを開発 － Publickey](https://www.publickey1.jp/blog/25/appleswift_sdk_for_androidswiftandroid.html)
