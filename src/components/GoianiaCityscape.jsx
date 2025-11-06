import { motion } from 'framer-motion';
import areiao from '../assets/areiao.jpg';
import orion from '../assets/orion.jpg';
import oscar from '../assets/oscar.jpg';
import serra from '../assets/serra.jpg';
import viaduto from '../assets/viaduto.jpg';
import './GoianiaCityscape.css';

export const GoianiaCityscape = () => {
  const images = [
    { src: areiao, title: 'Arco em Goiás', description: 'Centro Cultural Icônico' },
    { src: orion, title: 'Edifício Orion', description: 'Downtown Goiânia' },
    { src: oscar, title: 'Oscar Niemeyer', description: 'Arquitetura Moderna' },
    { src: serra, title: 'Serra Verde', description: 'Paisagem Natural' },
    { src: viaduto, title: 'Viaduto', description: 'Infraestrutura da Cidade' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="cityscape" className="cityscape">
      <motion.div
        className="cityscape-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Goiânia em Foco</h2>
        <p>Conheça os principais marcos da cidade</p>
      </motion.div>

      <motion.div
        className="images-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="image-card"
            variants={imageVariants}
          >
            <div className="image-wrapper">
              <img src={image.src} alt={image.title} />
              <div className="overlay">
                <div className="overlay-content">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
