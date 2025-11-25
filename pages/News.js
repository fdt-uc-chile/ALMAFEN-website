import React from 'https://esm.sh/react@18.3.1';
import { NEWS } from '../data/news.js';

function NewsCard({ article, onClick }) {
  return React.createElement(
    'article',
    {
      className: 'bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group',
      onClick: () => onClick(article.id)
    },
    [
      React.createElement(
        'div',
        { key: 'img-container', className: 'news-image-container news-list' },
        React.createElement('img', {
          src: article.image,
          alt: article.title
        })
      ),
      React.createElement(
        'div',
        { key: 'content', className: 'p-6' },
        [
          React.createElement(
            'div',
            { key: 'date', className: 'text-xs font-semibold text-blue-600 mb-3 uppercase tracking-wide' },
            new Date(article.date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
          ),
          React.createElement(
            'h3',
            { key: 'title', className: 'text-xl font-bold text-gray-900 mb-3 line-clamp-2' },
            article.title
          ),
          React.createElement(
            'p',
            { key: 'summary', className: 'text-gray-600 line-clamp-3 leading-relaxed' },
            article.summary
          ),
          React.createElement(
            'div',
            { key: 'readmore', className: 'mt-5 flex items-center text-blue-600 font-semibold group-hover:text-blue-700' },
            [
              React.createElement('span', { key: 'text' }, 'Leer más'),
              React.createElement('span', { key: 'arrow', className: 'ml-2 transform transition-transform group-hover:translate-x-1' }, '→')
            ]
          )
        ]
      )
    ]
  );
}

export function News({ onNavigate }) {
  const handleArticleClick = (articleId) => {
    // Cambiar a la vista de detalle de la noticia
    window.location.hash = `/news/${articleId}`;
  };

  return React.createElement(
    'main',
    { className: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10' },
    [
      React.createElement('h2', { key: 'h2', className: 'text-3xl font-bold mb-6 text-center' }, 'Noticias'),
      React.createElement(
        'div',
        { key: 'grid', className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' },
        NEWS.articles.map(article =>
          React.createElement(NewsCard, {
            key: article.id,
            article: article,
            onClick: handleArticleClick
          })
        )
      )
    ]
  );
}
