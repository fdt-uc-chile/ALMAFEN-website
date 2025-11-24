import React, { createElement as h, useEffect, useState } from 'https://esm.sh/react@18.3.1';
import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client';

// Usar rutas relativas para módulos locales (requerido por módulos ES en navegador)
import { SITE } from './data/site.js';
import { Nav } from './components/Nav.js';
import { Home } from './pages/Home.js';
import { Team } from './pages/Teams.js';
import { Publications } from './pages/Publications.js';
import { Apply } from './pages/Apply.js';
import { News } from './pages/News.js';
import { NewsDetail } from './pages/NewsDetail.js';

function Footer() {
  return h(
    'footer',
    { className: 'border-t mt-10' },
    h(
      'div',
      { className: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-2' },
      [
  h('div', { key: 'c' }, `© ${new Date().getFullYear()} ${SITE.labName}`),
        h('div', { key: 't' }, 'Desarrollado sobre GitHub Pages (estático)')
      ]
    )
  );
}

function App() {
  const [tab, setTab] = useState('home');
  const [newsId, setNewsId] = useState(null);

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace('#/', '') || 'home';
      // Detectar si es una ruta de noticia individual (news/123)
      const newsMatch = hash.match(/^news\/(\d+)$/);
      if (newsMatch) {
        setTab('news-detail');
        setNewsId(newsMatch[1]);
      } else {
        setTab(hash);
        setNewsId(null);
      }
    };
    window.addEventListener('hashchange', onHash);
    onHash();
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const changeTab = (t) => {
    window.location.hash = `/${t}`;
    setTab(t);
  };

  return h(
    'div',
    { className: 'min-h-screen flex flex-col bg-gray-50' },
    [
  h(Nav, { key: 'nav', current: tab, onChange: changeTab, labName: SITE.labName }),
      h('div', { key: 'main', className: 'flex-1' }, [
        tab === 'home' && h(Home),
        tab === 'team' && h(Team),
        tab === 'pubs' && h(Publications),
        tab === 'apply' && h(Apply),
        tab === 'news' && h(News),
        tab === 'news-detail' && h(NewsDetail, { articleId: newsId })
      ]),
  h(Footer, { key: 'footer' })
    ]
  );
}

const root = createRoot(document.getElementById('root'));
root.render(h(App));
