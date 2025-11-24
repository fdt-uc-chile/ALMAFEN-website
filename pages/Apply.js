import React from 'https://esm.sh/react@18.3.1';
import { APPLY } from '../data/apply.js';

export function Apply() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // Send form data to Formspree (assume endpoint is correctly configured)
    const formData = new FormData(form);
    (async () => {
      try {
        const res = await fetch(APPLY.endpoint, {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json'
          }
        });
        if (res.ok) {
          alert('¡Gracias! Tu postulación ha sido enviada exitosamente.');
          form.reset();
        } else {
          let msg = res.statusText || 'Error al enviar';
          try {
            const data = await res.json();
            if (data.error) msg = data.error;
          } catch (err) {
            // ignore
          }
          alert('Error al enviar la postulación: ' + msg);
        }
      } catch (err) {
        alert('Error de red al enviar la postulación: ' + err.message);
      }
    })();
  };

  return React.createElement(
    'main',
    { className: 'mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10' },
    [
      React.createElement('h2', { key: 'h2', className: 'text-3xl font-bold mb-2 text-center' }, 'Postulaciones MSc/PhD'),
      React.createElement('p', { key: 'p', className: 'text-gray-600 mb-8 text-center' }, 'Completa el formulario para postular al laboratorio. Adjunta enlaces a tu CV. Tu postulación será enviada por correo al equipo.'),
      React.createElement(
        'form',
        { key: 'f', onSubmit: handleSubmit, className: 'space-y-5 bg-white border rounded-2xl p-8 shadow-lg' },
        [ 
          React.createElement('div', { key: 'n' }, [
            React.createElement('label', { className: 'block text-sm font-semibold mb-2 text-gray-700' }, 'Nombre completo'),
            React.createElement('input', { name: 'name', required: true, className: 'w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition' })
          ]),
          React.createElement('div', { key: 'grid1', className: 'grid sm:grid-cols-2 gap-5' }, [
            React.createElement('div', { key: 'e' }, [
              React.createElement('label', { className: 'block text-sm font-semibold mb-2 text-gray-700' }, 'Correo electrónico'),
              React.createElement('input', { type: 'email', name: 'email', required: true, className: 'w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition' })
            ]),
            React.createElement('div', { key: 'prog' }, [
              React.createElement('label', { className: 'block text-sm font-semibold mb-2 text-gray-700' }, 'Programa al que postula'),
              React.createElement('select', { name: 'program', required: true, className: 'w-full rounded-lg border border-gray-300 px-4 py-2.5 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition' }, [
                React.createElement('option', { key: 'sel', value: '' }, 'Seleccionar'),
                React.createElement('option', { key: 'msc', value: 'MSc' }, 'Magíster'),
                React.createElement('option', { key: 'phd', value: 'PhD' }, 'Doctorado')
              ])
            ])
          ]),
          React.createElement('div', { key: 'grid2', className: 'grid sm:grid-cols-2 gap-5' }, [
            React.createElement('div', { key: 'ub' }, [
              React.createElement('label', { className: 'block text-sm font-semibold mb-2 text-gray-700' }, 'País/ciudad de residencia'),
              React.createElement('input', { name: 'from', className: 'w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition' })
            ]),
            React.createElement('div', { key: 'disp' }, [
              React.createElement('label', { className: 'block text-sm font-semibold mb-2 text-gray-700' }, 'Disponibilidad (mes/año)'),
              React.createElement('input', { name: 'availability', placeholder: 'Ej: Marzo 2026', className: 'w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition' })
            ])
          ]),
          React.createElement('div', { key: 'int' }, [
            React.createElement('label', { className: 'block text-sm font-semibold mb-2 text-gray-700' }, 'Intereses / Áreas de investigación'),
            React.createElement('textarea', { name: 'interests', rows: 4, className: 'w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition', placeholder: 'Describe tus áreas de interés...' })
          ]),
          React.createElement('div', { key: 'link' }, [
            React.createElement('label', { className: 'block text-sm font-semibold mb-2 text-gray-700' }, 'Enlaces (CV, GitHub, Google Scholar, etc.)'),
            React.createElement('input', { name: 'links', placeholder: 'https://...', className: 'w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition' })
          ]),
          React.createElement('div', { key: 'foot', className: 'flex flex-col sm:flex-row items-center justify-between gap-3 pt-2' }, [
            React.createElement('p', { key: 'note', className: 'text-xs text-gray-500' }, `Las respuestas se enviarán a: ${APPLY.contactEmail}`),
            React.createElement('button', { key: 'btn', type: 'submit', className: 'w-full sm:w-auto rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 font-semibold hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200' }, 'Enviar Postulación')
          ])
        ]
      )
    ]
  );
}
 
