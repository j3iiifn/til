# 生成AI

## 読んだ記事
- （公開日：2025/03/31、閲覧日：2025/04/11）[GoogleのLLM「Gemini」でコードレビューをするGitHub Actionsを自力で構築してみた \- NTT Communications Engineers' Blog](https://engineers.ntt.com/entry/202503-gemini-cicd-code-review/entry)
- （公開日：2025/04/11、閲覧日：2025/04/11）[最近1行もコードを書いていない](https://zenn.dev/notahotel/articles/e70325e770ffa6)
- （公開日：2025/02/27、閲覧日：2025/04/13）[ASCII\.jp：いま文章を書くのに「CURSOR」を使わないのは損だ](https://ascii.jp/elem/000/004/253/4253872/)
- （公開日：2025/03/17、閲覧日：2025/04/14）[ASCII\.jp：文章術としてのCursor入門 \(1/6\)](https://ascii.jp/elem/000/004/256/4256350/)
- （公開日：2025/04/18、閲覧日：2025/04/19）[個人的 Vibe Coding のやりかた](https://zenn.dev/yoshiko/articles/my-vibe-coding)
- （公開日：2025/04/26、閲覧日：2025/04/27）[Vibe Coding で遊ぼう](https://zenn.dev/schroneko/articles/lets-play-with-vibe-coding)
- （公開日：2025/04/27、閲覧日：2025/04/27）[最小限のMCP Host/Client/Serverをスクラッチで実装する](https://zenn.dev/razokulover/articles/9a0aee8ceb9f3f)

## 見た動画
- （公開日：2024/07/26、閲覧日：2025/04/17）[【Copilot活用術 vol\.1】ビジネスパーソンの生成AI「Microsoft Copilot」活用法／Copilotで何ができる？便利な機能「ノートブック」とは／全10回シリーズで解説 \- YouTube](https://www.youtube.com/watch?v=DTCwUOd08-I)
- （公開日：2025/04/16、閲覧日：2025/04/24）[GitHub Copilot コードレビュー機能試してみました \- YouTube](https://www.youtube.com/watch?v=UuCJIDkRNUA)

## 講演、セミナー
- （2025/04/24）GitHub Japan、緊急開催：GitHub Copilotエージェントモードと最新情報 [＜資料＞](https://resources.github.com/ja/githubcopilotaprilupdatewebinar2025/) [＜告知＞](https://x.com/GitHubJapan/status/1911562545069957219)
    - VSCodeのCopilot拡張機能のチャットで実装したい機能を依頼するデモをやっていた。Copilotが自律的に計画を立てて、実装はもちろんのこと、ブラウザを使用したテスト（PlaywrightのMCP経由）とGitコミット、GitHubのプルリクエスト作成（GitHubのMCP経由）まで自動でやってくれていた。

## X
- （2025/04/27）https://x.com/hamukazu/status/1916502783018303779
    - > 初級者よりAIのほうができるけど上級者にAIは勝てない状況で、初級者を切り捨てては上級者も育たない問題

## 雑記
- 2025/04/24
    - 会社でGitHub Copilot for Businessを契約してもらえたので、早速iOSアプリのPull Requestに対するコードレビューで使用してみた
    - PRのReviewersにCopilotを指定する方法でレビューを依頼してみたが、"Comments suppressed due to low confidence" が数件出るだけで、全然レビューしてくれなかった
    - PRの"Files changed"タブでCopilotボタンを押し、「◯◯関数の可読性を上げて」とか「◯◯の処理が重複しているから、重複を除去して」などと伝えると結構良い感じにリファクタリングしてくれた
        - Copilotの出力に不満がある場合は、良い感じの結果になるまで指示し直した
        - そして、最終的なリファクタリングの方針と結果についてをPRのコメントに掲載するための文案を考えてもらった
    - Copilotからの回答の一番下にあるクリップボードボタンを押すと、Markdown形式の回答がクリップボードにコピーされる
- 2025/04/25
    - [GitHub Copilot code review now supports C, C\+\+, Kotlin, and Swift \- GitHub Changelog](https://github.blog/changelog/2025-04-23-github-copilot-code-review-now-supports-c-c-kotlin-and-swift/)
        - KotlinとSwiftはパブリックプレビューだと聞いていたが、昨日の時点で既にGAだったということか
        - 公式ドキュメントも英語版ならパブリックプレビューの旨の記述が削除されている
            - [Using GitHub Copilot code review \- GitHub Docs](https://docs.github.com/en/copilot/using-github-copilot/code-review/using-copilot-code-review?tool=webui)
