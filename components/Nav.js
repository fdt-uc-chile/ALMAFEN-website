import React from 'https://esm.sh/react@18.3.1';

export function Nav({ current, onChange, labName }) {
  const items = [
    { key: 'home', label: 'Inicio' },
    { key: 'news', label: 'Noticias' },
    { key: 'pubs', label: 'Publicaciones' },
    { key: 'team', label: 'Miembros' },
    { key: 'apply', label: 'Aplicar' }
  ];

  return React.createElement(
    'nav',
    { className: 'sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-500 backdrop-blur shadow-lg border-b border-blue-700/20' },
    React.createElement(
      'div',
      { className: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16' },
      [
        React.createElement(
          'div',
          { className: 'flex items-center gap-3', key: 'left' },
          [
            React.createElement('div', { className: 'h-10 w-10 rounded-xl bg-white/20 backdrop-blur border border-white/30 shadow-lg flex items-center justify-center', key: 'logo' }),
            React.createElement('span', { className: 'font-bold text-white text-lg tracking-tight', key: 'name' }, labName)
          ]
        ),
        React.createElement(
          'div',
          { className: 'flex items-center gap-2', key: 'right' },
          items.map(it =>
            React.createElement(
              'button',
              {
                key: it.key,
                onClick: () => onChange(it.key),
              className:
                'px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none active:scale-95 ' +
                (current === it.key || (current === 'news-detail' && it.key === 'news') ? 'bg-white/20 text-white shadow-md' : 'text-white/90 hover:bg-white/10 hover:text-white'),
              },
              it.label
            )
          )
        )
      ]
    )
  );
}
