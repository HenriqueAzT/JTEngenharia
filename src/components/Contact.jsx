import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatPhone = (value) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');

    // Aplica a formatação (XX) 9 XXXX-XXXX
    if (numbers.length <= 2) {
      return numbers.length ? `(${numbers}` : '';
    } else if (numbers.length <= 3) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3)}`;
    } else if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
    }
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      setFormData((prev) => ({
        ...prev,
        [name]: formatPhone(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o email
    console.log('Formulário enviado:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const whatsappLink = `https://wa.me/5562985212084?text=Olá! Vim pelo site e gostaria de mais informações sobre os serviços da JT Engenharia.`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-container"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2>Entre em Contato</h2>
          <p>Fale conosco e descubra como podemos ajudar</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-form-wrapper"
            variants={itemVariants}
          >
            <form action="https://formsubmit.co/91162e1647af069c468aa9c4b23ce1b4" method="POST" className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nome *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu.email@empresa.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(21) 3000-0000"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Digite sua mensagem aqui..."
                  rows="5"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar Mensagem
              </motion.button>

              {isSubmitted && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  ✓ Mensagem enviada com sucesso!
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            className="contact-info"
            variants={itemVariants}
          >
            <div className="info-section">
              <h3>Informações de Contato</h3>

              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-details">
                  <p className="info-label">Email</p>
                  <p className="info-value">Jtosta.eng@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-details">
                  <p className="info-label">Telefone</p>
                  <p className="info-value">(62) 9 8521-2084</p>
                </div>
              </div>

              {/* <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-details">
                  <p className="info-label">Endereço</p>
                  <p className="info-value">Goiânia, GO - Brasil</p>
                </div>
              </div> */}

              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div className="info-details">
                  <p className="info-label">Horário</p>
                  <p className="info-value">Seg - Sex: 08:00 - 18:00</p>
                </div>
              </div>
            </div>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
              whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(37, 211, 102, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                style={{ marginRight: '8px' }}
              >
                <path
                  d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.8.48 3.47 1.34 4.94l-1.34 4.93 5.05-1.32c1.42.8 3.02 1.25 4.72 1.25h.01c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zM17.8 14.45c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.62.13-.19.27-.7.88-.86 1.06-.16.18-.32.2-.5.11-.19-.09-1.13-.41-2.15-1.32-.8-.7-1.35-1.58-1.52-1.85-.17-.27-.02-.42.11-.55.12-.12.27-.31.41-.46.14-.15.19-.25.29-.42.1-.17.05-.31-.02-.44-.08-.13-.62-1.48-.84-2.04-.23-.55-.45-.48-.62-.48-.17 0-.36-.01-.55-.01-.19 0-.5.07-.75.36-.25.29-.95.93-.95 2.27 0 1.34.97 2.63 1.1 2.81.13.18 1.9 3.02 4.6 4.22.65.29 1.15.46 1.53.59.7.25 1.32.21 1.82.13.55-.09 1.6-.65 1.83-1.28.23-.63.23-1.16.16-1.28-.07-.12-.25-.19-.52-.32z"
                />
              </svg>

              Fale Conosco no WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
