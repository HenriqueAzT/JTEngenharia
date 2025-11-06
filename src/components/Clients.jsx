import { motion } from 'framer-motion';
import './Clients.css';

export const Clients = () => {
  const clients = [
    { id: 1, name: 'Empresa A', logo: 'EA' },
    { id: 2, name: 'Empresa B', logo: 'EB' },
    { id: 3, name: 'Empresa C', logo: 'EC' },
    { id: 4, name: 'Empresa D', logo: 'ED' },
    { id: 5, name: 'Empresa E', logo: 'EE' },
    { id: 6, name: 'Empresa F', logo: 'EF' },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="clients" className="clients">
      <motion.div
        className="clients-container"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2>Empresas que Confiam em Nós</h2>
          <p>
            Mais de XX empresas já confiaram na JT Engenharia para suas soluções
            de segurança do trabalho
          </p>
        </motion.div>

        <motion.div
          className="clients-grid"
          variants={containerVariants}
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              className="client-logo"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 8px 25px rgba(87, 128, 180, 0.25)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="logo-placeholder">{client.logo}</div>
              <p>{client.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
