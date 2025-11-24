import React from 'https://esm.sh/react@18.3.1';
import { SITE } from '../data/site.js';
import { PUBLICATIONS } from '../data/publications.js';
import { NEWS } from '../data/news.js';

function Hero() {
  return React.createElement(
    'section',
    { className: 'relative h-[500px] flex items-center justify-center overflow-hidden' },
    [
      React.createElement('img', { key: 'img', src: SITE.heroImage, alt: 'hero', className: 'absolute inset-0 h-full w-full object-cover' }),
      React.createElement('div', { key: 'overlay', className: 'absolute inset-0 bg-black/50' }),
      React.createElement(
        'div',
        { key: 'textwrap', className: 'relative z-10 text-center max-w-4xl px-4' },
        [
          React.createElement('h1', { key: 'h1', className: 'text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight' }, SITE.labName),
          React.createElement('p', { key: 'p', className: 'text-xl md:text-2xl text-white/90 font-light' }, SITE.institution)
        ]
      )
    ]
  );
}

export function Home() {
  // Obtener las últimas 3 publicaciones ordenadas por año
  const latestPapers = [...PUBLICATIONS.publications]
    .sort((a, b) => b.year - a.year)
    .slice(0, 3)
    .map(p => ({
      title: p.title,
      venue: `${p.journal} (${p.year})`,
      url: p.url
    }));

  // Obtener las últimas 3 noticias ordenadas por fecha
  const latestNews = [...NEWS.articles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)
    .map(n => ({
      id: n.id,
      title: n.title,
      date: n.date,
      summary: n.summary,
      url: `#/news/${n.id}`
    }));

  return React.createElement(
    'main',
    null,
    [
      React.createElement(Hero, { key: 'hero' }),
      
      // Sección Sobre Nosotros - Diseño limpio y centrado
      React.createElement(
        'section',
        { key: 'about', className: 'py-20 bg-white' },
        React.createElement(
          'div',
          { className: 'mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center' },
          [
            React.createElement('h2', { key: 'h2', className: 'text-3xl font-bold mb-8 text-gray-900' }, 'Sobre nosotros'),
            React.createElement('p', { key: 'p', className: 'text-xl text-gray-600 leading-relaxed font-light' }, SITE.about)
          ]
        )
      ),

      // Sección Actualizaciones - Diseño tipo lista/magazine sin tarjetas
      React.createElement(
        'section',
        { key: 'updates', className: 'py-20 bg-gray-50' },
        React.createElement(
          'div',
          { className: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8' },
          React.createElement(
            'div',
            { className: 'grid md:grid-cols-2 gap-16' },
            [
              // Columna Noticias
              React.createElement(
                'div',
                { key: 'news-col' },
                [
                  React.createElement('h2', { key: 'h2-news', className: 'text-2xl font-bold mb-8 text-gray-900 border-b-2 border-blue-600 pb-2 inline-block' }, 'Últimas Noticias'),
                  React.createElement(
                    'div',
                    { key: 'news-list', className: 'space-y-8' },
                    [
                      ...latestNews.map((n, i) =>
                        React.createElement(
                          'div',
                          { key: i, className: 'group' },
                          [
                            React.createElement('div', { key: 'date', className: 'text-sm font-bold text-blue-600 uppercase tracking-wider mb-1' }, 
                              new Date(n.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
                            ),
                            React.createElement(
                              'a',
                              { key: 'title', href: n.url, className: 'block text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2' },
                              n.title
                            ),
                            React.createElement('p', { key: 'summary', className: 'text-gray-600 leading-relaxed line-clamp-2' }, n.summary)
                          ]
                        )
                      ),
                      React.createElement(
                        'a',
                        { key: 'viewall', href: '#/news', className: 'inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 mt-4 group' },
                        ['Ver todas las noticias', React.createElement('span', { key: 'arrow', className: 'ml-2 transform group-hover:translate-x-1 transition-transform' }, '→')]
                      )
                    ]
                  )
                ]
              ),

              // Columna Publicaciones
              React.createElement(
                'div',
                { key: 'pubs-col' },
                [
                  React.createElement('h2', { key: 'h2-pubs', className: 'text-2xl font-bold mb-8 text-gray-900 border-b-2 border-blue-600 pb-2 inline-block' }, 'Investigación Reciente'),
                  React.createElement(
                    'div',
                    { key: 'pubs-list', className: 'space-y-6' },
                    [
                      ...latestPapers.map((p, i) =>
                        React.createElement(
                          'a',
                          { key: i, href: p.url, target: '_blank', rel: 'noopener noreferrer', className: 'flex gap-4 group items-start' },
                          [
                            React.createElement('div', { key: 'icon', className: 'flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors' }, 
                              React.createElement('span', { className: 'text-xl' }, '📄')
                            ),
                            React.createElement(
                              'div',
                              { key: 'content' },
                              [
                                React.createElement('h3', { key: 't', className: 'font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-1' }, p.title),
                                React.createElement('p', { key: 'v', className: 'text-sm text-gray-500' }, p.venue)
                              ]
                            )
                          ]
                        )
                      ),
                      React.createElement(
                        'a',
                        { key: 'viewall', href: '#/pubs', className: 'inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 mt-6 group' },
                        ['Ver todas las publicaciones', React.createElement('span', { key: 'arrow', className: 'ml-2 transform group-hover:translate-x-1 transition-transform' }, '→')]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        )
      )
    ]
  );
}
