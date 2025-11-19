import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserTie, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import './About.css';

export const About = () => {
  const features = [
    {
      id: 1,
      icon: <FaShieldAlt />,
      title: 'Proteção Completa',
      description: 'Soluções abrangentes de segurança para todos os tipos de empresas',
    },
    {
      id: 2,
      icon: <FaUserTie />,
      title: 'Equipe Experiente',
      description: 'Profissionais altamente qualificados com anos de experiência',
    },
    {
      id: 3,
      icon: <FaCheckCircle />,
      title: 'Conformidade Total',
      description: 'Garantia de cumprimento com todas as normas e regulamentações',
    },
    {
      id: 4,
      icon: <FaChartLine />,
      title: 'Análise Detalhada',
      description: 'Diagnósticos precisos e soluções personalizadas para sua empresa',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title" style={{ textAlign: 'left', left: 0, transform: 'none' }}>Sobre a JT Engenharia</h2>
            <p className="lead-text">
              Há mais de 10 anos garantindo a segurança e a conformidade técnica de empresas em Goiânia e região.
            </p>
            <p>
              A JT Engenharia nasceu com o propósito de elevar o padrão de segurança do trabalho e perícias de engenharia.
              Nossa missão é fornecer soluções técnicas que não apenas atendam à legislação, mas que protejam vidas e patrimônios.
            </p>
            <p>
              Contamos com uma equipe multidisciplinar de engenheiros e técnicos prontos para atender demandas complexas
              com agilidade e precisão técnica.
            </p>

            <div className="about-features">
              {features.map((feature) => (
                <div key={feature.id} className="feature-item">
                  <div className="feature-icon-wrapper">
                    {feature.icon}
                  </div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper glass-card">
              {/* Placeholder for team or office image */}
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Equipe JT Engenharia" />
              <div className="experience-badge">
                <span className="years">10+</span>
                <span className="text">Anos de<br />Experiência</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
