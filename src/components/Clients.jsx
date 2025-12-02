import { motion } from 'framer-motion';
import mcdonalds from '../assets/mcdonalds-logo.png';
import rihappy from '../assets/rihappy-logo.png';
import makro from '../assets/Makro-logo.png';
import livreBuritis from '../assets/Livre-Buritis-Logo.png';
import flexAcademia from '../assets/flex-academia-logo.png';
import drogariasPacheco from '../assets/drogarias-pacheco-logo.png';
import contempleMarista from '../assets/contemple-marista-logo.jpg';
import './Clients.css';

export const Clients = () => {
  const clients = [
    { id: 1, name: 'McDonald\'s', logo: mcdonalds },
    { id: 2, name: 'RiHappy', logo: rihappy },
    { id: 3, name: 'Makro', logo: makro },
    { id: 4, name: 'Residencial Livre Buritis', logo: livreBuritis },
    { id: 5, name: 'Flex Academia', logo: flexAcademia },
    { id: 6, name: 'Drogarias Pacheco', logo: drogariasPacheco },
    { id: 7, name: 'Contemple Marista', logo: contempleMarista },
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
              <div className={`client-logo-wrapper ${client.name === 'Makro' ? 'makro-logo' : ''}`}>
                <img src={client.logo} alt={client.name} className="client-logo" />
              </div>
              <p>{client.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
