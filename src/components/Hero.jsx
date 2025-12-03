import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import goiania from '../assets/goiania.jpg';
import './Hero.css';

const YOUTUBE_VIDEO_ID = 'FCuvP7YPfVM';

export const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const stats = [
    { number: '10+', label: 'Anos de Experiência' },
    { number: '500+', label: 'Laudos Emitidos' },
    { number: '100%', label: 'Conformidade Legal' },
  ];

  return (
    <section id="intro" className="hero">
      {/* Background */}
      <div className="hero-background">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${goiania})` }}
        />
        <div className="background-overlay" />
      </div>

      <div className="container hero-content">
        <div className="hero-grid">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="hero-subtitle">Engenharia Diagnóstica & Perícias</span>
              <h1>
                <TypeAnimation
                  sequence={[
                    'Soluções Técnicas Precisas',
                    2000,
                    'Excelência em Perícias',
                    2000,
                    'Engenharia Consultiva',
                    2000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Transformamos desafios técnicos em soluções eficientes.
              Atuamos em Goiânia e região com laudos confiáveis e consultoria especializada.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button
                className="btn-primary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Orçamento
              </button>
              <button
                className="btn-secondary"
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              >
                Nossos Serviços
              </button>
            </motion.div>

            {/* Stats Cards */}
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (index * 0.1) }}
                >
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="hero-media"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="video-wrapper glass-card">
              {!isVideoPlaying ? (
                <div
                  className="video-placeholder"
                  onClick={() => setIsVideoPlaying(true)}
                  style={{ backgroundImage: `url(${goiania})` }}
                >
                  <div className="play-button-overlay">
                    <div className="play-button">
                      <FaPlay />
                    </div>
                    <span>Assistir Vídeo Institucional</span>
                  </div>
                </div>
              ) : (
                <iframe
                  className="youtube-player"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&controls=1&disablekb=1&fs=1`}
                  title="JT Engenharia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
