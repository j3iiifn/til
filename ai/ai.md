# 生成AI

## 読んだ記事 ※公開日昇順
### GitHub Copilot
- （公開日：2024/03/11、閲覧日：2025/05/24）[VSCodeでGitHub Copilotを効率的に使用する方法 \- カカクコムTechBlog](https://kakaku-techblog.com/entry/vscode-github-copilot)
- （公開日：2024/10/30、閲覧日：2025/05/24）[本家GitHub Copilot For Xcodeがパブリックプレビューに！早速触ってみた](https://zenn.dev/ruwatana/articles/da631ab770165a)
- （公開日：2024/12/08、閲覧日：2025/05/24）[Xcode 16から登場したSwift AssistとGitHub Copilotの比較 \- しめ鯖日記](https://llcc.hatenablog.com/entry/2024/12/08/154818)
    - この記事で試しているのはSwift AssistではなくPredictive code completionだと思う。Swift Assistは2025年5月現在でもまだリリースされていない
- （公開日：2025/02/20、閲覧日：2025/05/24）[「Xcode」でも「GitHub Copilot」の無料プランでコード補完機能を利用可能に　何がメリットか：チャットアシスタント機能はプレビュー段階 \- ＠IT](https://atmarkit.itmedia.co.jp/ait/articles/2502/20/news088.html)
- （公開日：2025/03/04、閲覧日：2025/06/26）[カスタムインストラクションの一歩先！GitHub Copilot への指示を分割管理しよう](https://zenn.dev/microsoft/articles/ghcp-reusable-prompt-files)
    - 例に挙げられているルールはむしろ`.git/copilot-instructions.md`に書くべき事項だと思った
    - 公式ドキュメントに記載されている内容を正しく理解できてなさそうな雰囲気だった
- （公開日：2025/04/08、閲覧日：2025/05/24）[VS CodeでCopilot Chatに与えると便利なコンテキストまとめ](https://zenn.dev/rescuenow/articles/38b955d885d561)
- （公開日：2025/05/20、閲覧日：2025/05/20）[［速報］「GitHub Copilot Coding Agent」パブリックプレビュー。AIにIssueをアサインすると、解決に向け自律的にプログラミング － Publickey](https://www.publickey1.jp/blog/25/github_copilot_coding_agentaiissue.html)
    - `GitHub Copilot Agent Mode` と `GitHub Copilot Coding Agent` は名前が似ていて区別しづらい
- （閲覧日：2025/05/24）[github/CopilotForXcode: Xcode extension for GitHub Copilot](https://github.com/github/CopilotForXcode)
    - 試してみて気づいたこと（VSCodeとの比較）
        - 使用できるモデルが少ない（Preview段階のモデルが使用できない）
        - xibやstoryboardをコンテキストに追加できない
        - エディタのタブやProject Navigatorからチャット欄へドラッグ＆ドロップしても、そのファイルをコンテキストに追加できない
        - コードベース全体をコンテキストにできない
        - Xcode Source Editor Extensionで実現不可能なことはできない
        - 新機能が組み込まれるのが遅い（開発の活発さが負けている）
            - Agent Modeの搭載がVSCodeは2025/04/03、Xcodeは2025/05/19
        - 日本語で話しかけても英語で応答することが多い（日本語でお願いしますと言えば日本語で返ってくるが、プロンプトに毎回含める必要があるのは面倒）
        - スラッシュコマンドとコンテキスト変数が利用できない
- （公開日：2025/05/25、閲覧日：2025/07/03）[GitHub Copilot Coding Agent と Claude Code \+ GitHub Actions はどちらがどんな人向きか｜Hi\-Noguchi \| 株式会社きみより代表](https://note.com/hi_noguchi/n/n15e3ba85a957)
    - GitHub Copilot Coding Agentを750 premium requests分を使ってみての感想。内部的にどのモデルが使われているかをログで確認しているのが面白い。
- （公開日：2025/06/08、閲覧日：2025/07/05）[GitHub Copilot Coding Agentで消費するプレミアムリクエスト等を集計してみた](https://tosi-tech.net/2025/06/premium-requests-for-github-copilot-coding-agent/)
    - 2週間で5594 premium requestsを消費していてガチ勢だった
- （公開日：2025/06/09、閲覧日：2025/06/10）[\#意識低いAICodingチュートリアル \#01 インターネット老人会のサイトを作ろう \[GitHub Copilot Agent mode 版\] \#初心者向け \- Qiita](https://qiita.com/chomado/items/acaf251a2f6bf984a3df)
- （公開日：2025/06/23、閲覧日：2025/07/17）[ChatGPTやCopilot ChatでEnterで改行する方法](https://zenn.dev/barabara/articles/e6852b669532f0)
- （公開日：2025/07/06、閲覧日：2025/07/10）[GitHub Copilot活用【サイボウズ新人研修2025】 \- Speaker Deck](https://speakerdeck.com/cybozuinsideout/github-copilot-utilization)
    - 日本語で応答してくれるように設定する：Personal instructionsに `Always respond in Japanese.` と記述する
    - コードリーディングの補助、設計の壁打ちとしてCopilotを使用する例
- （公開日：2025/07/10、閲覧日：2025/07/18）[GitHub Copilot Coding Agent の Premium Request の消費が大幅に緩和されました at SE の雑記](https://blog.engineer-memo.com/2025/07/11/github-copilot-coding-agent-%E3%81%AE-premium-request-%E3%81%AE%E6%B6%88%E8%B2%BB%E3%81%8C%E5%A4%A7%E5%B9%85%E3%81%AB%E7%B7%A9%E5%92%8C%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F/)
- （公開日：2025/07/15、閲覧日：2025/07/18）[GitHub Copilot Coding Agentが利用しているGitHub Actionsの使用料](https://zenn.dev/mahata/articles/actions-usage-for-github-coding-agent)
- （公開日：2025/08/01、閲覧日：2025/08/04）[【Github Copilot】設計書があるなら、全部Copilotに実装させよう](https://zenn.dev/aya/articles/3b8ea962b61bd8)
    - まさかのeditモード縛りだった。ぜひagentモードを使ってほしい。


#### 公式ドキュメント
__Changelog__

- 🌟定期的に確認🌟 [Use Case: copilot \- GitHub Changelog](https://github.blog/changelog/label/copilot/)
- （公開日：2025/07/10、閲覧日：2025/07/18）[GitHub Copilot coding agent now uses one premium request per session \- GitHub Changelog](https://github.blog/changelog/2025-07-10-github-copilot-coding-agent-now-uses-one-premium-request-per-session/)
- （公開日：2025/08/07、閲覧日：2025/08/08）[July 2025 \(version 1\.103\)](https://code.visualstudio.com/updates/v1_103)

__Docs__

- （閲覧日：2025/05/24）[Visual Studio Code documentation > Copilot chat context](https://code.visualstudio.com/docs/copilot/chat/copilot-chat-context)
    - （2025/08/16）`#codebase` を使うには `github.copilot.chat.codesearch.enabled` という設定を有効にする必要がある（デフォルトでは無効になっている）

### Claude Code
[claude-code.md](claude-code.md)


### Cursor
- （公開日：2025/02/27、閲覧日：2025/04/13）[ASCII\.jp：いま文章を書くのに「CURSOR」を使わないのは損だ](https://ascii.jp/elem/000/004/253/4253872/)
- （公開日：2025/03/17、閲覧日：2025/04/14）[ASCII\.jp：文章術としてのCursor入門 \(1/6\)](https://ascii.jp/elem/000/004/256/4256350/)
- （公開日：2025/04/20、閲覧日：2025/06/05）[Rulesを全部捨てて認識をリセットした話（with Gemini 2\.5 Pro）](https://zenn.dev/ks0318/articles/16c68d9c8021d1)
- （公開日：2025/05/08、閲覧日：2025/05/10）[CursorにPMBOKやDMBOKを叩き込んで、専門業務を爆速化する未来、見えた！](https://zenn.dev/channnnsm/articles/215208b067f430)
- （公開日：2025/05/10、閲覧日：2025/05/11）[Cursor入門のツボ \#VSCode \- Qiita](https://qiita.com/Ninagawa123/items/2ac5ac6687c603e9cfb5)
- （公開日：2025/06/04、閲覧日：2025/06/06）[「Cursor」で「素の議事録」を「要件定義書」に高速でまとめなおした話 \#Node\.js \- Qiita](https://qiita.com/WdknWdkn/items/79980f4201c8cf9145bf)
- （公開日：2025/07/08、閲覧日：2025/07/09）[Cursorの価格設定変更の騒動について](https://blog.lai.so/cursor-pricing/)


### Cline
- （公開日：2025/01/31、閲覧日：2025/05/08）[Cline使ってみた \#VSCode \- Qiita](https://qiita.com/shohta-noda/items/8c12f6ce69bc923973a4)
    - この人はDeepSeekのAPIを使用していた
-  （公開日：2025/05/07、閲覧日：2025/05/08）[AIエージェントCline、freeeはどうやって全社導入した？ \- freee Developers Hub](https://developers.freee.co.jp/entry/ai-cline-rolling-out)
    - Clineで利用する基盤モデルとしてAmazon Bedrockを採用している
    - ClineとAmazon Bedrockの間に独自プロキシを仲介させ、危険な入出力をフィルタリングしている　→独自プロキシの実装が気になる


### Devin
- （公開日：2025/07/15、閲覧日：2025/07/15）[Devinにはてラボのサービスを作ってもらったので、かかった費用を大公開 \- Hatena Developer Blog](https://developer.hatenastaff.com/entry/2025/07/15/121147)
- （公開日：2025/08/01、閲覧日：2025/08/01）[ドキュメント整備をDevinに任せたら、4週間分の作業が6時間のレビューで完了した話](https://zenn.dev/smartshopping/articles/b3d6804e932565)


### Codex
- （公開日：2025/05/17、閲覧日：2025/05/17）[“やる余裕がない”を解消。ChatGPTに次世代AIコーディングパートナー｢Codex｣が追加 \| ギズモード・ジャパン](https://www.gizmodo.jp/2025/05/openai_codex.html)
    - > 私の脳と手がボトルネックになることがある
- （公開日：2025/05/18、閲覧日：2025/05/18）[AIお任せでプログラム開発。ChatGPTの新機能｢Codex｣を試してみた \| ギズモード・ジャパン](https://www.gizmodo.jp/2025/05/chatgpt_codex_handson.html)


### Kiro
- （公開日：2025/07/16、閲覧日：2025/07/16）[amazonの出したIDE「kiro」がめちゃくちゃ未来だったのでClaude Codeユーザーの人はみんな一度試してみてほしい](https://zenn.dev/sesere/articles/31d4b460c949e5)
    - > いわば 「オレオレフレームワーク全盛期」 だったわけです
- （公開日：2025/07/19、閲覧日：2025/07/20）[Kiroとコンテキストエンジニアリングの時流](https://blog.lai.so/kiro-in-context-engineering/)
    - 力作


### Xcode
- （公開日：2024/06/11、閲覧日：2025/05/24）WWDC2024 - Platforms State of the Union
    - [\[21:43〜\]](https://developer.apple.com/videos/play/wwdc2024/102/?time=1303) Predictive code completion
        - Xcodeのエディタで入力を始めるとすぐに提案が表示される。Tabキーで承認できる
        - プロジェクトのコードとコメントがコンテキストとして認識される
            - 指示のためのコメントを書き、最初の数文字を書くと思っていた通りの提案が得られる
        - AIモデルはローカル(Mac)で動くため、コードを外部に送信しない。高速で結果を得られ、オフラインでも動く
    - [\[23:59〜\]](https://developer.apple.com/videos/play/wwdc2024/102/?time=1439) Swift Assist
        - 指示を自然言語でチャット欄に入力するとコードを生成してくれる
        - AIモデルはクラウドで動く
        - コードはサーバに保管されず、モデルの学習に使用されない
- （公開日：2025/01/12、閲覧日：2025/05/24）[iOS開発のAIアシストツール、結局どれがいいのか？ \#osaka\_swift \| ドクセル](https://www.docswell.com/s/shu223/ZP2L2G-ios-ai)


### NotebookLM
- （公開日：2025/05/10、閲覧日：2025/05/11）[イマ面白いAIツール「NotebookLM」をiPadから使ってみよう｜iPad Hacks \| ＆GP](https://www.goodspress.jp/howto/675292/)
- （公開日：2025/05/29、閲覧日：2025/05/30）[NotebookLMアプリの使い方：要約・ポッドキャスト化、スキマ時間のインプットが変わった！ \| ライフハッカー・ジャパン](https://www.lifehacker.jp/article/2505-ai-workhack-notebooklm-how-to-use/)
- （公開日：2025/06/09、閲覧日：2025/06/13）[【簡単】NotebookLMでBacklogのRAG構築をするための方法 \| DevelopersIO](https://dev.classmethod.jp/articles/backlog-notebooklm-rag-construction/)
    - この記事では NotebookLM = RAG という認識のようだが、そうなんだっけ？
- （公開日：不明、閲覧日：2025/06/24）[【後編】チームの共通言語をつくる。Opportunity Solutions TreeとAIで整えた判断の土台 \| toitta（トイッタ） \- ユーザーの声に向き合える発話分析ソリューション](https://ja.toitta.com/cases/mantra-part2/)


### Gemini
- （公開日：2025/05/09、閲覧日：2025/05/11）[Gemini の新機能 「Canvas」入門： アイデアをカタチにする活用法をわかりやすく徹底解説！｜Gemini \- Google の AI](https://note.com/google_gemini/n/na32ff1b28878)
- （公開日：2025/08/16、閲覧日：2025/08/16）[【神回】Googleスライドが一瞬で完成する"奇跡"のプロンプト教えます｜まじん](https://note.com/majin_108/n/n39235bcacbfc)
    - スライドのレイアウトや構成要素を定義するJSONをGeminiに作成させ、そのJSONをもとにGoogle Apps ScriptがGoogleスライドを描画するという手法
    - ゴリ押し感がすごい


### Gemini CLI
- （公開日：2025/06/25、閲覧日：2025/06/25）[Google announces Gemini CLI: your open\-source AI agent](https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/)
- （公開日：2025/06/26、閲覧日：2025/06/26）[Gemini CLI の簡単チュートリアル](https://zenn.dev/schroneko/articles/gemini-cli-tutorial)
- （公開日：2025/06/26、閲覧日：2025/07/02）[Gemini CLIの"強み"を知る！ Gemini CLIとClaude Codeを比較してみた \#AIエージェント \- Qiita](https://qiita.com/kyuko/items/b7f7336057859f5c9b4f)
- （公開日：2025/06/27、閲覧日：2025/06/27）[Gemini CLIを会社で使う場合のプラン選択方針](https://zenn.dev/hololab/articles/geminicli-001-75046b80817049)
- （公開日：2025/06/27、閲覧日：2025/07/02）[Gemini CLI を試したいので Claude Code でも同じことをしてみて感じた活路 \#Gemini \- Qiita](https://qiita.com/hokutohagi/items/4eae63a48e74966aeebd)
- （公開日：2025/06/28、閲覧日：2025/07/02）[Gemini CLI is awesome\! But only when you make Claude Code use it as its bitch\. : r/ChatGPTCoding](https://www.reddit.com/r/ChatGPTCoding/comments/1lm3fxq/gemini_cli_is_awesome_but_only_when_you_make/)
    - Claude Codeと比較してGemini CLIはコンテキストウィンドウが大きいのを利用して、Claude Codeがコードベースの情報を収集する際にGemini CLIを利用するようにする例


### Claude（モデル）
- （公開日：2025/05/08、閲覧日：2025/05/10）[うさぎでもわかるClaude 3\.7システムプロンプト流出の解説と示唆](https://zenn.dev/taku_sid/articles/20250508_claude_leak)


### Vibe Coding / Agentic Coding
- （公開日：2025/04/11、閲覧日：2025/04/11）[最近1行もコードを書いていない](https://zenn.dev/notahotel/articles/e70325e770ffa6)
- （公開日：2025/04/18、閲覧日：2025/04/19）[個人的 Vibe Coding のやりかた](https://zenn.dev/yoshiko/articles/my-vibe-coding)
- （公開日：2025/04/26、閲覧日：2025/04/27）[Vibe Coding で遊ぼう](https://zenn.dev/schroneko/articles/lets-play-with-vibe-coding)
- （公開日：2025/04/26、閲覧日：2025/04/29）[Clineとスクラム開発をやってみたら開発速度が2倍になった \#cline \- Qiita](https://qiita.com/autotaker1984/items/6e03302d4a0ec981689f)
- （公開日：2025/04/28、閲覧日：2025/04/28）[CEO業を1週間おやすみしてAIエディタを使った開発をやってみた｜Real SmartHR リアスマ](https://real.smarthr.co.jp/articles/times_serizawa_0001)
- （公開日：2025/05/07、閲覧日：2025/06/05）[MySQLのスキーマ情報を返すMCPサーバーをVibe Codingで作った具体的な流れ \- $shibayu36\->blog;](https://blog.shibayu36.org/entry/2025/05/07/183000)
    - Vibe Codingの具体的な流れ（会話の例も）
- （公開日：2025/05/16、閲覧日：2025/06/28）[Agentic Coding を Reconciliation Loop で効果的に実現するための実装戦略](https://zenn.dev/bitkey_dev/articles/098257fda90c67)
- （公開日：2025/05/26、閲覧日：2025/06/28）[Agentic Coding 感想戦](https://zenn.dev/fumi_sagawa/articles/adc50605a4e1c5)
    - 📝 要件定義とタスク管理をprojectフォルダに保存 [＜実例＞](https://github.com/fumi-sagawa/obsidian-mcp-server/commit/29121a5f1bb023b58e67af97e76ceb1e3352a291)
- （公開日：2025/06/02、閲覧日：2025/06/05）[Claude Code \+ Opus 4でmysql\-schema\-explorer\-mcpの機能改善をしてみた \- $shibayu36\->blog;](https://blog.shibayu36.org/entry/2025/06/02/103000)
- 🌟（公開日：2025/06/10、閲覧日：2025/06/28）[パンチカードからプロンプトへ 〜コードの90%をAIが書く世界で何が待っているのか〜](https://zenn.dev/r_kaga/articles/6d7607c83cefb4)
    - > 不労コード生活
        - 📝 人間が仕様書を更新したらPRが自動作成させる
    - arxivの論文『Vibe Coding vs. Agentic Coding: Fundamentals and Practical Implications of Agentic AI』を引用
- （公開日：2025/06/21、閲覧日：2025/06/28）[もうコードを書く時代は終わり？Vibe CodingとAgentic Codingをわかりやすく解説｜世界のアオキ@生成AI探究者 \| 個人開発withAI](https://note.com/aoki_monpro/n/n986999b320a6)
    - 元ネタはarxivの論文
- 🌟（公開日：2025/06/24、閲覧日：2025/06/25）[参考になった] [AI Agent Manager \(AAM\) として生きていく : 作業環境とワークフローの設計 \#機械学習 \- Qiita](https://qiita.com/icoxfog417/items/f15e92f05b14411fd642)
    - > カスタムコマンドを決められたルール通り実行していくだけで作業が終わる
    - 📝 このワークフローは真似したい
- （公開日：2025/06/30、閲覧日：2025/06/30）[LLMにコンテキストを効率よく渡すには？【前編】 〜大量のファイル群から欲しい部分だけ〜 \- Nealle Developer's Blog](https://nealle-dev.hatenablog.com/entry/2025/06/30/094631)
    - > LLMは「連想ゲーム超上手い君」
    - > 「やってほしいこととは関係ない情報」を渡してしまうと、その関係ない情報に関しても連想ゲームを始めてしまいます
- （公開日：2025/07/17、閲覧日：2025/07/17）[Vide Codingで使うチケットシステムticket\.sh作ったよ｜masuidrive](https://note.com/masuidrive/n/nc68c3f47ed18)
    - 📝 プロンプトを参考にしたい


### コードレビュー
- （公開日：2025/03/31、閲覧日：2025/04/11）[GoogleのLLM「Gemini」でコードレビューをするGitHub Actionsを自力で構築してみた \- NTT Communications Engineers' Blog](https://engineers.ntt.com/entry/202503-gemini-cicd-code-review/entry)
- （公開日：2025/05/05、閲覧日：2025/05/06）[LLMでコードレビューする際の自分用環境を整える](https://zenn.dev/razokulover/articles/058fede74dbbe0)
    - 共感したところ：
        - > 自分が求めるのはむしろ重箱の隅を突いてくるような口うるさいくらいのレビュアーだ
    - 「レビュアーの人格作成用のドキュメント」の言葉がいちいち強くて面白かった
- （公開日：2025/06/06、閲覧日：2025/08/08）[CodeRabbitと過ごした1ヶ月 ─ AIコードレビュー導入で実感したチーム開発の進化 \- DMM Developers Blog](https://developersblog.dmm.com/entry/2025/06/06/110000)
- （公開日：2025/06/20、閲覧日：2025/06/20）[Gemma3 \+ Unsloth \+ GitLab CI/CDで構築する完全オンプレミスAIコードレビュー環境 \| フューチャー技術ブログ](https://future-architect.github.io/articles/20250620a/)
    - 実案件に対するコードレビュー結果についての情報は無かった（まだ実験段階の模様）
- （公開日：2025/06/23、閲覧日：2025/07/14）[GitHub Copilot Agent × Github MCPが変える コードレビュー \-](https://recruit.gmo.jp/engineer/jisedai/blog/code-review-with-github-copilot-agent-x-github-mcp/)
    - 明らかにAIが書いた記事。似た話題が何度も出てくるし、強めな語彙（「革新的」など）を選択している割に具体性に欠け、中身が薄い。信憑性が怪しい文章もちらほらある。
    - github-mcp-serverを使用


### MCP
- （公開日：2025/04/27、閲覧日：2025/04/27）[最小限のMCP Host/Client/Serverをスクラッチで実装する](https://zenn.dev/razokulover/articles/9a0aee8ceb9f3f)
- （公開日：2025/05/10、閲覧日：2025/05/11）[初めて MCP を使うなら Docker MCP Toolkit がおすすめ \#VSCode \- Qiita](https://qiita.com/falya128/items/23020ddba7a7d1ce2e1f)


### 企業での導入
- （公開日：2025/06/24、閲覧日：2025/07/03）[AIコーディングツール導入のリアル ～意思決定を後押しし、開発を加速させるための7社の実践知～ \- Findy Tools](https://findy-tools.io/articles/ai-codingtool/88)


### プロンプト
- （公開日：2025/07/10、閲覧日：2025/07/11）[降霊術で t\_wada を AI に降ろして PR レビューして貰うテクニックが伸びたのでその裏側記事を書きました！｜Ryo@VibeCoder](https://note.com/biwakonbu/n/n0f1c75418030)
    - 降霊術というワードチョイスが面白い
    - 圧縮プロンプトについての先行研究（？）についても触れられていて、さながら論文のよう。良記事
- （公開日：2025/08/15、閲覧日：2025/08/16）[AI「先輩、この仕様よく分からないっす」 \- ABAの日誌](https://aba.hatenablog.com/entry/2025/08/15/124732)
    - AIが必要に応じて人間に助けを求めるようにさせるプロンプトの紹介。🌟良記事

### エッセイ、キャリア論
- （公開日：2025/05/03、閲覧日：2025/05/03）[AI Coding Agent を使うことで、怒り狂い、視座が上昇する話 \- Lambdaカクテル](https://blog.3qe.us/entry/2025/05/03/000513)
    - AI Coding Agent を使うということは、AIに対してマネジメントするということ
    - 気に入った表現
        - > イテレーティブな開発を行うことが前提で、非定型であり、エントロピーの無秩序な拡大を抑止しながら開発しなければならない†現実†の開発
- （公開日：2025/06/19、閲覧日：2025/06/19）[AIでプログラミングが「楽しくなった」人たちと、少し違和感を抱く自分｜magurotuna](https://note.com/maguro_tuna/n/n81f1cabc1183)
- （公開日：2025/06/22、閲覧日：2025/06/22）[Claude Code時代のソフトウェアエンジニア生存戦略｜suthio](https://note.com/suthio/n/n4f79fbe4efda)
    - いい記事だった。また読み返したい。
- （公開日：2025/06/23、閲覧日：2025/06/23）[AIによる開発は楽しすぎるが、基礎学習が疎かになりそうで怖い \- $shibayu36\->blog;](https://blog.shibayu36.org/entry/2025/06/23/090555)


### その他
- （公開日：2025/06/11、閲覧日：2025/06/12）[AI領域における組織の強みを活かすアーキテクチャ設計](https://zenn.dev/aishift/articles/c897d0e095c3d8)
    - タイトルの「AI領域」はAIエージェント自体の開発を指していた
    - この記事で述べられている取り組みはAI云々に特有なものではなく、一般的に複数のチームが同じプロダクトを共同で開発するために必要な取り組みだと思った（技術選定、依存関係の整理）
- （公開日：2025/07/03、閲覧日：2025/07/03）[AIは励まされると頑張れるらしいので、いろんな方法で奨励してみた。 \- カミナシ エンジニアブログ](https://kaminashi-developer.hatenablog.jp/entry/2025/07/03/090000)
- （公開日：2025/07/03、閲覧日：2025/07/03）[AIに仕様書を読ませるとテストケースを自動生成、テストコードも書いてくれる「Autify Nexus」、Autifyが発表 － Publickey](https://www.publickey1.jp/blog/25/aiautify_nexusautify.html)
- （公開日：2025/07/27、閲覧日：2025/07/27）[Kimi K2とLLMのベンチマークスコア](https://blog.lai.so/kimi-k2/)


## 見た動画
- （公開日：2024/07/26、閲覧日：2025/04/17）[【Copilot活用術 vol\.1】ビジネスパーソンの生成AI「Microsoft Copilot」活用法／Copilotで何ができる？便利な機能「ノートブック」とは／全10回シリーズで解説 \- YouTube](https://www.youtube.com/watch?v=DTCwUOd08-I)
- （公開日：2025/04/16、閲覧日：2025/04/24）[GitHub Copilot コードレビュー機能試してみました \- YouTube](https://www.youtube.com/watch?v=UuCJIDkRNUA)
- （公開日：2025/07/11、閲覧日：2025/07/12）[Claude Codeで無限にUIデザインを構築する方法【バイブコーディング/Vibe Coding】 \- YouTube](https://www.youtube.com/watch?v=8vWRCYvLr94)
- （公開日：2025/07/24、閲覧日：2025/07/24）[【t\-wadaさんに聞く】なぜCursorよりClaude Codeが優れているのか \- YouTube](https://www.youtube.com/watch?v=c2IHEeBbY5s)
- （公開日：2025/07/27、閲覧日：2025/07/31）[Claude Codeに新機能\(Hooks, SlashCommand, SubAgents\)が追加されていたので解説してみた \- YouTube](https://www.youtube.com/watch?v=s71I9pVdsv8)


## 講演、セミナー
- （2025/04/08）AI Coding Meetup #1 〜チーム開発×AI、みんなの実践知〜 [＜connpass＞](https://layerx.connpass.com/event/347094/) [＜YouTube＞](https://www.youtube.com/watch?v=Q783txBWcOM) ＜アーカイブ動画あり＞
    - Devin時代の開発組織	Teramoto Daikiさん
    - Enabling Coding Agent - 生成AI時代に理想のコードベース	Yuku Kotaniさん
    - ためす、つくる、Model Context Protocol	Yoshiki Nakagawaさん
    - AIコーディングワークフローへの挑戦	kagayaさん
    - "知のインストール"戦略：テキスト資産をAIの文脈理解に活かす	zawakinさん
- （2025/04/24）GitHub Japan、緊急開催：GitHub Copilotエージェントモードと最新情報 [＜資料＞](https://resources.github.com/ja/githubcopilotaprilupdatewebinar2025/) [＜告知＞](https://x.com/GitHubJapan/status/1911562545069957219)
    - AIによるソフトウェア開発支援は第1フェーズ（単一モデル、会話型、AIを既存機能に埋め込む）／Pair Programmerから第2フェーズ（複数モデル、AIエージェント、AIネイティブ）／Peer Programmerへ
    - 2025年4月にGitHub Copilot Chatエージェントモードがリリースされた
    - VSCodeのCopilot拡張機能のチャットで実装したい機能を依頼するデモをやっていた。Copilotが自律的に計画を立てて、実装はもちろんのこと、ブラウザを使用したテスト（PlaywrightのMCP経由）とGitコミット、GitHubのプルリクエスト作成（GitHubのMCP経由）まで自動でやってくれていた。
- （2025/05/13）Forkwell主催、Cursor導入で ログラス社の現場はどう変わったか - Forkwell AI Study #1 [＜connpass＞](https://forkwell.connpass.com/event/350515/) [＜イベントページ＞](https://jobs.forkwell.com/events/glkorb0-6g9) ＜アーカイブ動画あり＞
    - 『Cursorを全エンジニアに配布、その先に見据えるAI駆動開発の未来』	伊藤 博志 氏
    - 『AIコーディングエージェントをオンボーディングする工夫』	加賀谷 諒 氏
    - パネルトークセッション、視聴者Q&A
        - AI時代において、各世代のエンジニアは今後のキャリア戦略をどうするか	
        - 20代、30代、40代以降で、それぞれの生き方はどう変わるのか、変わらないのか。
        - 個人としてはこの時代をどう生きようと思っているのか
- （2025/05/20）Findy主催、ばんくしさんが語るAI時代のエンジニアキャリア戦略 〜事業にコミットするエンジニアとは？〜 [＜イベントページ＞](https://findy-code.io/events/MCM51Yagh2VcK) ※アーカイブ動画なし、記事化予定とのこと
    - AIはジュニアエンジニアの底上げに効く
    - プログラマーの三大美徳：怠惰、傲慢、短期
    - エンジニアリングから事業へ
- （2025/05/28）Findy主催、- AIエージェントのオンボーディング -ヒトとAIの協同を支える”役割設計”とは [＜connpass＞](https://findy.connpass.com/event/353481/) [＜イベントページ＞](https://findy-code.io/events/RjgPRJ6Qt86pC)
    - AIオンボーディングとAIプロセスマイニング（株式会社LayerX	中村 龍矢さん）[＜資料＞](https://speakerdeck.com/nrryuya/aionbodeingutoaipurosesumainingu)
        - プロセスマイニングを人手でやるのは大変なのでLLMに任せる
            - LLMは①常識を事前学習済みなので企業固有のものだけ学べば良い、②非構造的な過去資料をそのまま扱える、③モデルや特徴量の設計が不要で推論可能なので、プロセスマイニングに適している
    - Devinで実践する！AIエージェントと協働する開発組織の作り方（株式会社ジェネラティブエージェンツ	西見 公宏さん）[＜資料＞](https://speakerdeck.com/masahiro_nishimi/devindeshi-jian-suru-aiezientotoxie-dong-surukai-fa-zu-zhi-nozuo-rifang)
        - 開発組織におけるAIエージェントの役割：①同期的に支援（Cursor）/scale up、②非同期的に支援（Devin）/scale out、③イベント駆動で作動/ambient agents
        - Devinのオンボーディングステップ：①リポジトリのセットアップ→②伴奏してシステムナレッジを育てる→③プレイブックとナレッジを整える
        - Devinのナレッジ
            - System Knowledge : Built-in knowledge, Repo indexes
            - User Knowledge
        - 焦らずに、やれることを一つずつ増やそう
        - エージェント横断で育てたナレッジを一箇所に集め、Devinに情報整理させる（プループリント）
    - AIのためのオンボーディングドキュメントを整備する（株式会社スマートバンク hiroteaさん）[＜資料＞](https://speakerdeck.com/hirotea/ainotameno-onbodeingudokiyumentowozheng-bei-suru)
        - 2025年5月時点で増加中：自立度の高いリモート型エージェント、CLIベースのエージェント
        - 複数のAIを併用するにあたり、共通のオンボーディングドキュメントの必要性が増す　→コードと同じリポジトリでナレッジを管理
        - ナレッジはAIエージェントの探索最適な形で保持する
        - ドキュメント作成をAIエージェントに行わせる：推論力が強く、コンテキストウィンドウが大きいLLMに戦略を立ててもらう→Cursor Agentに戦略を実行してもらい、探索とドキュメンテーションをさせる
- （2025/05/28）【Qiita Bash - 増枠】最近ハマっている生成AI活用法を語ろう！
    - TDD + AIエージェントで設計に集中できる開発環境を作る（Tommyさん）[＜資料＞](https://speakerdeck.com/ryosukedtomita/number-qiitabash-tdddeainishe-ji-imeziwochuan-eru)
        - 人間があらかじめテストを書いておき、そのテストが通るようにAIエージェントに実装してもらう
    - AIコードエディタは開発を変えるか？Cursorをチームに導入して1ヶ月経った本音（iota2023さん）[＜資料＞](https://speakerdeck.com/ota1022/aikodoedeitahakai-fa-wobian-eruka-cursorwotimunidao-ru-site1keyue-jing-tutaben-yin)
        - VSCodeのフォークエディタへの影響：Cursorの機能をGitHub Copilot/VSCodeが追従してきている。Microsoft製拡張機能がフォークエディタで使えなくなった（4月）。GitHub Copilot Chat extensionのOSS化で開発が加速中（5月）
    - 生成AIで実現！スッキリ解決、デッドコードの整理術（kn555）[＜資料＞](https://speakerdeck.com/lmi/cleaning-up-dead-code-link-and-motivation)
        - AI Assistantは活用できているが、AI Agentは活用しきれていない（人間による修正が頻発）
        - AI Agentに詳細なTODOリストを与え、デッドコードを削除してもらった（AIエージェントに任せやすいタスク）
    - 生成AIのエッジ×音声認識×ロボット：フルローカルでここまでできる（RyosukeAmano）
    - 生成AIが変えるアパレル撮影（野田昂希）
    - AIと私、時々ゴースト（株式会社ココナラ 三浦さん）
        - AIの出力の特徴：一見完璧だが微妙に足りない、人間に専門知識がないと評価できない、適切な指示を与えるために深い理解が必要
- （2025/05/29）Findy主催、採用の現場から見るAI利用のリアルな変化〜年間400名以上とお会いするVPoEの本音〜（ファインディ株式会社 VPoE 神谷 健さん） [＜イベントページ＞](https://findy-code.io/events/GXYZbp38tWPZw)
    - エンジニア採用基準：論理的思考力・言語化能力、より一段高いエンジニアスキル、ビジネス感度・理解度、__新しいことに挑戦するバイタリティ__（[IT/Webエンジニア企業動向調査レポート2025年3月版](https://findy-code.io/job-market-trends/20250326)より）
    - 一次情報を取りに行っているかどうか
    - AIで職種の垣根がなくなっていく
    - PdMがPoC作成をAIにさせる
    - 事業会社はプロダクトへの共感が求められる
    - 今まではコーディングについてのHowの質問をしていたが、今は大きなお代（例：アーキテクチャ選定）の質問へ変化している（技術そのものへの興味・理解があるか？解像度高く、深い知識があるか？）
- （2025/06/11）Forkwell主催、LLMのプロンプトエンジニアリング FL#98 [＜connpass＞](https://forkwell.connpass.com/event/356127/) [＜イベントページ＞](https://jobs.forkwell.com/events/uogdhwwil)
    - HOW TO READ 牛本（GitHub Japan 服部 佑樹さん）[＜資料＞](https://speakerdeck.com/yuhattor/how-to-read-prompt-engineering-for-llm-niu-ben)
        - LLMは単にテキストの次の単語を予測するモデルに過ぎない
        - 本書のプロンプトエンジニアリングは巷で言われているフレーズニングだけではなく、広範囲の技術が組み合わさったもの
        - LLMは後戻りできない
- （2025/06/04）KDDIアジャイル開発センター株式会社主催、話題のClaude 4とClaude Codeに入門！（KAGと学ぼう！勉強会） [＜connpass＞](https://kddi-agile.connpass.com/event/357337/) [＜YouTube＞](https://www.youtube.com/watch?v=8BPfZKIa51k) ＜YouTubeアーカイブ動画あり＞
    - Claude 4とClaude Codeの入門解説 ＆ 実演デモ	KAG みのるん 氏
    - Claude Code のすすめ	ぬこぬこ 氏
    - スマホからVibe Coding？ Claude Code Action解説	KAG 久古 氏
    - AWSのBedrockでClaude 4とClaude Codeをセキュアに活用しよう！	森田 和明 氏
- （2025/06/11）Findy Tools主催、AI Engineering Summitプレイベント - AI駆動開発・AIツール活用事例LT [＜connpass＞](https://findy-tools.connpass.com/event/356879/) [＜イベントページ＞](https://findy-tools.io/events/19403e12f1e38c585c98) ＜アーカイブ動画あり＞
    1. 「VibeCodingで加速する開発と支援」	永田 哲平 @tetsuwo0717	GMOペパボ株式会社
    2. 「コードだけじゃない！言語化xAIで上流の常識を覆す」	三木 宏昭 @cloudeep_mikiさん	オイシックス・ラ・大地株式会社
    3. 「LangfuseプラグインによるDifyプロンプト管理効率化」	高木 駿作さん	ガオ株式会社
    4. 「OSS×生成AIで“やってみる”エンジニアリングのススメ」	松尾 宏介さん	楽天カード株式会社
    5. 「Vibe Codingの裏で、"考える力"をどう取り戻すか」	関根 千加@mscll24さん	株式会社クイック
    6. 「新卒エンジニア育成とAIエージェント活用のベストプラクティス」	和田 健太郎さん	株式会社いえらぶGROUP
    7. 「新卒が複数の10年モノのサービスにAIでどう戦ったか」	横山 遥乙@haruotsu_hyさん	GMOペパボ株式会社
    8. 「開発周辺におけるAIツール活用 ー雑感やメンタルモデルを添えてー」	井上 洋樹さん	株式会社スマートラウンド
    9. 「レガシーシステムの機能調査・開発におけるAI利活用」	大隣 卓也さん	オイシックス・ラ・大地株式会社
    10. 「Devin x Terraform：AIはインフラコードの変更とデプロイをどこまで自動化できるか？」	織田 薫さん	株式会社Voicy
    11. 「生成AIによるボイスボットの世界」	高橋 克己@_katsumiさん	株式会社KDDIウェブコミュニケーションズ
    12. 「AIとペアプロしてわかった3つのヒューマンエラー」	池川 貴裕@takapiro_ikeikeさん	株式会社ユーザベース
    13. 「AI活用を前提とした新しい開発スタイル確立の挑戦」	木村 祐太さん	株式会社令和トラベル
    14. 「Perplexity Slack Botを作ってAI活用を進めた話」	大浦 優太郎@yukyan_pさん	GMOペパボ株式会社
    15. 「AIエージェント開発を加速させるLLM実験基盤」	藤岡 和真@kakka_qさん	株式会社PKSHA Technology
    16. 「AI と入社３ヶ月目の私の軌跡 〜Cursorを中心にしたサービス開発体験の構築〜」	金子 冴@sai_kaneko_31さん	株式会社ココナラ
    17. 「AI元年宣言！自家製Devinから始める生産性改革」	望月 慎太郎さん	パーソルキャリア株式会社
    18. 「話題のDevin、エンプラ開発で〇人分の仕事はできるのか！？」	山河 征紀@MasakiYamakawaさん	ウルシステムズ株式会社
- （2025/06/24）Findy主催、Clineの実力と使いどころ〜 現場から見る！スピード開発実践事例〜 [＜connpass＞](https://findy.connpass.com/event/356324/) [＜イベントページ＞](https://findy-code.io/events/H57ULf5A1WLzS) ＜アーカイブ動画あり＞
    - 『Clineを200人でためしてみた 〜モノタロウのAI駆動開発より〜』	株式会社MonotaRO	市原功太郎@ichi_taro3さん [＜資料＞](https://speakerdeck.com/monotaro/monotarounoaiqu-dong-kai-fa-clinebian-clinewo200-deshi-sitemitajian)
    - 『大規模組織のCline導入効果〜開発フェーズだけじゃない活用事例〜』	合同会社DMM.com	石垣雅人@i35_267さん [＜資料＞](https://speakerdeck.com/i35_267/introducing-ai-agents-into-your-organization)
- （2025/06/26）Findy Tools主催、よしこさんと実践！公開Vibe Coding [＜connpass＞](https://findy-tools.connpass.com/event/357113/) [＜イベントページ＞](https://findy-tools.io/events/c72bcec80aa47ca4ac04) ＜アーカイブ動画あり＞
    - 要件定義
        - 目的、必須要件、任意要件を伝え、可能性を開いたまま聞く（自分の中でhowを思いついていても伝えない）
        - 会話の最後でMarkdownファイルを作成させるときのプロンプト例：コーディングエージェントに渡して実装を頼めるように、ここまで話した内容でrequirements.mdを作って。
- 🌟（2025/06/30）CARTA Engineering主催、Claude Code Deep Dive 〜t-wada, mizchiとAgentic Codingの「今」を眺める 〜 [＜connpass＞](https://cartaholdings.connpass.com/event/360380/) [＜YouTube＞](https://www.youtube.com/watch?v=HqXg2vfGX3c) ＜アーカイブ動画あり＞
    - akippa Yuya Hirayama(@hiragram)さん、Deep Dive into ~/.claude/projects [＜資料＞](https://speakerdeck.com/hiragram/projects)
        - Claude Codeのチャット履歴をブラウザで閲覧できるようにするツール（会話ログビューア）を作ったという話
        - akippaではエンジニアにClaude Maxを配布している
    - パネルディスカッション
- （2025/07/07）カウシェ主催、AI開発実例の成功も失敗もぶっちゃけ！【PKSHA・Findy・LayerX・カウシェ】 [＜connpass＞](https://kauche.connpass.com/event/360073/) [＜YouTube＞](https://youtube.com/live/AW6cGiLo6Ss) ＜アーカイブ動画あり＞
    - 株式会社PKSHA Technology CEO室 室長 大野 紗和子 氏
    - 株式会社PKSHA Technology Workplaceカンパニー執行役員 製品開発統括 山本 健介 氏
    - ファインディ株式会社 取締役CTO 佐藤 将高 氏
    - 株式会社LayerX バクラク事業部CPO 榎本 悠介 氏
    - 株式会社カウシェ／執行役員CTO 池松 恭平 氏
    - Claude Maxは経費精算
- （2025/07/08）AI駆動開発主催、Claude Code Meetup Japan #1（Claude Code祭り！） [＜connpass＞](https://aid.connpass.com/event/360017/) [YouTube](https://www.youtube.com/watch?v=KzS4bs3PXlA&t=4497s) ＜アーカイブ動画あり＞
    - クラスメソッド株式会社の事例 1:12:26-：Claude Codeのために400名でAnthropic APIを使用したら1日で3千ドル課金されてしまった →Pro/Maxを個別契約して経費申請
    - AI時代もTDD with Claude Code	kagayaさん(@ry0_kaga)
    - Claude Codeにプロジェクト管理やらせたみた	さとけい@生成AIビジネスの最前線 さん(@AIBizNavigator)
    - 「Claude CodeでClaude Codeをハックする」 〜自作ツールで開発体験を加速する〜	Akihiro Okunoさん (@choplin)
    - Claude Codeの知らない知識、ADK, A2Aを用いたプロダクト開発をClaude Codeで行う	Totsukaさん (@totsukash)
    - Claude codeで https://ezboard.ai/ 開発しました。	hidenori_morikawaさん (morimori.com)
    - Claude Codeによる並列開発のすゝめ	Naturalclarさん(@natural_clar)
    - 「Claude CodeでVibe codingして作った、Claude Codeをコマンドラインから呼ぶためのsimonw/llmプラグイン」。なお「それってClaude Codeでよくない？」	nikkieさん(@ftnext)
    - Claude Code+Cursor+Container use(C3stack仮)で作るローカル並列開発環境のススメ	kaelaelaさん(@_kaelaela)
- （2025/07/10）Findy主催、【AI特集】開発組織における生成AI活用 各社の取り組みと課題とは？ [＜connpass＞](https://findy.connpass.com/event/358866/) [＜イベントページ＞](https://findy-code.io/events/1_tind0n4OEXc)
    - 株式会社フーディソン 木村 竜介さん、IT イノベーション史の類似点から AI 活用を推測する [＜資料＞](https://speakerdeck.com/foodisonhr2020/it-inobesiyonshi-nolei-si-dian-kara-ai-huo-yong-wotui-ce-suru-af4ff77c-03ad-43d9-92dd-deea1efc38bd)
    - 株式会社PeopleX 橘 大雅さん、生成AIファーストの事業・開発組織への変革
        - 株式会社People Xの事例：Claude Pro/Maxは個人で契約して経費申請している
    - 🌟ファストドクター株式会社 宮田 芳郎さん、AI駆動開発で実現した開発生産性3.2倍向上 - 現実のシステム開発における工程横断AI活用のチームプラクティス [＜資料＞](https://speakerdeck.com/fast_doctor/deng-tan-zi-liao-aiqu-dong-kai-fa-teshi-xian-sitakai-fa-sheng-chan-xing-3-dot-2bei-xiang-shang-d8fd6014-c2bf-449d-b477-75438b2b51c7)
        - 良い発表だった
        - 後で読みたい：
            - [AI導入しても効果薄い？チーム全員AIフレンドリー！な環境の作り方、教えます\(前編\)](https://zenn.dev/fastdoctor/articles/de25424a77cf77)
            - [Cursorで実現した開発速度3\.2倍！エンジニア・PM・QA全チームでAI活用する組織変革](https://findy-tools.io/products/cursor/401/553)
- （2025/07/10）Forkwell主催、AI時代の「良いコード／悪いコードで学ぶ設計入門」「ドメイン駆動設計をはじめよう」- FL#100 [＜connpass＞](https://forkwell.connpass.com/event/356295/) [＜イベントページ＞](https://jobs.forkwell.com/events/s4rpcjtbs) ＜アーカイブ動画あり＞
    - ミノ駆動さんの企業秘密のプロンプトが気になる
- （2025/07/14）Findy主催、各社の事例から学ぶ！AIコーディングエージェント活用の現在地 [＜connpass＞](https://findy.connpass.com/event/359453/) [＜イベントページ＞](https://findy-code.io/events/59vAgWQnlgbiD) ＜アーカイブ動画あり＞
- （2025/07/15）Findy Tools主催、GitHub Copilot活用術~MCP・レビュー・issue・Coding Agentまで！~ [＜connpass＞](https://findy-tools.connpass.com/event/359953/) [＜イベントページ＞](https://findy-tools.io/events/70c60d6e8696586ece73) ＜アーカイブ動画あり＞
- （2025/07/16）東京AI祭主催、Claude Code・Gemini CLIで使える！「メモリ機能」で性能をさらにアップする裏技 [＜connpass＞](https://ai-fest-tokyo.connpass.com/event/360358/) ＜アーカイブ動画あり＞
- （2025/07/17）Findy主催、Claude Code Meetup [＜connpass＞](https://findy.connpass.com/event/359987/) [＜イベントページ＞](https://findy-code.io/events/ues5b1nNP1m_f?fr=event_20250717&fsrc=connpass) ＜アーカイブ動画あり＞
    - 株式会社Algomatic erukitiさん、Claude Codeを使って不確実性と戦う [＜資料＞](https://speakerdeck.com/erukiti/claude-code-fights-uncertainty)
        - p.6: AIに頼むタスクは小さくする（特にClaude4は200k contextなので要注意）
        - p.7: issue.mdを入力するとqueueにjobが積まれ、dispatcherが受け取り、並列でjobを実行する自動化ツール（Docker + Hooksで自動制御）
    - Ubie株式会社 鹿野壮さん、実務で使っているClaude Codeの活用事例集 [＜資料＞](https://tonkotsuboy.github.io/20250717-findy-claudecode/)
    - ぬこぬこさん、Claude Code 再入門 [＜資料＞](https://speakerdeck.com/schroneko/re-introduction-to-claude-code)
    - 株式会社Scalar Akihiro Okunoさん、Claude Code SDKの話 [＜資料＞](https://speakerdeck.com/choplin/an-introduction-to-claude-code-sdk)
    - 株式会社BLUEISH 戸塚翔太さん、Claude Codeの知らない知識に立ち向かう
        - Claude CodeをVertex AI経由で使用している
- （2025/07/17）Findy Tools主催、Deep Security Conference [＜connpass＞](https://findy.connpass.com/event/356605/) [＜イベントページ＞](https://deep-security-con.findy-tools.io/) [＜YouTubeアーカイブ動画あり＞](https://findy-tools.io/events/archives/deep-security-con/6)
    - EGセキュアソリューションズ 徳丸 浩さん、セキュリティ専門家が生成AIと過ごす日常
- （2025/07/22）Forkwell主催、Clineから Claude Code まで！AIエージェント、freeeはどうやって全社導入した？ [＜connpass＞](https://forkwell.connpass.com/event/359578/) [＜イベントページ＞](https://jobs.forkwell.com/events/aistudy2) ＜アーカイブ動画あり＞
- （2025/07/22）AI駆動開発主催、Gemini CLI Meetup Japan #1 [＜connpass＞](https://aid.connpass.com/event/361689/) [＜YouTube＞](https://www.youtube.com/watch?v=PceVBrFOQFU) ＜アーカイブ動画あり＞
- （2025/07/23）レバテックLAB主催、Devin/Cursor/Cline全社導入 セキュリティリスクにどう対策した？ [＜connpass＞](https://levtechlab.connpass.com/event/359758/)
    - エムスリー株式会社VPoE 河合俊典（ぱんくし）さん、エムスリーでのAIコーディングにおける意思決定
        - AIコーディングツール（Claude Code含む）のLLMプロバイダとしてGCP Vertex AI（こちらがメイン）やAWS Bedrockを使用してセキュアにしている
            - gcloud authで認証
            - 国内リージョンのモデルを利用
            - 利用可能なモデルの選択、監査ログ、利用者集計など管理機能を利用
- （2025/07/25）Findy主催、Gemini CLI実験レポート ─基礎理解から活用の可能性について [＜connpass＞](https://findy.connpass.com/event/361358/) [＜イベントページ＞](https://findy-code.io/events/spLfZxzESnY3s) ＜アーカイブ動画あり＞
    - 豊田陽介(@youtoy)さん、公開初日に個人環境で試した Gemini CLI 体験記など [＜資料＞](https://speakerdeck.com/you/gemini-cli-report)
    - 🌟KDDIアジャイル開発センター株式会社 久古幸汰(@nvidia_inside)さん、Gemini CLIの"強み"を知る！ Gemini CLIとClaude Codeを比較してみた [＜資料＞](https://speakerdeck.com/kotahisafuru/gemini-clino-qiang-mi-wozhi-ru-gemini-clitoclaude-codewobi-jiao-sitemita)
        - p.4〜14のスライドがとても良い。理系研究者目線で物事を要素分解できている。
            - AIコーディングエージェント性能の決定要因5つ：LLMモデルの性能、ツール内のプロンプト、メモリ機能のプロンプト、参照されるファイル、ユーザー入力のプロンプト
- （2025/07/25）Qiita主催、Qiita Tech Spark 2025 [＜connpass＞](https://increments.connpass.com/event/354942/) [＜イベントページ＞](https://qiita.com/tech-festa/2025/tech-spark) [＜YouTube＞](https://www.youtube.com/watch?v=nEgRn19x4EE) ＜アーカイブ動画あり＞
    - 株式会社いえらぶGROUP 執行役 和田 健太郎さん、「ドキュメント駆動開発：DocDD」事始め～Cursorをチームで擦り倒した結果～
    - まつもと ゆきひろさん、まつもとゆきひろの作り方
- （2025/07/25）AI駆動開発主催、Windsurf Meetup Japan #1 [＜connpass＞](https://aid.connpass.com/event/359327/) [＜YouTube＞](https://youtube.com/live/CPgMGzWzPZw) ＜YouTubeアーカイブ動画あり＞
    - Walden Yanさん、Windsurf Update & Better Together
    - テックファーム 石立宏志(@techfirm_jp)さん、Windsurfでちょっとラクする大規模サイト運用
        - 日本Top30位以内の大規模サイト、十数年保守している
    - SmartHR ほりゆう(@yuki8251198)さん、SmartHRにおけるAIコーディングツール導入の歴史 -Cursorが普及した状態でWindsurfも導入した話-
- （2025/07/28）Findy主催、t-wadaさんに聞く！SQLアンチパターン第2版 - 全27章まとめて紹介！ [＜connpass＞](https://findy.connpass.com/event/359455/) [＜イベントページ＞](https://findy-code.io/events/i_Pzqt6r9dzHh) [＜YouTube＞](https://www.youtube.com/watch?v=mj62B0FlqKI) ＜アーカイブ動画あり＞
- （2025/07/30）カウシェ主催、DeNA・令和トラベル・スマートバンク・カウシェでの開発における生成AIフル活用事例 [＜connpass＞](https://kauche.connpass.com/event/358309/) ＜アーカイブ動画あり＞
    - まず初めにDevinにやってもらってから、人間が直す
- （2025/07/31）Forkwell主催、Claude Codeに全部賭けるために入門する勉強会 [＜connpass＞](https://forkwell.connpass.com/event/361574/) [＜イベントページ＞](https://jobs.forkwell.com/events/07z_83pmd1mo) ＜アーカイブ動画あり＞
    - Ubie株式会社 鹿野 壮さん、Claude Codeを実務開発で使い倒して得られた知見 [＜資料＞](https://tonkotsuboy.github.io/20250731-forkwell-claude-code/)
    - 🌟良い発表だった🌟ストックマーク株式会社 羽柴 大生さん、苦しんで向き合うLLM時代の開発 [＜資料＞](https://speakerdeck.com/hashibadaiki/ku-sindexiang-kihe-ullmshi-dai-nokai-fa)
    - 視聴者Q&Aパネルトーク
        - UbieではClaude CodeをVertex AIで使っている
- （2025/07/31）StudyCo主催、Claude Codeが働くAI中心の業務システム構築の挑戦―AIエージェント中心の働き方を目指して [＜connpass＞](https://studyco.connpass.com/event/361662/) [＜YouTube＞](https://www.youtube.com/live/6Y1zFCa2e-A) [＜資料＞](https://speakerdeck.com/os1ma/claude-codegadong-kuaizhong-xin-noye-wu-sisutemugou-zhu-notiao-zhan-aiezientozhong-xin-nodong-kifang-womu-zhi-site) ＜アーカイブ動画あり＞
    - Claude Codeをcoding agentとして利用するのではなく、汎用的な業務を管理・遂行するために使用する話
    - AIエージェントが中心となってタスク管理と業務を遂行し、必要に応じて人間に助けを求める仕組みづくり
    - LangChainが提唱するAmbient Agents : Human-in-the-Loop, Agent Inbox
    - HumanLayerのOuter Loop
        - 第1世代: Chat
        - 第2世代: Agentic Assistants
        - 第3世代: Autonomous Agents - Outer Loop
- （2025/08/01）LayerX主催、AIカンファレンス「Bet AI Day」LayerXのリアルなAI知見を大公開！CTO, CPO, VPoEたちが語ります [＜connpass＞](https://layerx.connpass.com/event/357958/) ＜YouTubeアーカイブ動画あり＞
    - 🌟代表取締役 CTO 松本 勇気さん、AI時代の経営とBet AI Vision [＜資料＞](https://speakerdeck.com/layerx/ai-era-management-and-bet-ai)
        - 過去2年半の生成AIの変遷
        - 自動運転の6段階のレベルとAIによる業務遂行度合いを対比した表
        - AIツールを使ってください、ではうまくいかない。慣性の壁、セキュリティの壁、学習・理解の壁
            - AI包括予算
    - 🌟バクラク事業 CTO 中川 佳希さん、バクラクによるコーポレート業務の自動運転 [＜資料＞](https://speakerdeck.com/layerx/bakuraku-corporate-autonomous-driving)
        - Chat-oriented programming (CHOP)
        - 自動車の自動運転になぞらえ、業務の自動運転を6段階でレベル分け
        - 🌟AIエージェントを構成要素 (Tools, Memory, ...) ← [Building Effective AI Agents - Anthropic](https://www.anthropic.com/engineering/building-effective-agents)
        - 🌟Sourcegraphのブログ [How to Build an Agent - Amp](https://ampcode.com/how-to-build-an-agent) -> 400行に満たないGoコードで実装されたcode-editing agent
    - Fintech事業 VPoE 髙橋 健太郎さん、金融サービスにおける高速な価値提供とAIの役割 [＜資料＞](https://speakerdeck.com/layerx/accelerating-value-with-ai-in-finance-service)
    - AI・LLM事業 CPO 小林 篤さん、LLMをツールからプラットフォームへ〜AI Workforceの戦略〜 [＜資料＞](https://speakerdeck.com/layerx/llm-from-tool-to-platform-ai-workforce-strategy)
    - 執行役員 CISO 星 北斗さん、Bet "Bet AI" - Accelerating Our AI Journey [＜資料＞](https://speakerdeck.com/layerx/bet-bet-ai-accelerating-our-ai-journey)
    - 🌟Principal 名村 卓さん、人に寄り添うAIエージェントとアーキテクチャ [＜資料＞](https://speakerdeck.com/layerx/empathetic-ai-agent-architecture)
        - p.25: コンテキストの制約：サイズ上限、大きいと混乱、時間とともに増えていく
        - p.25: コンテキストの構成要素：セッション上の会話、過去の行動履歴、手順書、マニュアル・ガイドライン、システムプロンプト、ツールコールの結果
    - バクラク事業 AI・機械学習部 部長 松村 優也さん、Tech Lead 島越 直人さん、生成AI時代におけるAI・機械学習技術を用いたプロダクト開発の深化と進化 [＜資料＞](https://speakerdeck.com/layerx/evolving-ai-ml-products-in-genai-era)
    - クロージング
        - ReActの考案者による記事。AIはthe second half (後半戦)に入った。今まではモデルの進化によってできることが増えてきたが、これからはアプリケーションの勝負になってきている
            - [The Second Half – Shunyu Yao – 姚顺雨](https://ysymyth.github.io/The-Second-Half/)
- （2025/08/04）東京AI祭主催、AIがルールを破らない世界へ！ClaudeCodeHooks超入門 [＜connpass＞](https://ai-fest-tokyo.connpass.com/event/362938/) ＜Zoomアーカイブ動画あり＞
    - 📝 株式会社フェズ Gota(@gota_bara)さん、Claude CodeでKiroの仕様駆動開発を実現させるには... [＜資料＞](https://speakerdeck.com/gotalab555/claude-codedekironoshi-yang-qu-dong-kai-fa-woshi-xian-saseruniha-dot-dot-dot)
- （2025/08/05）ROSCAFE主催、Claude Codeと挑む、開発設計の現在地 [＜connpass＞](https://rosca.connpass.com/event/363169/)
    - Gotaさん、データ分析のためのClaude Code ~marimoを使おう~ [＜資料＞](https://speakerdeck.com/gotalab555/detafen-xi-notamenoclaude-code-marimowoshi-ou)
        - Jupyter Notebook(.ipynb)形式とClaude Codeの相性が悪すぎるので、Jupyter Notebookを捨ててmarimoを使っている
        - [Claude Codeでmarimo使う時用のhttp://CLAUDE.md](https://github.com/gotalab/claude-code-marimo)
    - Oikon(@oikon48)さん、Claude Codeから我々が学ぶべきこと [＜資料＞](https://speakerdeck.com/oikon48/claude-codekarawo-gaxue-bubekikoto)
    - しば田さん、作ってよかったカスタムスラッシュコマンド [＜資料＞](https://speakerdeck.com/ks0318/zuo-tuteyokatutakasutamusuratusiyukomando)
        - カスタムスラッシュコマンドを作成・編集するためのカスタムスラッシュコマンドを自作
- （2025/08/06）Forkwell主催、生成AIのプロンプトエンジニアリング - Forkwell Library#102 [＜connpass＞](https://forkwell.connpass.com/event/359565/) [＜イベントページ＞](https://jobs.forkwell.com/events/lhl51w6p9) ＜YouTubeアーカイブ動画あり＞
- （2025/08/07）Findy主催、著者陣に聞く！現場で活用するためのAIエージェント実践入門 [＜connpass＞](https://findy.connpass.com/event/363543/) [＜イベントページ＞](https://findy-code.io/events/EmPLr08575_jm) ＜YouTubeアーカイブ動画あり＞
    - 株式会社ジェネラティブエージェンツ 西見公宏 (@mah_lab)さん、書籍紹介
    - Sakana AI株式会社 太田真人 (@ottamm_190)さん、AIエージェントを知る
    - 電通総研 阿田木勇八 (@eightOJ1)さん、AIエージェントを作る
    - 株式会社Algomatic 宮脇峻平 (@catshun_)さん、AIエージェントを現場で使う [＜資料＞](https://speakerdeck.com/smiyawaki0820/2025-dot-08-dot-07-zhu-zhe-zhen-niwen-ku-xian-chang-dehuo-yong-surutamenoaiezientoshi-jian-ru-men-findyrantisetusiyon)
        - マイクのノイズが最悪だったが、スライドの図やグラフはきれいだった
- （2025/08/07）Findy主催、GitHub Copilotの全体像と活用のヒント AI駆動開発の最初の一歩 [＜connpass＞](https://findy.connpass.com/event/359954/) [＜イベントページ＞](https://findy-code.io/events/xjb2NH7xQ1k9m) ＜YouTubeアーカイブ動画あり＞
    - GO株式会社 Atsushi Morimoto (@74th)さん [＜資料＞](https://speakerdeck.com/74th/github-copilot-an-overview-and-tips-for-effective-use)
        - GitHub Copilotの多岐にわたるサービスを網羅的に説明している良発表
            - コード補完、チャット（VSCode拡張、IDE拡張、Web）、チャット内のAsk/Edit/Agentモード、Coding Agent、PRレビュー、…
        - Copilot Chatで `@vscode` とつけるとVS Codeの使い方を質問できる
- （2025/08/08）Findy主催、Kiro使ってみてどうだった？ ～試してわかった活用のヒント～ [＜connpass＞](https://findy.connpass.com/event/362924/) [＜イベントページ＞](https://findy-code.io/events/mNYVOt1Bds7LU) ＜YouTubeアーカイブ動画あり＞
    - メルカリ Kuu(@Fumiya_Kume)さん、KDDIアジャイル開発センター みのるん(@minorun365)さん、NTTテクノクロス @_watanyさん
- （2025/08/08）AI駆動開発(AI-Driven Development)主催、Claude Code Meetup Japan #2（Claude Code祭り！#2） [＜connpass＞](https://aid.connpass.com/event/361635/) [＜YouTube＞](https://www.youtube.com/watch?v=1IfoHU7UEgQ) ＜アーカイブ動画あり＞
    - 📝 7:16- @gota_baraさん『Claude Codeは仕様駆動の夢を見ない』 [＜資料＞](https://speakerdeck.com/gotalab555/claude-codehashi-yang-qu-dong-nomeng-wojian-nai)
    - 29:47- @yukukotaniさん『Scale out your Claude Code ~自社専用Agentで10xする開発プロセス~』 [＜資料＞](https://speakerdeck.com/yukukotani/scale-out-your-claude-code)
        - 変更前タイトル：Claude CodeをDevinにしよう - 叩き駆動開発のススメ
        - Uvin
    - 45:53- @AkiraTametoさん『Claude Codeサブエージェント機能』
    - 1:10:48- XServer 前島さん『リモート環境(VPS)を活用したClaude Codeの導入と運用』
    - 1:24:01- @t_fujita24さん『hooksのStopをつかって永遠にpbi定義&開発を繰り返させ続けて、自律的にプロダクトに新機能を追加させるSingularity的方法』
    - 1:31:49- @enzerubankさん『スクラムイベントの議事録をAIが書く時代 〜Claude Code活用事例〜』
    - 1:40:04- @NakaOtonowaさん『Claudeと一緒に仕様書から実装してみた』
        - Claude Codeと対話を繰り返してドメインモデル図を洗練させ、ペアプロの指摘内容をルールに追加していき、Clean Architectureを実装
    - 📝 1:46:33- @sakas1231さん『俺的 instruction の書き方』 [＜資料＞](https://speakerdeck.com/sakas/an-de-instructionnozuo-rifang)
        - 独自に開発フローを試行錯誤していたらKiroと同じようなフローに行き着いた
    - 1:54:21- @shuntaka_jpさん『Claude Codeをdotfiles管理しよう！(おすすめの設定を添えて)』 [＜資料＞](https://speakerdeck.com/shuntaka/lets-manage-claude-code-with-dotfiles)
        - HooksのStopイベントで静的解析結果をフィードバックする
    - 2:01:38- @watarumoriokaさん『Claude CodeでmacOSのアプリを作ってみた』
- （2025/08/19）東京AI祭主催、Kiroで始めるビヘイビア駆動開発 [＜connpass＞](https://ai-fest-tokyo.connpass.com/event/364230/)
    - 📝 Galirage 森重 真純(@umi_mori_jp)さん
        - GalirageのメンバーではClaude Codeの利用割合が多い
        - SDD: Spec-Driven Development (仕様駆動開発)
        - BDD: Behavior-Driven Development (ビヘイビア駆動開発)
            - TDD: Test-Driven Development (テスト駆動開発) の派生
            - Given-When-Then フォーマット（Gherkin記法）
        - [Cognition \| Don’t Build Multi\-Agents](https://cognition.ai/blog/dont-build-multi-agents)
        - マルチエージェントについて https://x.com/umi_mori_jp/status/1948156173514846642
- （2025/08/19）ファインディ株式会社主催、AI時代におけるユニットテストの現在地 [＜connpass＞](https://findy.connpass.com/event/363174/) [＜イベントページ＞](https://findy-code.io/events/6RpiQWJ3ugowE) ＜YouTubeアーカイブ動画あり＞
    - 🌟米久保 剛(@tyonekubo)さん、AI時代に問い直す ユニットテストの価値 [＜資料＞](https://www.docswell.com/s/tyonekubo/K44MXJ-value-of-unittesting)
    - 合同会社CAPH TECH りず(@rizumita)さん、$99.99と¥100の間にある深い溝 - 批判的に問い、明示的に伝える
    - 松谷峰生 (まつ)(@mty_mno)さん、テスト最適化 : AIは変更差分からユニットテスト/結合テスト/システムテストでテストすべきことが出せるのか？
- （2025/08/21）Forkwell主催、ABEMAにおける生成AI活用の現在地 - Forkwell AI Study #3 [＜connpass＞](https://forkwell.connpass.com/event/362360/) [＜イベントページ＞](https://jobs.forkwell.com/events/u1ksk3pswz) ＜YouTubeアーカイブ動画あり＞
    - 波戸 勇二(@dekatotoro)さん、菅 俊弥さん [＜資料＞](https://speakerdeck.com/dekatotoro/the-current-status-of-generative-ai-at-abema)
    - p.20: AIツールに200ドル/人/月を費用負担(必要性に応じてさらに増額)、トレーニング、ワークショップ、先行導入事例の共有、ナレッジベース
    - p.22: 利用している生成AIツール一覧
    - p.23: 利用を許可しているMCPサーバの一覧
    - p.28-: 業務プロセスにおけるAIの活用事例
        - p.33: 従来のテスト項目書を生成AIで分類・シナリオ化し、YAML形式でGit管理
        - p.34: AI Agentによるシナリオテストの自動化
            - [takahirom/arbigent: AI Agent for testing Android, iOS, and Web apps\. Get Started in 5 Minutes\. Arbigent's intuitive UI and powerful code interface make it accessible to everyone, while its scenario breakdown feature ensures scalability for even the most complex tasks\.](https://github.com/takahirom/arbigent)
            - [AIエージェントによるテストフレームワーク Arbigent \- Speaker Deck](https://speakerdeck.com/takahirom/arbigent-test-by-ai-agent-ff262ea0-4da4-40b3-a34a-6d19afe6447e)
    - p.52: LangChainが提唱しているコンテキストエンジニアリングの手法：記述(Write)、選択(Select)、圧縮(Compress)、分離(Isolate)


## X
- （2025/04/27）https://x.com/hamukazu/status/1916502783018303779
    - > 初級者よりAIのほうができるけど上級者にAIは勝てない状況で、初級者を切り捨てては上級者も育たない問題
- （2025/05/19）https://x.com/tomohisa/status/1924346981692096582
    - > 『AIは知識の代替ではなく増幅器』
        - > これまで学んだことを早く行うという意味の増幅
        - > AIに知らないことを壁打ちして自分の知識を増幅
    - 少し方向性が違うけど、自分のアイデアの理論的肉付けをAIにしてもらうことで、自信を増幅させるような使い方を私はしているなと思った

## はてなブックマーク
- https://b.hatena.ne.jp/entry/4774738814939967713/comment/yoiIT
    - スライドを生成AIで作成する手法を紹介した記事に対するはてなブックマーク
    - Gemini DeepResearchのレポート → NotebookLM → 骨子 → Geminiで評価＆改善 → Genspark用プロンプト → Gensparkで仕上げ

## 読んだ書籍
- ＃100日チャレンジ 毎日連続100本アプリを作ったら人生が変わった（大塚あみ、日経BP）
    - Kindleアシストリーダーで聴いた
    - （2025/05/25）〜ステップ3
    - （2025/06/01）〜最後まで
    - プログラミング初心者がChatGPTを活用しつつ、教授の助言を受けながら100日間で圧倒的成長を遂げる様子がリアルに描かれており、興味深かった。人間は成長するんだなと思った


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
- 2025/05/13
    - [LLMでコードレビューする際の自分用環境を整える](https://zenn.dev/razokulover/articles/058fede74dbbe0) を自分なりにアレンジして実践してみた
        - とあるiOSアプリのPRをレビュー対象とした
        - VSCodeのGitHub CopilotをAgentモードで利用した
        - モデルは `Gemini 2.5 Pro (Preview)` を選択した
            - デフォルトの `GPT-4.1` も試してみたが、レビューの数も濃さも全然違った。`GPT-4.1` は浅いことしか言わないが、 `Gemini 2.5 Pro (Preview)` は深いことも言ってくるイメージ
            - でも、`Gemini 2.5 Pro (Preview)` は指摘してくれなかったtypoを `GPT-4.1` が指摘してくれたので、同じPRに対して複数のモデルでレビューするのはアリかもしれない
        - 的を得ているレビューをしてくれるが、要らない指摘も混ざっているので、コードレビューに対するレビューが必要だった
            - それでも、0から自分でレビューを考えてPRにコメントするよりは断然楽だし、自分自身の精神力MPが削られなくて済む
        - ガイドラインのファイルはチャットのコンテキストに追加しなくてもよかった。Copilot agentがプロンプトで指定されたガイドラインのファイルを自律的に読み込んでいた
        - 元記事から変えたこと
            - iOSアプリがレビュー対象であるため、当然、「Railsアプリ特有のコードレビュー観点」のファイルはプロンプトから削除した
            - ローカルで完結したかったので、GitHubからPRを取得するのはやめて、ローカルにあるGitリポジトリのディレクトリから差分を取得するようにした
            - レビューガイドラインを置く場所と、どのディレクトリをVSCodeのワークスペースにするかを迷って、2パターン試した
                - A. iOSアプリのGitリポジトリのルートディレクトリをVSCodeで開き、レビューガイドラインをそこに置く（ワークスペース＝iOSアプリのディレクトリ）
                - B. iOSアプリのディレクトリとは全く異なる場所にレビューガイドライン用のディレクトリを作成し、それをVSCodeで開く（ワークスペース＝レビューガイドライン用ディレクトリ）
                    - これだと、Copilot agentがiOSアプリのソースコードにアクセスする経路が、ターミナルで実行する各種コマンド（cdでiOSアプリのディレクトリに移動し、git diffで差分を確認するなど）になってしまう
                    - プロンプトに対象のGitリポジトリがあるローカルディレクトリのフルパスを書いたら、Copilot agentがターミナルでcdコマンドを実行して、そのディレクトリに移動していた
            - develop ブランチと現在のブランチの差分をレビュー対象にするようにプロンプトを変更した
                - 比較するときに使用するgitコマンドも添えてあげた。コマンドを何も指示しなかったら、ページャー付きでgit diffを実行してしまって永遠に処理が終わらなかったり、`--no-pager` オプションを付ける位置が間違っていて無限に失敗し続けていたため
            - レビュー結果を出力するファイル名にYYYYmmdd_HHMMを含めるようにプロンプトで指示したら、HHMMがうまくいかないようで、ファイル作成に2回失敗して最終的に3個作成されてしまった。しかも全然違う時刻だった
            - 何回か実行してみたら英語でレビューが返ってきてしまったことがあった。日本語でレビューするようにプロンプトに指示を追加した
        - 今後の課題
            - 出力されるMarkdownファイルのフォーマットが実行する度に毎回異なって地味にストレスを感じる。出力のテンプレートを作成してプロンプトに含めたい
            - 上記のAパターンとBパターンはレビュー内容に差をもたらすのかを検証したい
            - ソースコードの差分だけでなく、変わっていないところも含めてレビューするように指示したい
                - リファラジでもこんな話をしている回があったな
            - 各モデルのレビュー結果の比較分析をしてみたい
            - 別にAgentモードじゃなくても、Askモードでもいい説 is ある
    - GitHub Copilotで自分が今までに何リクエスト消費したのかをリアルタイムに知る方法はあるのだろうか？
- 2025/05/14
    - 昨日試したコードレビューの手法は、Webブラウザ版のGeminiでもできるのでは？関連するファイルを手動でアップロードしないといけないのは面倒だが。GitHub Copilotのリクエストが月間上限に到達してしまったら試してみよう
    - ある関数についてレビューしてもらいたいときは、GitHub Copilotのチャットにファイルをコンテキストで渡して、「◯◯関数について厳しくレビューしてください。少しでも改善の余地があれば必ず指摘してください。」というプロンプトを書くと、採用しても良いと思えるレベルの指摘を割としてくれた。上記の方法で指摘事項が上がって来なかった箇所に対してこの方法で追加レビューすると良い感じ
    - 変な関数名を見つけたらプロンプトで「◯◯関数の命名がおかしいように感じます。そのことを同僚に指摘し、改善策を提示したいです。文案を考えてください。」と書くと、PRコメントでそのままそっくり使えるような文が返ってくる。これでレビュー作業がかなり楽になる
    - 「◯◯関数の意図や動作がわかりません。わかりやすく教えて下さい。」とお願いしたら、わかりやすく教えてくれた
    - VSCodeのCopilotチャットでAIから返ってきた回答を右クリックし、Copyを押すと回答がMarkdown形式でクリップボードにコピーされる
- 2025/05/15
    - 1500行ほどあるSwiftファイルをGitHub CopilotのAgentモードで編集させたら、すごく時間がかかったし、失敗することもあった。1ファイルの長さが長くなりすぎるとAIのパフォーマンスが下がるので、1ファイルあたりの長さは短く保つほうが良いのだろう
    - コードレビューで直してほしい箇所を見つけたときに、GitHub Copilotのチャットで「〇〇はなんか違うよね」とだけ雑に書いたら、Copilotが意図を汲んで論理的に言語化してくれてビックリした。私はその回答をそのままPRのコメントに貼り付けるだけで済んだ。このお陰でコードレビューの疲労感が半減したように思う。でも、こんなことばっかりしていたら私の脳みそが退化しそう
- 2025/05/17
    - Gemini 2.5 Proに簡単なPythonプログラムを書かせた。プロンプトは推敲なしで一発書きしたので、あまり綺麗な日本語表現ではなかったが、Geminiが適切な言い方に直してコメントを書いてくれた。何も指示していないのに動作確認用のコードも末尾につけてくれた。それをユニットテストにしてほしいとお願いしたら、ちゃんとユニットテストにしてくれた。簡単なプログラムを0ベースから作るなら、自分で作るよりもAIに作らせるほうが圧倒的に早い。その反面、自分の能力が衰えていきそうで恐ろしい。
- 2025/05/19
    - クラス設計について、AIにアイデアを出させると自分が思いつかなかったアイデアが出てきて楽しい
- 2025/05/20
    - 今日はGitHub Copilot Agent Modeに延々とiOSアプリのリファクタリングをさせていた
        - 大きな課題を丸ごといっぺんに実行させると頓珍漢な結果が返ってくるし、時間もかかるので、課題を小分けにして与えるとよい
        - 同じチャットで複数の課題を実行するとAIが話を混ぜてしまうことがあったため、課題ごとにチャットを分けるとよい
        - やっぱり1000行以上あるファイルは、ときどき読み取りと書き込みに失敗する
- 2025/05/21
    - 今日もGitHub Copilot Agent ModeにiOSアプリのリファクタリングをしてもらった
    - 人間と違って、AIは振り回し放題。やっぱりちょっと違ったから前の状態に戻して、というのを何の躊躇もなく言える
    - 人間とAIの比較
        - 人材育成を度外視すると、逐一修正指示が必要なジュニアレベルのエンジニアよりも、AIの方が様々な面で上回っている
            - 作業速度・修正速度が速い
            - 依頼時の説明が雑でもある程度汲み取ってくれる
            - 依頼時の言葉遣いを気にしなくて良い
            - 世界中の良い感じのコードを参考にして実装してくれるので、変な設計や変な命名になることがあまりない（変になるときもあるが、人間よりも頻度が低い）
            - 英語として自然な命名を考えてくれる（日本人は英語が外国語である都合上どうしても英語が苦手な人が多く、不自然な命名をしてしまいがち）
        - 人間は大雑把な概略レベルの指示でも"正しい設計"でプログラムを書けるレベルにならないと、AIに淘汰されてしまいそう（そうでないレベルなら、その人に任せるよりAIに任せたほうがコストが低い）
    - 50%くらいの確率（体感）でもともとあったコメントが消されてしまう
- 2025/05/22
    - GitHub Copilot Agent Modeにリファクタリングさせると、消してはいけない処理を消してしまうことがたまにある
- 2025/05/30
    - Androidアプリの不具合修正にもGitHub CopilotのAsk modeとAgent modeを使ってみた
        - Android Studio拡張のCopilotはまだAgent modeが搭載されていないため、VSCodeのCopilot拡張を使った
            - Android StudioとVSCodeの両方を開いて作業しないといけないのは少し面倒だが、ウルトラワイドディスプレイを使用しているので作業スペース的には問題ない
    - 複数のファイルにまたがって修正する必要があるときに、Agent modeは1〜2ファイルしか修正してくれないことがある
        - コンテキストで修正対象のファイルを全部渡したほうが安定して全ファイルを修正してくれるかも（気のせいかも）
    - Ask modeで何回かやりとりしながら設計を固め、最後にAgent modeに切り替えて一言「やって」とお願いするのが効率が良さそう
        - Agent modeがファイルを読み書きするのにかかる時間は、Ask modeがファイルを読み取って思考する時間よりも長くかかる
            - 特に数百行〜数千行あるファイルだと読み書きにすごく時間がかかる
        - なので、具体的な設計を指示せずにいきなりAgent modeで依頼すると、依頼→作業→修正依頼→作業→…の繰り返しのテンポが遅くなってしまう
        - Ask modeで先に議論するほうがフィードバックループが短くなる
- 2025/05/31
    - 初めてNotebookLMを使ってみた。試しに [Multi\-file editing, code review, custom instructions, and more for GitHub Copilot in VS Code October release \(v0\.22\) \- GitHub Changelog](https://github.blog/changelog/2024-10-29-multi-file-editing-code-review-custom-instructions-and-more-for-github-copilot-in-vs-code-october-release-v0-22/) をソースにして音声合成させてみたら本当に2人が自然に会話しているような音声が出来上がっていたて驚いた。でも言い回しが英語の直訳っぽい感じだった
- 2025/06/02 : GitHub Copilot
    - GPT-4.1の応答内容の雰囲気が先週と違う気がする（どこがどう違うのか言語化できないが）
    - GitHub CopilotのAgent modeで不具合の原因を教えるように依頼すると、原因に対する修正も実行されてしまう。教えてくれるだけでいいんだけどなあ
    - GitHub CopilotのAsk modeで不具合の原因を教えてもらいたいときに、プロンプトに再現手順と事象、デバッグ結果を書き、コンテキストに関連するファイルを全部渡してあげると具体的にどこがダメなのか教えてくれた
        - コンテキストを一切渡さないと、ある程度コードを見て考えてくれるが、当たり障りのないざっくりしたことしか言ってくれなかった
    - GitHub CopilotのAgent modeに複数ファイルにまたがる修正を依頼すると、最初の1〜2個くらいしかやってくれない
    - Xcode extension for GitHub Copilot の agent mode でiOSアプリのリファクタリングをさせてみた。複数のファイルを読み取ってリファクタリングの方針を考えてくれるし、まあ使えるかなと思った。でもやっぱり日本語で話しかけているのに英語で返してくるのはやめてほしい
    - 私はAndroidが主担当なのでiOSやSwiftのベストプラクティスは全然わからないけど、Copilotがよしなに提案してくれるからiOSアプリのリファクタリングが捗って楽しい
- 2025/06/03
    - Xcode extension for GitHub Copilot
        - チャットで上下キーを押しても前後のプロンプトを呼び出せない
        - チャットの内容をコピーしたいのにできない（コピーボタンを押してもクリップボードにコピーされない）
        - 修正しましたと言っているのに実際には修正されていないことがあって喧嘩した
        - 編集速度がVSCode拡張と比較してかなり遅い気がする
    - VSCode
        - .github/code-instruction.md
            - もしかして、チャットの会話が長く続くとこのファイルの内容を忘れる？
            - いや、3往復程度でも忘れることがあった
        - 修正しましたと言っているのに実際には修正されていないことがたまにある
        - `◯◯関数にリファクタリングの余地はありますか？` と問いかけると厳し目にレビューしてくれる
        - Copilotが繰り返しがちなミスを防止するための指示を `.github/copilot-instructions.md` に記載したら、以前よりストレスが減った
- 2025/06/04
    - VSCode / agent mode
        - Gemini 2.5 Proが高確率で503エラーになってしまう
        - 独自のプロンプトで指定のブランチの差分についてコードレビューをさせている
            - Swiftファイルのヘッダにあるコメントについて、`コメントブロックに記載されている日付はレビュー対象に含めないでください。` とプロンプトで指示したのに、Gemini 2.5 Proが次のようなレビューコメントを付けてきてムカッときた
                > #### [nits] ファイルヘッダーコメントの日付
                > - **行番号**: 5
                > - **指摘内容**: ファイルヘッダーの作成日コメントが `Created by Copilot on 2025/06/02.` となっています。
                > - **理由・改善案**: レビュー対象外ではありますが、実際の作成日や最終更新日に修正することを推奨します。
- 2025/06/06 : GitHub Copilot
    - `〇〇関数を別のもっと良いアルゴリズムで書き直してほしい`
- 2025/06/09
    - GitHub CopilotでClaude Sonnet 4が利用できるようになったので、試しにiOSアプリの不具合を修正させてみた
    - プロンプトで再現手順と原因は伝えたが、対処方法は伝えなかった
    - Claude Sonnet 4は自律的に関連するコードを読み込み、ほぼ正解に近い方針で修正していた
    - 同じプロンプトでGPT-4.1とGemini 2.5 Proにも修正させてみたが、全く使い物にならないし参考にもならないレベルだった
        - 特にGemini 2.5 Proは不具合とは無関係な消してはいけないコードを消したり、ログ出力を勝手に変えたりして害でしかない
    - 先月からClaude Codeが人気な理由が垣間見えた
- 2025/06/10
    - GitHub Copilotのコードレビュー機能（Pull RequestのReviewerにCopilotを指定するやつ）がAndroidの専門的な内容の指摘をしてくれて助かる
        - 例：setFragmentResultListenerのLifecycleOwnerはFragment自身（`this`）ではなく`viewLifecycleOwner`を使ったほうがいいという指摘
    - `次の試験項目書について、問題点を指摘してください。` + Googleスプレッドシートからコピペ（TSV形式）
- 2025/06/11
    - [GitHub Copilot Agent Mode / Claude Sonnet 4] Androidアプリの不具合を修正した後に、次のようなプロンプトで試験項目書の作成を依頼したら、私が気づいていなかった影響範囲に気づいてくれてありがたかった
        > developブランチからHEADまでの差分によって次の不具合を解消しました。これから手動で試験しようと思っています。修正の影響範囲を全て洗い出し、試験項目書を作成してください。
        > 差分は次のコマンドで取得してください。
        > git --no-pager diff develop...HEAD
        > （以下、不具合の内容の説明）
- 2025/06/27
    - VSCode / GitHub Copilot Agent Mode
        - VSCodeのPrompt files機能を使い始めた
            - この機能はまだExperimentalの段階なので、GitHub Organization内のユーザの場合は管理者がOrganizationの Settings > Copilot > Policies で `Editor preview features` を `Enabled` にすると利用可能になる
            - プロンプトファイルに `gh api ...` コマンドを実行するように指示を書いたら、モデルによって実行してくれるかどうかが分かれた
                - GPT-4.1は実行してくれない
                - Claude Sonnet 4は実行してくれた
        - Agent modeでファイルを編集するときの挙動がモデルによって異なる
            - GPT-4.1 : ファイル全体を1回で編集する
            - Claude Sonnet 4 : 数行ずつ複数回に分けて編集する
                - 同一文字列を一括置換するほうが効率が良いときはsedコマンドを使って置換してくれることもある。とても賢いね！
        - 既存コードの設計変更やリファクタリングを伴う新機能開発はagentic codingしづらい
        - Explore, Plan, Code, Commitを真似しようとしたけど、開発内容の粒度が大きすぎたせいか、Planの段階で私がケチつけまくって進まなかった
            - [Claude Code Best Practices \\ Anthropic](https://www.anthropic.com/engineering/claude-code-best-practices)
- 2025/07/01
    - VSCode / GitHub Copilot Agent Mode
        - 既存実装の確認（Explore相当）
            - GPT-4.1：プロンプトで明示的に指示しないと、コードを確認してくれない
                - 具体的なクラス名やファイル名を添えて既存の実装を確認するように指示すると、そこをを起点にコードを探索してくれる
                - 具体的なクラス名やファイル名を教えずに既存の実装を確認するように指示しても、基本的にコードを探索してくれない（探索してくれるときもあるが）
            - Claude Sonnet 4：プロンプトで明示的に指示しなくても、既存コードを自主的に確認してくれる
        - 既存実装の確認と実装計画を1つのプロンプトに書くと、
            - GPT-4.1：既存実装の確認をせずに一般論しか言ってくれない　→まず既存実装の確認だけをプロンプトに書いて実行し、それから次のプロンプトで設計を依頼するとうまくいく
            - Claude Sonnet 4：両方ちゃんとやってくれる
        - 最初にPBIを入力し、その後は定型プロンプトを順次入力するだけで実装が完了するようなワークフローを作りたくて試行錯誤している最中
- 2025/07/07
    - VSCode / GitHub Copilot Agent Mode
        - GPT-4.1：
            - 「●●コマンドを実行してください」とワークスペースのプロンプトファイルに記載して実行しても、「〇〇コマンドを実行し、結果を貼ってください」と応答されてしまう。「あなたが●●コマンドを実行してください」とプロンプトに書くとGPT-4.1がコマンドを実行してくれることもあるが、百発百中ではない。
            - 結果が出力されるまで10秒程度かかるコマンドは出力されるまで待機してくれず、「結果が空のようです」と応答されてしまう。
- 2025/07/10
    - t-wadaさんも言っていたけど、私も命名や設計についてAIに何度も「やっぱり考え直したい」って言って気が済むまで議論してる。食い下がりまくってる。人間相手だとこれはできないね。
    - GPT-4.1はリファクタリング用途では全然使えるけど、新規コードを書かせてはダメ。ファイルの先頭（package宣言の前とか）にデータクラスの定義を書かれてしまったことが何回かあった。他にもわけのわからないミスが多かった。
- 2025/07/17
    - VSCode / GitHub Copilot Agent Mode
        - 実装作業のうち、Copilotが書いたコードと人間が書いたコードの割合を集計したい
            - Copilotがコードを編集してコミットする場合は、Copilotが作成したことが後からわかるようにしたい
                - 方法A. コミットのAuthorがCopilotにする
                - 方法B. コミットメッセージの最終行にCo-authored-byを追加する（共同作成者）
            - 上記のAとBのどちらが良いのかわからないので、とりあえず今日は両方ともやるように `.github/copilot-instructions.md` に指示を書いた
        - Enterキー押下で誤送信しがちだったのでsubmitのキーボードショートカットを変更した
- 2025/07/19
    - Claude Codeに入門した。ClaudeのProプランが7日間無料だったので、とりあえずそれにしてみた。
    - Dev Container、仕様書・TODOリスト、厳密なTDDの実践（t-wadaさんを指定してコンテキスト圧縮）といったよく聞くプラクティスをやってみた
- 2025/07/22
    - AI coding agentにiOSアプリのUTの実行と結果の確認を効率良くやってもらうために、`xcodebuild test` コマンドの実行結果をLLMに入力するのに最適な形に変換する方法を模索した
        - xcbeautifyでJUnit reportのXMLファイルを出力してもらうのが良さそう。でも、UTの数が多いとXMLファイルが巨大になるので、もっと出力を要約したい。
        - JUnit reportのXMLファイルを要約する自前スクリプトを作るか、もしくは既存のOSSを探すかしたい
- 2025/07/23
    - VSCode / GitHub Copilot Agent Mode
        - 待望の設定 `github.copilot.chat.agent.terminal.allowList` がExperimentalで実装されていたので設定してみた
        - git commitを許可したのに毎回問われるのはなぜ？
- 2025/07/24
    - VSCode / GitHub Copilot Agent Mode
        - 直近で実装した開発アイテムのコミットのdiffを集計してみたら、9割はAIが生成したdiffだった
            - 集計の前提：
                - コミット単位で編集者（人間 or AI）を完全に分離する。各コミットに人間による編集とAIによる編集を混ぜない。
                - AIがコミットした場合はコミットメッセージに必ず共同編集者（Co-authored-by）を含めるようにしている
            - 集計方法：
                - コミットメッセージに特定の共同編集者が含まれているコミットと、そうでないコミットの追加・削除行数を合計する（シェルスクリプトをGemini 2.5 Proに作ってもらった）
- 2025/07/25
    - VSCode / GitHub Copilot Agent Mode
        - `github.copilot.chat.agent.terminal.allowList` に `git commit` を設定してみたところ、コミットメッセージに英語だけが含まれる場合は毎回許可を求められなくなったが、日本語が含まれる場合は許可を求められてしまう
        - プロンプトに `実装が終わったらコードの自動整形・ビルド・テストを実行し、全て成功することを確認してから変更内容をGitコミットしてください。` と書くと、AndroidプロジェクトなのになぜかPythonのビルド環境を構築しようとしてしまうことが何回かあった（Claude Sonnet 4）
            - `Kotlinコードの` と明示的に書くか、もしくは `コードの` は書かない方が良いかもしれない
- 2025/07/28
    - VSCode / GitHub Copilot Agent Mode
        - `.github/copilot-instructions.md` に `Authorに "github-copilot <github-copilot@users.noreply.github.com>" を必ず指定する` と書いていたが、やめた。コミットメッセージに明記する共同編集者の情報だけでいい。
- 2025/07/29
    - VSCode / GitHub Copilot Agent Mode
        - promptsフォルダのサブフォルダにプロンプトファイルを置いてもスラッシュコマンドとして認識された（いつの間に？以前試したときはダメだったと思う）
- 2025/08/01
    - GitHub Web / Copilot Chat
        - GitHub WebでOSSリポジトリを開いた状態でCopilotボタンを押してチャットを開くと、そのリポジトリがコンテキストに与えられた状態でCopilotと会話できる
        - この機能でとあるOSSに関する質問をいろいろしてみたところ、大変便利だった
        - 質問に関連するコードをCopilotが探して答えてくれるので、OSSの挙動を効率良く調査できた
- 2025/08/08
    - VSCode / GitHub Copilot Agent Mode
        - VSCodeを昨日リリースされたv1.103（Copilot拡張はv0.30.0）にアップデートしたら、prompt fileが使用できなくなってしまった
            - チャットでスラッシュを打った後に表示される補完の候補にprompt.mdファイルが表示されるが、いざ実行しようとするとprompt.mdの中身を一切読み取ってくれない
                - 以前は `Follow instructions in {ファイル名}` と表示されてprompt.mdの中身を読んでくれたが、今はそれすら表示されない
            - VSCodeをv1.102にダウングレードしたらprompt fileが使用できた
        - v1.103で `github.copilot.chat.agent.terminal.allowList` が `chat.tools.terminal.autoApprove` に変わった
- 2025/08/12
    - VSCode / GitHub Copilot Agent Mode
        - VSCode v1.103でreusable prompt fileの内容を認識してくれなくなった問題について
            - 別のGitHubアカウントでも試してみたが、認識しなかった
            - VSCode 1.104.0-insider でも試してみたが、認識しなかった
            - [ブログ](https://j3iiifn.hatenablog.com/entry/2025/08/13/023000)を書いた
- 2025/08/15
    - VSCode / GitHub Copilot Agent Mode
        - VSCode v1.103でreusable prompt fileの内容を認識してくれなくなった問題について
            - ファイル名に数字が含まれていると認識されないというデグレードが発生していることがわかった
            - VS CodeのGitHubに[Issue](https://github.com/microsoft/vscode/issues/261702)と[Pull Request](https://github.com/microsoft/vscode/pull/261704)を作成した
            - [ブログ](https://j3iiifn.hatenablog.com/entry/2025/08/15/173000)も書いた

## マインドマップ
- AIが働きにくい環境 ＝ 人間も働きにくい環境
    - 割れ窓がある → 割れ窓を真似してコード生成してしまう
