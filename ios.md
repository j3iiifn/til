# iOS

## 用語
- Dynamic Island : [iPhone 14 Pro以降] 画面最上部の時計と電池の間にある領域のこと。iPhone 14 Pro以降の端末に搭載されている
    - [iPhoneでDynamic Islandを使用する \- Apple サポート \(日本\)](https://support.apple.com/ja-jp/guide/iphone/iph28f50d10d/ios)
- Live Activities : [iOS 16.1以降] Lock ScreenやDynamic Islandに表示する。情報をリアルタイムに表示でき、クイックアクションも行える。
    - [ライブアクティビティ \| Apple Developer Documentation](https://developer.apple.com/jp/design/human-interface-guidelines/live-activities)
    - [ActivityKit \| Apple Developer Documentation](https://developer.apple.com/documentation/ActivityKit)


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


## 勉強会
- （2025/05/21）Findy主催 - 【iOSエンジニア特集】iOSアプリ開発の裏側 開発組織が向き合う課題とこれから [＜アーカイブ動画＞](https://findy-code.io/events/5twIvDRz5VkUF)
    - TVer iOSチームの共通認識の作り方（株式会社TVer 小森 英明さん）[＜資料＞](https://speakerdeck.com/techtver/tver-iostimunogong-tong-ren-shi-nozuo-rifang-findy-job-lt-iosapurikai-fa-noli-ce-kai-fa-zu-zhi-gaxiang-kihe-uke-ti-tokorekara)
        - レビュープロセス：UI設計レビュー、Reducer設計レビュー、Test設計レビュー
        - ドキュメント整備：コーディング規約（GitHub issueで起案、採択されたものをWikiへ追記）、ADR (Architectural Decision Records)、TIPS
