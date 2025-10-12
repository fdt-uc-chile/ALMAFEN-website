import React from 'https://esm.sh/react@18.3.1';
import { TEAMS } from '../data/teams.js';

const MemberCard = ({ m }) => {
  // Si tiene campo 'position', renderizamos un perfil más detallado (para PIs)
  if (m.position) {
    return React.createElement(
      'div',
      { className: 'bg-white rounded-2xl border shadow-sm overflow-hidden' },
      [
        React.createElement('img', { key: 'img', src: m.photo, alt: m.name, className: 'h-44 w-full object-cover' }),
        React.createElement(
          'div',
          { key: 'txt', className: 'p-4 space-y-1' },
          [
            React.createElement('div', { key: 'n', className: 'text-lg font-semibold text-center' }, m.name),
            React.createElement('div', { key: 'pos', className: 'text-sm text-gray-600 text-center' }, m.position),
            React.createElement('div', { key: 'dept', className: 'text-sm text-gray-600 text-center' }, m.department),
            React.createElement('div', { key: 'uni', className: 'text-sm text-gray-600 text-center' }, m.university),
            React.createElement(
              'div',
              { key: 'links', className: 'flex items-center gap-3 mt-2 justify-center' },
              [
                m.email && React.createElement('a', { key: 'e', href: `mailto:${m.email}`, className: 'text-blue-600 hover:underline', title: 'Email' }, '✉️'),
                m.linkedin && React.createElement('a', { key: 'l', href: m.linkedin, target: '_blank', rel: 'noopener noreferrer', className: 'text-blue-600 hover:underline', title: 'LinkedIn' }, 'in')
              ]
            ),
            m.description && React.createElement('div', { key: 'desc', className: 'text-sm text-gray-700 mt-2' }, m.description)
          ]
        )
      ]
    );
  }

  // Fallback: tarjeta simple para otros miembros
  return React.createElement(
    'div',
    { className: 'bg-white rounded-2xl border shadow-sm overflow-hidden' },
    [
      React.createElement('img', { key: 'img', src: m.photo, alt: m.name, className: 'h-44 w-full object-cover' }),
      React.createElement(
        'div',
        { key: 'txt', className: 'p-4 space-y-1' },
        [
          React.createElement('div', { key: 'n', className: 'text-lg font-semibold' }, m.name),
          React.createElement('div', { key: 'p', className: 'text-sm text-gray-600' }, m.program || m.position || ''),
          React.createElement('div', { key: 'y', className: 'text-sm text-gray-600' }, m.entryYear ? `Entry Year: ${m.entryYear}` : ''),
          React.createElement('div', { key: 's', className: 'text-sm' }, ['Status: ', React.createElement('span', { key: 'ss', className: 'font-medium' }, m.status || '')]),
          m.thesis ? React.createElement('div', { key: 't', className: 'text-sm text-gray-700 mt-2' }, ['Thesis: ', m.thesis]) : null
        ]
      )
    ]
  );
};

const SectionCards = ({ title, items }) =>
  items?.length
    ? React.createElement(
        'section',
        { className: 'mb-10' },
        [
          React.createElement('h3', { key: 'h', className: 'text-2xl font-semibold mb-4' }, title),
          React.createElement(
            'div',
            { key: 'g', className: 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6' },
            items.map((m, i) => React.createElement(MemberCard, { key: i, m }))
          )
        ]
      )
    : null;

const SectionList = ({ title, items }) =>
  items?.length
    ? React.createElement(
        'section',
        { className: 'mb-10' },
        [
          React.createElement('h3', { key: 'h', className: 'text-2xl font-semibold mb-4' }, title),
          React.createElement(
            'ul',
            { key: 'ul', className: 'space-y-2 list-disc pl-6' },
            items.map((m, i) => React.createElement('li', { key: i }, m.text))
          )
        ]
      )
    : null;

export function Team() {
  return React.createElement(
    'main',
    { className: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10' },
    [
      React.createElement('h2', { key: 'h2', className: 'text-3xl font-bold mb-6 text-center' }, 'People'),
      React.createElement(SectionCards, { key: 'pi', title: 'Principal Investigators', items: TEAMS.members.pis }),
      React.createElement(SectionCards, { key: 'pd', title: 'Postdoctoral Associates', items: TEAMS.members.postdocs }),
      React.createElement(SectionCards, { key: 'phd', title: 'Doctorate Students', items: TEAMS.members.phd }),
      React.createElement(SectionCards, { key: 'msc', title: 'Master Students', items: TEAMS.members.masters }),
      React.createElement(SectionList, { key: 'al', title: 'Alumni', items: TEAMS.members.alumni })
    ]
  );
}
