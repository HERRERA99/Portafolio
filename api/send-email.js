// api/send-email.js
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Método no permitido');
    }

    // Ahora esperamos 'name', 'email', 'message'
    const { name, email, message } = req.body;

    if (!email || !message || !name) {
        return res.status(400).json({ error: 'Faltan campos requeridos.' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['angulosalasaitor@gmail.com'],
            subject: name,
            html: `
        <h3>Mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
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