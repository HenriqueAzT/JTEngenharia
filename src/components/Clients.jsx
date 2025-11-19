import { motion } from 'framer-motion';
import './Clients.css';

export const Clients = () => {
  const clients = [
    { id: 1, name: 'Construtora A', logo: 'CA' },
    { id: 2, name: 'Indústria B', logo: 'IB' },
    { id: 3, name: 'Comércio C', logo: 'CC' },
    { id: 4, name: 'Engenharia D', logo: 'ED' },
    { id: 5, name: 'Logística E', logo: 'LE' },
    { id: 6, name: 'Serviços F', logo: 'SF' },
  ];

  return (
    <section id="clients" className="clients">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Clientes Parceiros</h2>
          <p>
            Empresas que confiam na nossa expertise para garantir a segurança
          </p>
        </motion.div>

        <div className="clients-grid">
          {clients.map((client) => (
            <motion.div
              key={client.id}
              className="client-card glass-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="client-logo-placeholder">
                {client.logo}
              </div>
              <p>{client.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
