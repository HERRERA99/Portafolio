// api/send-email.js
import { Resend } from 'resend';

// eslint-disable-next-line no-undef
const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Método no permitido');
    }

    const { name, email, message, asunto } = req.body;

    if (!email || !message || !name || !asunto) {
        return res.status(400).json({ error: 'Faltan campos requeridos.' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['angulosalasaitor@gmail.com'],
            replyTo: email,
            subject: escapeHtml(asunto).slice(0, 160),
            html: `
        <h3>Mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>
      `,
        });

        if (error) {
            console.error(error);
            return res.status(500).json({ success: false, error: error.message });
        }

        return res.status(200).json({ success: true, id: data.id });

    } catch (err) {
        console.error('Error del servidor:', err);
        return res.status(500).json({ success: false, error: 'Error interno del servidor.' });
    }
};
