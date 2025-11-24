import React, { useMemo } from 'https://esm.sh/react@18.3.1';
import { PUBLICATIONS } from '../data/publications.js';

export function Publications() {
  const pubs = useMemo(() => [...PUBLICATIONS.publications].sort((a, b) => b.year - a.year), []);
  return React.createElement(
    'main',
    { className: 'mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10' },
    [
      React.createElement('h2', { key: 'h2', className: 'text-3xl font-bold mb-6 text-center' }, 'Publicaciones'),
      React.createElement(
        'ul',
        { key: 'ul', className: 'space-y-5' },
        pubs.map((p, i) =>
          React.createElement(
            'li',
            { key: i, className: 'bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1' },
            [
              React.createElement('div', { key: 't', className: 'font-semibold text-lg text-gray-900' }, p.title),
              React.createElement('div', { key: 'm', className: 'text-sm text-gray-600 mt-2' }, `${p.authors} · ${p.journal} · ${p.year}`),
              React.createElement(
                'div',
                { key: 'l', className: 'mt-3' },
                React.createElement('a', { href: p.url, target: '_blank', rel: 'noopener noreferrer', className: 'inline-flex items-center text-blue-600 hover:text-blue-700 font-medium hover:underline' }, `DOI: ${p.doi}`)
              )
            ]
          )
        )
      )
    ]
  );
}
