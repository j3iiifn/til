# Speech-to-Text (STT)

## 前処理
- 音声抽出
    - [Ultimate Vocal Remover](https://github.com/Anjok07/ultimatevocalremovergui)
- VAD
    - [Silero VAD](https://github.com/snakers4/silero-vad)
        - WhisperX が内部でこれを使っている
  
## バックエンド
- whisper.cpp
    - VAD機能あり
- mlx-whisper
    - VAD機能なし
- faster-whisper

## アプリケーション/CLI
- WhisperX
    - mlx-whisperに未対応だが、Claude Codeにお願いしたらすぐに実装できた
    - Silero VADで検出した音声区間ごとに文字起こしをするのでハルシネーションが少ない
- stable-ts
    - mlx-whisperに対応済み
    - VADが後処理にしか使用されなくてハルシネーションが酷い
- Whisply
    - mlx-whisperに対応済み
    - 日本語環境では問題がいくつかあり、コードを修正しないと使い物にならなかった
- OpenWhispr
    - whisper.cppでローカル文字起こしができる
    - 音声ファイルを1つずつtranscribeできるが、バッチ処理はできない
