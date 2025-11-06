import { motion } from 'framer-motion';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>JT Engenharia</h3>
          <p>Soluções em Segurança do Trabalho com excelência e inovação.</p>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#intro">Introdução</a></li>
            <li><a href="#gallery">Galeria</a></li>
            <li><a href="#clients">Clientes</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4>Contato</h4>
          <p>Email: contato@jtengenharia.com</p>
          <p>Telefone: (62) 3000-0000</p>
          <p>Endereço: Goiânia, GO</p>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4>Redes Sociais</h4>
          <div className="social-links">
            <motion.a href="#" whileHover={{ scale: 1.1 }}>
              Facebook
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }}>
              Instagram
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }}>
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p>&copy; {currentYear} JT Engenharia. Todos os direitos reservados.</p>
      </motion.div>
    </motion.footer>
  );
};
