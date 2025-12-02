import { motion } from 'framer-motion';
import {
  FaBuilding,
  FaTools,
  FaBolt,
  FaFireExtinguisher,
  FaCloudShowersHeavy,
  FaLayerGroup,
  FaChargingStation,
  FaTemperatureHigh,
  FaFileContract,
  FaArrowUp
} from 'react-icons/fa';
import './Gallery.css';

export const Gallery = () => {
  const services = [
    {
      id: 1,
      title: 'Laudos e Perícias Prediais',
      description: 'Inspeção de fissuras, infiltrações e patologias estruturais com emissão de laudo técnico + ART/RRT.',
      icon: <FaBuilding />,
    },
    {
      id: 2,
      title: 'Consultoria de Manutenção',
      description: 'Diagnóstico e planejamento de manutenção preventiva e corretiva para edificações e indústrias.',
      icon: <FaTools />,
    },
    {
      id: 3,
      title: 'Qualidade de Energia',
      description: 'Análise de distúrbios elétricos e inspeção completa de sistemas para evitar falhas e riscos.',
      icon: <FaBolt />,
    },
    {
      id: 4,
      title: 'Projetos Elétricos e Incêndio',
      description: 'Elaboração de projetos elétricos e de proteção contra incêndio (PPCI) conforme normas vigentes.',
      icon: <FaFireExtinguisher />,
    },
    {
      id: 5,
      title: 'SPDA, Aterramento e Solo',
      description: 'Ensaios de SPDA, medições de aterramento e estudos de estratificação do solo para máxima segurança.',
      icon: <FaCloudShowersHeavy />,
    },
    {
      id: 7,
      title: 'Carregadores Veiculares',
      description: 'Viabilidade e projeto para instalação de carregadores de veículos elétricos (CVE).',
      icon: <FaChargingStation />,
    },
    {
      id: 8,
      title: 'Inspeção Termográfica',
      description: 'Detecção de falhas e sobrecargas em quadros elétricos e fachadas com câmera termográfica.',
      icon: <FaTemperatureHigh />,
    },
    {
      id: 9,
      title: 'Aprovação de CERCON',
      description: 'Assessoria completa para obtenção e renovação do Certificado de Conformidade (Bombeiros).',
      icon: <FaFileContract />,
    },
    {
      id: 10,
      title: 'Inspeção de Elevadores',
      description: 'Vistoria técnica elétrica e de segurança em elevadores de passageiros.',
      icon: <FaArrowUp />,
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
