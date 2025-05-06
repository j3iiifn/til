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
