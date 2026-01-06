import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/LogoJTBranca.png';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="JT Engenharia" className="footer-logo" />
            <p>
              Soluções completas em Engenharia Diagnóstica, Elétrica e Perícias.
              Compromisso com a técnica e a qualidade.
            </p>
            <div className="social-links">
              {/* <a href="#" aria-label="Facebook"><FaFacebook /></a> */}
              <a href="https://www.instagram.com/jtosta_engenheiro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" aria-label="Instagram"><FaInstagram /></a>
              {/* <a href="#" aria-label="LinkedIn"><FaLinkedin /></a> */}
              <a href="https://wa.me/5562985212084" target="_blank" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#intro">Início</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#about">Sobre Nós</a></li>
              <li><a href="#clients">Clientes</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contato</h4>
            <p><strong>Email:</strong> Jtosta.eng@gmail.com</p>
            <p><strong>Telefone:</strong> (62) 9 8521-2084</p>
            {/* <p><strong>Endereço:</strong> Goiânia, GO - Brasil</p> */}
            <p><strong>Horário:</strong> Seg - Sex: 08:00 - 18:00</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} JT Engenharia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
