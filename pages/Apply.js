import React from 'https://esm.sh/react@18.3.1';
import { APPLY } from '../data/apply.js';

export function Apply() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const subject = form.elements['subject'].value;
    const message = form.elements['message'].value;

    // Send form data to Formspree
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
          alert('¡Gracias! Tu mensaje ha sido enviado exitosamente.');
          form.reset();
        } else {
          // Si falla Formspree, abrir cliente de correo
          openEmailClient(name, email, subject, message);
        }
      } catch (err) {
        // Si hay error de red, abrir cliente de correo
        openEmailClient(name, email, subject, message);
      }
    })();
  };

  const openEmailClient = (name, email, subject, message) => {
    const contactEmail = APPLY.contactEmail;
    const body = `Nombre: ${name}\nCorreo: ${email}\n\n${message}`;
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return React.createElement(
    'main',
    { className: 'mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10' },
    [
      React.createElement('h2', { key: 'h2', className: 'text-3xl font-bold mb-2 text-center' }, 'Contacto'),
      React.createElement('p', { key: 'p', className: 'text-gray-600 mb-8 text-center' }, 'Envíanos un mensaje y nos pondremos en contacto contigo lo antes posible.'),
      React.createElement(
        'form',
        { key: 'f', onSubmit: handleSubmit, className: 'space-y-5 bg-white border rounded-2xl p-8 shadow-lg' },
        [ 
          React.createElement('div', { key: 'n' }, [
            React.createElement('label', { className: 'block text-sm font-semibold mb-2 text-gray-700' }, 'Nombre'),
            React.createElement('input', { name: 'name', required: true, className: 'w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition' })
          ]),
          React.createElement('div', { key: 'e' }, [
            React.createElement('label', { className: 'block text-sm font-semibold mb-2 text-gray-700' }, 'Correo electrónico'),
            React.createElement('input', { type: 'email', name: 'email', required: true, className: 'w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition' })
          ]),
          React.createElement('div', { key: 'subj' }, [
            React.createElement('label', { className: 'block text-sm font-semibold mb-2 text-gray-700' }, 'Asunto'),
            React.createElement('input', { name: 'subject', required: true, className: 'w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition' })
          ]),
          React.createElement('div', { key: 'msg' }, [
            React.createElement('label', { className: 'block text-sm font-semibold mb-2 text-gray-700' }, 'Mensaje'),
            React.createElement('textarea', { name: 'message', rows: 5, required: true, className: 'w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition', placeholder: 'Escribe tu mensaje aquí...' })
          ]),
          React.createElement('div', { key: 'foot', className: 'flex flex-col sm:flex-row items-center justify-between gap-3 pt-2' }, [
            React.createElement('p', { key: 'note', className: 'text-xs text-gray-500' }, `Los mensajes se enviarán a: ${APPLY.contactEmail}`),
            React.createElement('button', { key: 'btn', type: 'submit', className: 'w-full sm:w-auto rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 font-semibold hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200' }, 'Enviar Mensaje')
          ])
        ]
      )
    ]
  );
}
 
