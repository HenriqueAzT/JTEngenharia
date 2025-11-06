import { motion } from 'framer-motion';
import './About.css';

export const About = () => {
  const features = [
    {
      id: 1,
      icon: '🛡️',
      title: 'Proteção Completa',
      description: 'Soluções abrangentes de segurança para todos os tipos de empresas',
    },
    {
      id: 2,
      icon: '👥',
      title: 'Equipe Experiente',
      description: 'Profissionais altamente qualificados com anos de experiência',
    },
    {
      id: 3,
      icon: '✓',
      title: 'Conformidade Total',
      description: 'Garantia de cumprimento com todas as normas e regulamentações',
    },
    {
      id: 4,
      icon: '📊',
      title: 'Análise Detalhada',
      description: 'Diagnósticos precisos e soluções personalizadas para sua empresa',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div className="about-header" variants={itemVariants}>
          <h2>Sobre a JT Engenharia</h2>
        </motion.div>

        <motion.div className="about-content" variants={itemVariants}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(87, 128, 180, 0.2)' }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
