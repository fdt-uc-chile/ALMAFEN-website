import { rawNews } from './news_source.js';

function parseContent(text) {
  if (!text) return '';
  
  const lines = text.split('\n');
  let html = '';
  let inList = false;

  lines.forEach(line => {
    const trimmed = line.trim();
    
    if (!trimmed) {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      return;
    }

    if (trimmed.startsWith('# ')) {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      html += `<h3>${trimmed.substring(2)}</h3>`;
    } else if (trimmed.startsWith('- ')) {
      if (!inList) {
        html += '<ul>';
        inList = true;
      }
      html += `<li>${trimmed.substring(2)}</li>`;
    } else {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      html += `<p>${trimmed}</p>`;
    }
  });

  if (inList) html += '</ul>';
  
  return html;
}

export const NEWS = {
  articles: rawNews.map(item => {
    let contentHtml = parseContent(item.content);
    
    // Add link at the bottom if exists
    if (item.link) {
      contentHtml += `<p><a href="${item.link}" target="_blank" class="text-blue-600 hover:underline">Leer más / Read more →</a></p>`;
    }

    return {
      ...item,
      image: item.image || './img/default_news.jpg',
      content: contentHtml
    };
  })
};
