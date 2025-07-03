# FFmpeg

## FFmpegKitの終了
個人的に開発しているAndroidアプリでFFmpegを使用するために[FFmpegKit for Android](https://github.com/arthenica/ffmpeg-kit)を使用している。
1年ぶりにアプリを修正してビルドしようとしたら、FFmpegKit for AndroidをMaven Repositoryからダウンロードできなくなっていた。
4/1にネイティブバイナリがリポジトリから削除されたらしい。

[Saying Goodbye to FFmpegKit\. As of January 6, 2025, FFmpegKit is… \| by Taner Sener \| Medium](https://tanersener.medium.com/saying-goodbye-to-ffmpegkit-33ae939767e1)

これからはローカルで自分でビルドすれば使えるとのことだったので、そうすることにした。
ただし、自分のMacの環境を汚したくないので、Dockerfileを作成してみた。
だが、ビルドの際にエラーが発生してしまい、今のところうまくいっていない。

GitHub ActionsのWorkflowファイルを見つけた。次に時間があるときに、これを参考にDockerfileを作り直したい。

- https://github.com/arthenica/ffmpeg-kit/blob/main/.github/workflows/android-build-scripts.yml
- https://github.com/arthenica/ffmpeg-kit/blob/main/.github/workflows/periodic-builds-android.yml


## 動画を無劣化でトリミングすると最初の数秒が真っ黒になる現象
2025/07/03
- [ffmpegで動画を再エンコードなしで正確に切り出す \- cBlog](https://yaritakunai.hatenablog.com/entry/2018/08/04/211000)
- [ffmpeg/キーフレームでカット \- heguro](https://scrapbox.io/heguro/ffmpeg%2F%E3%82%AD%E3%83%BC%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%81%A7%E3%82%AB%E3%83%83%E3%83%88)
