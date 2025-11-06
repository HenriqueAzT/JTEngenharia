import { motion } from 'framer-motion';
import './Header.css';

export const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header-container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h1>JT Engenharia</h1>
        </motion.div>

        <nav className="nav">
          <motion.button
            onClick={() => scrollToSection('intro')}
            whileHover={{ color: '#5780b4', fontWeight: 500 }}
            className="nav-link"
          >
            Introdução
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('gallery')}
            whileHover={{ color: '#5780b4', fontWeight: 500 }}
            className="nav-link"
          >
            Galeria
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('clients')}
            whileHover={{ color: '#5780b4', fontWeight: 500 }}
            className="nav-link"
          >
            Clientes
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('about')}
            whileHover={{ color: '#5780b4', fontWeight: 500 }}
            className="nav-link"
          >
            Sobre
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ color: '#5780b4', fontWeight: 500 }}
            className="nav-link"
          >
            Contato
          </motion.button>
        </nav>
      </div>
    </motion.header>
  );
};
