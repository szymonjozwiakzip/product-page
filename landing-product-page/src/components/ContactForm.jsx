import { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import '../styles/contact.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    const subject = encodeURIComponent(`Wiadomość od ${formData.name}`);
    const body = encodeURIComponent(
      `Imię: ${formData.name}\nE-mail: ${formData.email}\n\nWiadomość:\n${formData.message}`
    );
    window.location.href = `mailto:equilibra@mail-kontaktowy.pl?subject=${subject}&body=${body}`;

    setFormData({ name: '', email: '', message: '' });
    setFormStatus('success');

    setTimeout(() => setFormStatus(''), 3000);
  };

  return (
    <section id="contact" className="contact-form-container">
      <h2 className="form-title">Skontaktuj się z nami</h2>

      {formStatus === 'success' && (
        <div className="status-message status-success">
          Dziękujemy za wiadomość! Wkrótce się z Tobą skontaktujemy.
        </div>
      )}

      {formStatus === 'error' && (
        <div className="status-message status-error">
          Proszę wypełnić wszystkie pola formularza.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Imię i nazwisko</label>
          <User className="input-icon" />
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Jan Kowalski"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Adres e-mail</label>
          <Mail className="input-icon" />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="jan.kowalski@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">Wiadomość</label>
          <MessageSquare className="input-icon" />
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="form-input form-textarea"
            placeholder="Twoja wiadomość..."
          />
        </div>

        <div className="form-group">
          <button type="submit" className="submit-button">
            <Send className="button-icon" />
            Wyślij wiadomość
          </button>
        </div>
      </form>

      <div className="contact-alternative">
        <p>Możesz również skontaktować się z nami bezpośrednio przez e-mail:</p>
        <a
          href="mailto:equilibra@mail-kontaktowy.pl"
          className="mailto-link"
        >
          <Mail className="mailto-icon" />
          equilibra@mail-kontaktowy.pl
        </a>
      </div>
    </section>
  );
}