# Hatena Bookmark Bookmarklet 実装計画

## 目的
「はてなブックマーク」の一覧ページから、「読んだ」タグまたはコメントに「読んだ」を含むブックマークを抽出し、指定形式でクリップボードにコピーするBookmarkletを開発する。

## 要求仕様

### 抽出条件
以下のいずれかに該当するブックマークを抽出:
- タグとして「読んだ」がついているもの
- コメントに「読んだ」が含まれるもの

### 出力形式
```markdown
- (公開日：{bookmark_date}、閲覧日：{bookmark_date}）[{title}]({url})
    - {comment}
```

**フォーマット仕様:**
- 公開日・閲覧日ともに: ブックマーク日付(YYYY/MM/DD形式)
- コメントが空の場合: 「    - {comment}」行を出力しない

### 動作方法
- 抽出したテキストを自動的にクリップボードにコピー
- 完了メッセージを表示

## HTML構造分析結果

### ブックマーク項目の構造
```html
<li class="bookmark-item js-user-bookmark-item" data-target-url="BOOKMARK_URL">
  <div class="centerarticle-entry">
    <h3 class="centerarticle-entry-title">
      <a href="BOOKMARK_URL">TITLE</a>
    </h3>
  </div>

  <div class="centerarticle-reaction js-user-bookmark-id-container">
    <div class="centerarticle-reaction-comment">
      <span class="centerarticle-reaction-timestamp">2025/12/29</span>
      <div class="centerarticle-reaction-main-comment-tags">
        <span class="js-comment">COMMENT_TEXT</span>
        <ul class="centerarticle-reaction-tags js-tag-text">
          <li><a href="/username/%E8%AA%AD%E3%82%93%E3%81%A0/">読んだ</a></li>
        </ul>
      </div>
    </div>
  </div>
</li>
```

### 抽出に必要なセレクタ
| データ | CSSセレクタ | 取得場所 |
|--------|-------------|----------|
| ブックマークURL | `.centerarticle-entry-title > a` | href属性 |
| タイトル | `.centerarticle-entry-title > a` | テキストコンテンツ |
| 日付 | `.centerarticle-reaction-timestamp` | テキストコンテンツ |
| コメント | `.js-comment` | テキストコンテンツ |
| タグ | `.centerarticle-reaction-tags a` | テキストコンテンツ |

## 実装アプローチ

### アルゴリズム
1. すべての `.bookmark-item` 要素を取得
2. 各ブックマークに対して:
   - タグ一覧を取得し「読んだ」が含まれるかチェック
   - コメントを取得し「読んだ」が含まれるかチェック
   - いずれかが該当する場合、必要なデータを抽出
3. 抽出したデータをMarkdown形式に整形
4. クリップボードにコピー
5. 完了メッセージを表示

### エラーハンドリング
- ブックマーク項目が存在しない場合: メッセージ表示
- 該当するブックマークが0件の場合: メッセージ表示
- クリップボードコピー失敗時: フォールバック表示

### クリップボードAPI
`navigator.clipboard.writeText()` を使用してコピー。
古いブラウザ対応として `document.execCommand('copy')` をフォールバック。

## 実装ファイル

### 作成するファイル
1. `hatena-bookmark-bookmarklet/bookmarklet.js` - メインのJavaScriptコード
2. `hatena-bookmark-bookmarklet/README.md` - 使い方説明書

### コード構成
```javascript
(function() {
  // 1. ブックマーク項目を取得
  // 2. フィルタリング（「読んだ」条件）
  // 3. データ抽出と整形
  // 4. クリップボードにコピー
  // 5. 完了メッセージ表示
})();
```

## 実装手順
1. `hatena-bookmark-bookmarklet/bookmarklet.js` を作成
   - すべてのブックマーク項目を取得する処理
   - タグ・コメントによるフィルタリング処理
   - 各データ要素の抽出処理
   - Markdown形式への整形処理
   - クリップボードコピー処理
   - エラーハンドリング
2. `hatena-bookmark-bookmarklet/README.md` を作成
   - Bookmarkletの登録方法
   - 使用方法
   - 出力形式の説明

## テスト計画
- `sample.html` を使用して動作確認
- 「読んだ」タグがあるブックマークが正しく抽出されることを確認
- コメントに「読んだ」が含まれるブックマークが正しく抽出されることを確認
- コメントが空のブックマークで該当行が省略されることを確認
- 出力形式が仕様通りであることを確認
