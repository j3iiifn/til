# Git

## コミットメッセージの自動生成
検索すると、AIでコードの差分からコミットメッセージを自動生成する方法ばかり出てくる。
そうではなく、GitHubで直接ファイルを編集した時に自動生成される `Update README.md` みたいなメッセージを手元でコミットする際も自動生成するようにしたい。
（もちろん仕事ではきちんとしたコミットメッセージを書いているが、このリポジトリのようにコミットメッセージを真面目に書く意味がないケースで使いたい）

### 作ったスクリプト
`.git_hooks/prepare-commit-msg`

注意点：

- このGitフックを設定すると、`git commit` でVimが起動された後に `:q!` でコミットをキャンセルしようとしても、コミットが実行されてしまう（このスクリプトが生成するメッセージが `#` でコメントアウトされていないため）
- Sourcetree や VSCode のコミット画面には反映されない
    - しかし、コミット画面でメッセージが空のままコミットすると、このスクリプトで生成されたメッセージが適用される

### 参考サイト
- [Generate git commit message from git\-status\. Will generate a commit message like "Added: file1\.py file2\.py file3\.py Modified: file4\.py file5\.py Deleted: README\.md Renamed: test\.txt\-> test2\.txt"\. Put this in your \.gitconfig\.](https://gist.github.com/erikw/654386d35ecfdb0354cd2b71763f19ae)
- [git \- How to automatically generate commit message \- Stack Overflow](https://stackoverflow.com/questions/35010953/how-to-automatically-generate-commit-message)


## コミット日時の修正
- [Gitのコミット日時を修正する方法 \- zzzmisa's blog](https://blog.zzzmisa.com/git_commit_date/)

```
d="2025-06-01 01:00:00"; GIT_COMMITER_DATE=$d git commit --date=$d

d=$(date -Iseconds -v -15M); GIT_COMMITER_DATE=$d git commit --date=$d
```

## ローカル環境だけを対象にgitignoreしたいとき
`.git/info/exclude` にgitignore相当の設定を書く


## 特定のファイルだけを特定のコミットの状態に戻す
`git checkout {コミットハッシュ} -- {ファイルパス}`


## git worktree
- （公開日：2025/05/27、閲覧日：2025/05/29）[AIエージェントで並列実装なら必須技術！ Git Worktree を理解する](https://zenn.dev/siu_issiki/articles/git_worktree)
- （公開日：2022/06/01、閲覧日：2025/05/29）[git\-worktreeでmultirepoの開発体験を向上させる \- Yappli Tech Blog](https://tech.yappli.io/entry/introduction-of-git-worktree)


## コミットメッセージにMarkdownを書きたい
- コミットメッセージにMarkdownを書くと、見出し（行頭が`#`）がコメントとして扱われ、コミットの確定時にその行が消されてしまう
- GitHub Copilotとのチャットをコミットメッセージに貼りたい
- `git config commit.cleanup scissors` を設定して解決した
- 参考：[2024\-06\-24 gitのコミットメッセージでmarkdownを使う \| TTIL](https://til.toshimaru.net/2024-06-24)
