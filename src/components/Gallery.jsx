import { motion } from 'framer-motion';
import './Gallery.css';

export const Gallery = () => {
  const images = [
    {
      id: 1,
      title: 'Treinamento de Segurança',
      category: 'Treinamento',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Inspeção de Equipamentos',
      category: 'Inspeção',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Consultoria Especializada',
      category: 'Consultoria',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'Análise de Riscos',
      category: 'Análise',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    },
    {
      id: 5,
      title: 'Implementação de Normas',
      category: 'Implementação',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    },
    {
      id: 6,
      title: 'Acompanhamento Contínuo',
      category: 'Acompanhamento',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    },
  ];

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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="gallery" className="gallery">
      <motion.div
        className="gallery-container"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2>Nossa Galeria</h2>
          <p>Conheça nossos projetos e soluções em ação</p>
        </motion.div>

        <motion.div
          className="gallery-grid"
          variants={containerVariants}
        >
          {images.map((item) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="gallery-image-wrapper">
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <span className="category">{item.category}</span>
                </div>
              </div>
              <div className="gallery-content">
                <h3>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
