# ImageMagickのコマンド例

## 2枚の画像を左右に並べ、右側の画像の高さを左側の画像の高さに合わせる
用途例：デザインモック（Figma等）と実機のスクリーンショットを左右に並べて見比べる

```shell
left=left.png
right=right.png
output=output.png

magick \
  ${left} \
  \( ${right} -resize x$(identify -format "%h" ${left}) \) \
  +append \
  ${output}
```
