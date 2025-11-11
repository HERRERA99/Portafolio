import "../styles/Contact.css"
import {useState} from "react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    // Función para actualizar el estado
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Función principal para manejar el envío
    const handleSubmit = async (e) => {
        e.preventDefault(); // Detener el envío por defecto del formulario
        setLoading(true);
        setStatus(''); // Limpiar el estado anterior

        try {
            // 2. Llamar a la Serverless Function de Vercel
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    // Añadir un asunto predeterminado, ya que la Serverless Function lo espera
                    asunto: `Nuevo mensaje de contacto de ${formData.name}`,
                }),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus('¡Mensaje enviado con éxito! Te responderé pronto.');
                // 3. Opcional: Limpiar el formulario después del éxito
                setFormData({ name: '', email: '', message: '' });
            } else {
                // Manejar errores de la función
                setStatus(`Fallo al enviar: ${result.error || 'Error desconocido.'}`);
            }

        } catch (error) {
            setStatus('Fallo la conexión con el servidor. Intenta de nuevo más tarde.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section id="contact" className="contact-section">
                <div className="container contact-container">
                    <h2 className="title contact-title">CONTACT ME</h2>
                    {/* 4. Usar onSubmit y el controlador handleSubmit */}
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange} // 5. Vincular con el estado
                            required
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange} // 5. Vincular con el estado
                            required
                        />

                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange} // 5. Vincular con el estado
                            required
                        ></textarea>

                        <button type="submit" disabled={loading}>
                            {loading ? 'SENDING...' : 'SEND'}
                        </button>

                        {/* Mostrar el estado del envío */}
                        {status && <p className="form-status-message">{status}</p>}
                    </form>
                </div>
            </section>
        </>
    );
}