javascript:(function() {
    const url = window.location.href;
    const article = document.querySelector('article[data-testid="tweet"]');

    const userName = article.querySelector('[data-testid="User-Name"]').innerText.split('\n').join('\t');
    const tweetText = article.querySelector('[data-testid="tweetText"]').innerText;
    const postTime = Array.from(article.querySelectorAll('time')).at(-1).innerText;

    const postInfo = `\`\`\`\n${tweetText}\n\`\`\`\n${url}\n${postTime}\t${userName}\n\n\n---\n\n\n`;
    console.log(postInfo);

    navigator.clipboard.writeText(postInfo)
      .then(() => console.log('ツイート情報がクリップボードにコピーされました！'))
      .catch(err => console.error('クリップボードへのコピーに失敗しました:', err));
})();
