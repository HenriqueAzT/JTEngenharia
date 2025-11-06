import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import areiao from '../assets/areiao.jpg';
import orion from '../assets/orion.jpg';
import oscar from '../assets/oscar.jpg';
import serra from '../assets/serra.jpg';
import viaduto from '../assets/viaduto.jpg';
import './Hero.css';

const YOUTUBE_VIDEO_ID = 'FCuvP7YPfVM';

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goianiaImages = [areiao, orion, oscar, serra, viaduto];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % goianiaImages.length);
    }, 5000); // Muda imagem a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="intro" className="hero">
      {/* Background com carrossel de imagens */}
      <div className="hero-background">
        <motion.div
          className="background-carousel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            backgroundImage: `url(${goianiaImages[currentImageIndex]})`,
          }}
        />
        <motion.div
          className="background-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Indicadores de imagem */}
      <div className="carousel-indicators">
        {goianiaImages.map((_, index) => (
          <motion.button
            key={index}
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div className="hero-text">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>
              <TypeAnimation
                sequence={[
                  'Segurança do Trabalho',
                  1500,
                  'Excelência Profissional',
                  1500,
                  'Proteção para sua Empresa',
                  1500,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ color: '#dae7f8ff', fontSize: 'inherit' }}
              />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Na JT Engenharia, transformamos a segurança do trabalho em uma vantagem
            competitiva para sua empresa. Com soluções inovadoras e equipe especializada,
            garantimos ambientes seguros e conformidade total com a legislação.
          </motion.p>

          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(87, 128, 180, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Começar Agora
          </motion.button>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="video-container">
            <iframe
              className="youtube-player"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&controls=1`}
              title="JT Engenharia - Segurança do Trabalho"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
