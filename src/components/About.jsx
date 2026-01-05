import { motion } from 'framer-motion';
import { FaUsers, FaHandshake, FaFileSignature, FaClipboardList } from 'react-icons/fa';
import './About.css';
import imagemJTEng from '../assets/imagemJTEng.png';

export const About = () => {
  const features = [
    {
      id: 1,
      icon: <FaUsers />,
      title: 'Equipe Multidisciplinar',
      description: 'Engenheiros civis, elétricos, mecânicos e de segurança prontos para atender demandas complexas.',
    },
    {
      id: 2,
      icon: <FaHandshake />,
      title: 'Atendimento Personalizado',
      description: 'Soluções adaptadas para condomínios, indústrias, comércios e agronegócio.',
    },
    {
      id: 3,
      icon: <FaFileSignature />,
      title: 'Documentação Técnica',
      description: 'Relatórios profissionalizados com ART e total conformidade com normas vigentes.',
    },
    {
      id: 4,
      icon: <FaClipboardList />,
      title: 'Suporte Completo',
      description: 'Do diagnóstico e inspeção até o projeto.',
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
              Excelência técnica e compromisso com a segurança em cada detalhe.
            </p>
            <p>
              A JT Engenharia se destaca pela atuação de uma equipe multidisciplinar altamente qualificada.
              Nossa missão é fornecer soluções técnicas precisas que garantam não apenas a conformidade legal,
              mas a segurança efetiva de vidas e patrimônios.
            </p>
            <p>
              Oferecemos um suporte completo, desde a inspeção inicial até a aprovação final junto aos órgãos competentes,
              sempre com documentação técnica rigorosa e atendimento personalizado para cada tipo de empreendimento.
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
              <img src={imagemJTEng} alt="Equipe JT Engenharia" />
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
