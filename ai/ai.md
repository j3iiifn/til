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
- 📝🌟（公開日：2025/09/18、閲覧日：2025/09/19）[Issue, Pull\-request, GitHub Copilotによる「普通」の一人チーム開発 \- Cybozu Inside Out \| サイボウズエンジニアのブログ](https://blog.cybozu.io/entry/2025/09/18/113000)


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
- 🌟（公開日：2025/08/19、閲覧日：2025/09/06）[「仕様駆動開発」へのアンサーとしてのCline v3\.25\.0 \#cline \- Qiita](https://qiita.com/watany/items/8b08958427c9e48a20fb)
    - > "LLMs Get Lost in Multi-Turn Conversation": https://arxiv.org/abs/2505.06120
        - > 会話を重ねるほどに、生成された仮定や誤りの訂正、ツールの入出力、失敗した記録も積み重なっていく。推論が残置された不要な情報に引きずられる現象を「チェーホフの銃の誤謬」と呼ぶが、まさにこの積み重なった履歴によってコンテキストが汚染される。


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


### Spec Kit
- （公開日：2025/09/03、閲覧日：2025/09/03）[GitHub、仕様駆動開発ツールキット「Spec Kit」を紹介 ——コーディングエージェントを利用して仕様を解釈し、開発計画・タスク分解・実装をおこなう \| gihyo\.jp](https://gihyo.jp/article/2025/09/github-spec-kit)


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

#### Gemini 2.5 Flash Image (nano-banana)
- （公開日：2025/09/13、閲覧日：2025/09/13）[nano\-bananaでモバイルアプリUIモックアップを作る](https://zenn.dev/oikon/articles/nanobanana-mobile-mock)

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
- （公開日：2025/09/18、閲覧日：2025/09/18）[AI「Claude」の応答品質が断続的に低下していたのは3つのバグが原因 \- GIGAZINE](https://gigazine.net/news/20250918-anthropic-three-issues/)
- （公開日：2025/09/30、閲覧日：2025/09/30）[Claude Sonnet 4\.5 発表関連情報まとめ](https://zenn.dev/schroneko/articles/claude-sonnet-4-5)


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
- （公開日：2025/06/25、閲覧日：2025/08/29）[Claude Codeでドメインに特化したコードレビューをする](https://zenn.dev/microcms/articles/a359034053416a)
- （公開日：2025/07/07、閲覧日：2025/08/29）[Claude Code Actionでコードレビューを効率化する｜REALITY株式会社](https://note.com/reality_eng/n/n873a4cab65ee)
- （閲覧日：2025/08/29）[How to Use Claude Code for Code Review \| ClaudeLog](https://claudelog.com/faqs/how-to-use-claude-code-for-code-review/)
    - > Second Opinion: Get Claude's perspective when unsure about human reviewer feedback
        - （自分の感想）自分がこれから指摘しようとしていることについて、それが客観的に見て正しいかを確かめるために、AIにセカンドオピニオンを求めることはよくやる
- （公開日：2025/09/01、閲覧日：2025/09/14）[GitHub Copilot code review にブログ記事をレビューしてもらう \- NTT docomo Business Engineers' Blog](https://engineers.ntt.com/entry/202508-github-copilot-review/entry)
- 🌟（公開日：2025/09/28、閲覧日：2025/09/29）[そのAI生成コード、全部レビューしますか？全部信じますか？](https://zenn.dev/r_kaga/articles/66c190413d3ab9)
    - > 「AIが間違う確率 × ミスがあった時のヤバさ × ミスに気づけるか」の3軸でリスクを評価しよう
    - 3軸への向き合い方を論文ベースで解説


#### PR-Agent
- （閲覧日：2025/08/30）[qodo\-ai/pr\-agent: 🚀 PR\-Agent: An AI\-Powered 🤖 Tool for Automated Pull Request Analysis, Feedback, Suggestions and More\! 💻🔍 \(For more advanced: check Qodo Merge\)](https://github.com/qodo-ai/pr-agent)
- （公開日：2025/05/16、閲覧日：2025/08/30）[Bet PR\-Agent 〜全自動コードレビューの夢〜 \- LayerX エンジニアブログ](https://tech.layerx.co.jp/entry/2025/05/16/195429)
- （公開日：2025/08/08、閲覧日：2025/08/30）[OSS の AI レビューツール「PR\-Agent」を全社導入し、コスト効率の高い開発支援を実現した話 \| BLOG \- DeNA Engineering](https://engineering.dena.com/blog/2025/08/pr-agent/)


### MCP
- （公開日：2025/04/27、閲覧日：2025/04/27）[最小限のMCP Host/Client/Serverをスクラッチで実装する](https://zenn.dev/razokulover/articles/9a0aee8ceb9f3f)
- （公開日：2025/05/10、閲覧日：2025/05/11）[初めて MCP を使うなら Docker MCP Toolkit がおすすめ \#VSCode \- Qiita](https://qiita.com/falya128/items/23020ddba7a7d1ce2e1f)


### 企業での導入
- （公開日：2025/06/24、閲覧日：2025/07/03）[AIコーディングツール導入のリアル ～意思決定を後押しし、開発を加速させるための7社の実践知～ \- Findy Tools](https://findy-tools.io/articles/ai-codingtool/88)


### プロンプト
- （公開日：2025/07/10、閲覧日：2025/07/11）[降霊術で t\_wada を AI に降ろして PR レビューして貰うテクニックが伸びたのでその裏側記事を書きました！｜Ryo@VibeCoder](https://note.com/biwakonbu/n/n0f1c75418030)
    - 降霊術というワードチョイスが面白い
    - 圧縮プロンプトについての先行研究（？）についても触れられていて、さながら論文のよう。良記事
- 🌟（公開日：2025/08/15、閲覧日：2025/08/16）[AI「先輩、この仕様よく分からないっす」 \- ABAの日誌](https://aba.hatenablog.com/entry/2025/08/15/124732)
    - AIが必要に応じて人間に助けを求めるようにさせるプロンプトの紹介。🌟良記事
- 🌟（公開日：2025/09/26、閲覧日：2025/09/28）[AIと『対話しない』対話法、モノローグ法 \#ChatGPT \- Qiita](https://qiita.com/makotosaekit/items/2e5c7d3b4504aeccf456)

### エッセイ、キャリア論
- （公開日：2025/05/03、閲覧日：2025/05/03）[AI Coding Agent を使うことで、怒り狂い、視座が上昇する話 \- Lambdaカクテル](https://blog.3qe.us/entry/2025/05/03/000513)
    - AI Coding Agent を使うということは、AIに対してマネジメントするということ
    - 気に入った表現
        - > イテレーティブな開発を行うことが前提で、非定型であり、エントロピーの無秩序な拡大を抑止しながら開発しなければならない†現実†の開発
- （公開日：2025/06/19、閲覧日：2025/06/19）[AIでプログラミングが「楽しくなった」人たちと、少し違和感を抱く自分｜magurotuna](https://note.com/maguro_tuna/n/n81f1cabc1183)
- （公開日：2025/06/22、閲覧日：2025/06/22）[Claude Code時代のソフトウェアエンジニア生存戦略｜suthio](https://note.com/suthio/n/n4f79fbe4efda)
    - いい記事だった。また読み返したい。
- （公開日：2025/06/23、閲覧日：2025/06/23）[AIによる開発は楽しすぎるが、基礎学習が疎かになりそうで怖い \- $shibayu36\->blog;](https://blog.shibayu36.org/entry/2025/06/23/090555)
- （公開日：2025/08/26、閲覧日：2025/08/27）[AIファーストで全てを書き直す：エンジニアが知るべき新パラダイム](https://zenn.dev/gunta/articles/5b7a081fef8c71)
    - 見出しとサンプルだけ書いて本文を書き忘れたみたいな感じの読みづらい記事だった
    - gitをやめてJujutsuへ移行、`jj undo`
- （公開日：2025/09/04、閲覧日：2025/09/05）[若手が生成AI任せで仕事して、レビュー地獄で逆に生産性が落ちた話｜片山良平＠paiza代表](https://note.com/rk611/n/nb98de14cd76d)
    - > 生成AIはできないことをできるようにするツールではなく、できることをより早くできるようにするツールです。
- 📝（公開日：2025/09/19、閲覧日：2025/09/23）[最近の人類のレビュー疲れ \| Democratizing Data](https://chezo.uno/post/2025-09-19-review-fatigue/)
    - > 2. ドキュメントドリブンで開発をする
        - > 要件定義書、外部設計書、作業計画書
- （公開日：2025/09/18、閲覧日：2025/09/26）[バイブコーディングはシニア開発者を「AIベビーシッター」に変えた？ \- YAMDAS現更新履歴](https://yamdas.hatenablog.com/entry/20250918/vibe-coding-ai-babysitters)
    - > 「コーディングに Copilot を使うのは、賢い6歳児にコーヒーポットを渡して、『これをダイニングルームに持って行って、家族にコーヒーを注いでね』と言うようなものだ」という記事で引用されるシニア開発者の言葉も趣深い。

### その他
- （公開日：2025/06/11、閲覧日：2025/06/12）[AI領域における組織の強みを活かすアーキテクチャ設計](https://zenn.dev/aishift/articles/c897d0e095c3d8)
    - タイトルの「AI領域」はAIエージェント自体の開発を指していた
    - この記事で述べられている取り組みはAI云々に特有なものではなく、一般的に複数のチームが同じプロダクトを共同で開発するために必要な取り組みだと思った（技術選定、依存関係の整理）
- （公開日：2025/07/03、閲覧日：2025/07/03）[AIは励まされると頑張れるらしいので、いろんな方法で奨励してみた。 \- カミナシ エンジニアブログ](https://kaminashi-developer.hatenablog.jp/entry/2025/07/03/090000)
- （公開日：2025/07/03、閲覧日：2025/07/03）[AIに仕様書を読ませるとテストケースを自動生成、テストコードも書いてくれる「Autify Nexus」、Autifyが発表 － Publickey](https://www.publickey1.jp/blog/25/aiautify_nexusautify.html)
- （公開日：2025/07/27、閲覧日：2025/07/27）[Kimi K2とLLMのベンチマークスコア](https://blog.lai.so/kimi-k2/)
- （公開日：2025/08/30、閲覧日：2025/08/31）[AIプログラムの開発演習に使う低消費リソースローカルLLMはQwen3 1\.7B Q4がベスト \- きしだのHatena](https://nowokay.hatenablog.com/entry/2025/08/30/104903)


## 見た動画
- （公開日：2024/07/26、閲覧日：2025/04/17）[【Copilot活用術 vol\.1】ビジネスパーソンの生成AI「Microsoft Copilot」活用法／Copilotで何ができる？便利な機能「ノートブック」とは／全10回シリーズで解説 \- YouTube](https://www.youtube.com/watch?v=DTCwUOd08-I)
- （公開日：2025/04/16、閲覧日：2025/04/24）[GitHub Copilot コードレビュー機能試してみました \- YouTube](https://www.youtube.com/watch?v=UuCJIDkRNUA)
- （公開日：2025/07/11、閲覧日：2025/07/12）[Claude Codeで無限にUIデザインを構築する方法【バイブコーディング/Vibe Coding】 \- YouTube](https://www.youtube.com/watch?v=8vWRCYvLr94)
- （公開日：2025/07/24、閲覧日：2025/07/24）[【t\-wadaさんに聞く】なぜCursorよりClaude Codeが優れているのか \- YouTube](https://www.youtube.com/watch?v=c2IHEeBbY5s)
- （公開日：2025/07/27、閲覧日：2025/07/31）[Claude Codeに新機能\(Hooks, SlashCommand, SubAgents\)が追加されていたので解説してみた \- YouTube](https://www.youtube.com/watch?v=s71I9pVdsv8)


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


## マインドマップ
- AIが働きにくい環境 ＝ 人間も働きにくい環境
    - 割れ窓がある → 割れ窓を真似してコード生成してしまう
