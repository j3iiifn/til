# Jellyfin
- https://jellyfin.org/
- https://github.com/jellyfin/jellyfin

## 動画の音声が途切れ途切れになってしまうとき
ダッシュボード > プレイバック > トランスコーディング で次の2つの設定にチェックマークをつけたら改善された。

- スロットル（トランスコードの制限）
- セグメントを削除

参考：https://forum.jellyfin.org/t-var-lib-jellyfin-transcodes?pid=30670#pid30670
