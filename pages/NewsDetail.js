import React from 'https://esm.sh/react@18.3.1';
import { NEWS } from '../data/news.js';

export function NewsDetail({ articleId, onBack }) {
  const article = NEWS.articles.find(a => a.id === parseInt(articleId));

  if (!article) {
    return React.createElement(
      'main',
      { className: 'mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12' },
      [
        React.createElement(
          'div',
          { key: 'notfound', className: 'text-center' },
          [
            React.createElement('h1', { key: 'title', className: 'text-3xl font-bold text-gray-900 mb-4' }, 'Noticia no encontrada'),
            React.createElement('p', { key: 'desc', className: 'text-gray-600 mb-6' }, 'La noticia que buscas no existe.'),
            React.createElement(
              'button',
              {
                key: 'btn',
                onClick: () => window.location.hash = '/news',
                className: 'px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-md hover:shadow-lg'
              },
              '← Volver a Noticias'
            )
          ]
        )
      ]
    );
  }

  return React.createElement(
    'main',
    null,
    [
      // Header with back button
      React.createElement(
        'div',
        { key: 'header', className: 'bg-gradient-to-b from-gray-50 to-white border-b border-gray-200' },
        React.createElement(
          'div',
          { className: 'mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6' },
          React.createElement(
            'button',
            {
              onClick: () => window.location.hash = '/news',
              className: 'flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-all hover:gap-2 gap-1'
            },
            [
              React.createElement('span', { key: 'arrow' }, '←'),
              React.createElement('span', { key: 'text' }, 'Volver a Noticias')
            ]
          )
        )
      ),
      // Article content
      React.createElement(
        'article',
        { key: 'article', className: 'mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12' },
        [
          // Featured image
          React.createElement('img', {
            key: 'img',
            src: article.image,
            alt: article.title,
            className: 'w-full h-96 object-cover rounded-2xl shadow-2xl mb-8'
          }),
          // Date
          React.createElement(
            'div',
            { key: 'date', className: 'text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wide' },
            new Date(article.date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
          ),
          // Title
          React.createElement(
            'h1',
            { key: 'title', className: 'text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight' },
            article.title
          ),
          // Summary
          React.createElement(
            'p',
            { key: 'summary', className: 'text-xl text-gray-600 mb-10 font-medium leading-relaxed border-l-4 border-blue-500 pl-6 py-2 bg-blue-50 rounded-r-lg' },
            article.summary
          ),
          // Content
          React.createElement(
            'div',
            {
              key: 'content',
              className: 'prose prose-lg prose-blue max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline',
              dangerouslySetInnerHTML: { __html: article.content }
            }
          ),
          // Back button at bottom
          React.createElement(
            'div',
            { key: 'footer', className: 'mt-12 pt-8 border-t border-gray-200' },
            React.createElement(
              'button',
              {
                onClick: () => window.location.hash = '/news',
                className: 'px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
              },
              '← Volver a Noticias'
            )
          )
        ]
      )
    ]
  );
}
