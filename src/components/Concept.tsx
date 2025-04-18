
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Concept = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: "🔄",
      title: "Seconde main",
      description: "Pièces sélectionnées avec soin en parfait état",
    },
    {
      icon: "🛍",
      title: "Marques premium",
      description: "Nike, Ralph Lauren, Stone Island, Amiri, Burberry...",
    },
    {
      icon: "📦",
      title: "Livraison sécurisée",
      description: "Expédition rapide et assurée via Vinted",
    },
  ];

  return (
    <section id="concept" className="py-20 bg-skobox-gray">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">C'est quoi SKO_BOX ?</h2>
          <p className="text-lg max-w-3xl mx-auto">
            SKO_BOX, c'est une sélection pointue de vêtements de marques premiums comme Nike, Ralph Lauren, Stone Island, Amiri, Burberry, etc.
            Toutes les pièces sont soigneusement choisies auprès d'un grossiste, et revendues en parfait état sur Vinted à prix cassés.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bebas mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concept;
