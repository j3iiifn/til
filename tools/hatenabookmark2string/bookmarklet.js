(function() {
  'use strict';

  try {
    const bookmarkItems = document.querySelectorAll('.bookmark-item');

    if (bookmarkItems.length === 0) {
      alert('ブックマーク項目が見つかりませんでした。');
      return;
    }

    const results = [];

    bookmarkItems.forEach((item) => {
      const tags = Array.from(item.querySelectorAll('.centerarticle-reaction-tags a'))
        .map(a => a.textContent.trim());

      const commentElement = item.querySelector('.js-comment');
      const comment = commentElement ? commentElement.textContent.trim() : '';

      const hasReadTag = tags.includes('読んだ');
      const hasReadInComment = comment.includes('読んだ');

      if (!hasReadTag && !hasReadInComment) {
        return;
      }

      const titleLink = item.querySelector('.centerarticle-entry-title > a');
      if (!titleLink) return;

      const url = titleLink.getAttribute('href');
      const title = titleLink.textContent.trim();

      const dateElement = item.querySelector('.centerarticle-reaction-timestamp');
      const date = dateElement ? dateElement.textContent.trim() : '';

      results.push({
        url,
        title,
        date,
        comment
      });
    });

    if (results.length === 0) {
      alert('「読んだ」タグまたはコメントに「読んだ」が含まれるブックマークが見つかりませんでした。');
      return;
    }

    const markdown = results.map(item => {
      let line = `- （公開日：${item.date}、閲覧日：${item.date}）[${item.title}](${item.url})`;
      if (item.comment) {
        line += `\n    - ${item.comment}`;
      }
      return line;
    }).join('\n');

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(markdown)
        .then(() => {
          alert(`抽出完了！${results.length}件のブックマークをクリップボードにコピーしました。`);
        })
        .catch((err) => {
          console.error('クリップボードへのコピーに失敗しました:', err);
          fallbackCopy(markdown, results.length);
        });
    } else {
      fallbackCopy(markdown, results.length);
    }

    function fallbackCopy(text, count) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();

      try {
        const successful = document.execCommand('copy');
        if (successful) {
          alert(`抽出完了！${count}件のブックマークをクリップボードにコピーしました。`);
        } else {
          promptDisplay(text, count);
        }
      } catch (err) {
        console.error('Fallback copy failed:', err);
        promptDisplay(text, count);
      } finally {
        document.body.removeChild(textarea);
      }
    }

    function promptDisplay(text, count) {
      const modal = document.createElement('div');
      modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border: 2px solid #333;
        border-radius: 8px;
        z-index: 10000;
        max-width: 80%;
        max-height: 80%;
        overflow: auto;
        box-shadow: 0 4px 6px rgba(0,0,0,0.3);
      `;

      const header = document.createElement('h3');
      header.textContent = `抽出完了！${count}件のブックマーク`;
      header.style.marginTop = '0';

      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.cssText = `
        width: 100%;
        height: 300px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
      `;
      textarea.readOnly = true;

      const closeButton = document.createElement('button');
      closeButton.textContent = '閉じる';
      closeButton.style.cssText = `
        padding: 8px 16px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      `;
      closeButton.onclick = () => document.body.removeChild(modal);

      modal.appendChild(header);
      modal.appendChild(textarea);
      modal.appendChild(closeButton);
      document.body.appendChild(modal);

      textarea.select();
    }

  } catch (error) {
    console.error('エラーが発生しました:', error);
    alert('エラーが発生しました: ' + error.message);
  }
})();
