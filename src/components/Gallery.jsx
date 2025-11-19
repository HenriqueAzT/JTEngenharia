import { motion } from 'framer-motion';
import {
  FaHardHat,
  FaClipboardCheck,
  FaDraftingCompass,
  FaBalanceScale,
  FaChalkboardTeacher,
  FaHandshake
} from 'react-icons/fa';
import './Gallery.css';

export const Gallery = () => {
  const services = [
    {
      id: 1,
      title: 'Segurança do Trabalho',
      description: 'Gestão completa de SST, elaboração de laudos (LTCAT, LI, Laudo Ergonômico) e programas de prevenção.',
      icon: <FaHardHat />,
    },
    {
      id: 2,
      title: 'Perícias de Engenharia',
      description: 'Assistência técnica em perícias judiciais e extrajudiciais, com emissão de pareceres técnicos fundamentados.',
      icon: <FaBalanceScale />,
    },
    {
      id: 3,
      title: 'Projetos e Laudos',
      description: 'Elaboração de projetos de combate a incêndio, laudos de inspeção predial e estrutural.',
      icon: <FaDraftingCompass />,
    },
    {
      id: 4,
      title: 'Treinamentos',
      description: 'Capacitação de equipes com treinamentos de NRs (NR-10, NR-35, NR-33, etc.) in company ou online.',
      icon: <FaChalkboardTeacher />,
    },
    {
      id: 5,
      title: 'Inspeções Técnicas',
      description: 'Vistorias técnicas para identificação de patologias e não conformidades em edificações.',
      icon: <FaClipboardCheck />,
    },
    {
      id: 6,
      title: 'Consultoria Consultiva',
      description: 'Acompanhamento contínuo para garantir a conformidade legal e a segurança do seu patrimônio.',
      icon: <FaHandshake />,
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
    <section id="services" className="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Nossos Serviços</h2>
          <p>Soluções completas em Engenharia e Segurança para sua empresa</p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card glass-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-link">Saiba mais</button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
