
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center py-20">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2940')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-0"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img 
              src="/lovable-uploads/ad45afbc-342c-4c3d-9068-86059fab2b95.png" 
              alt="SKO_BOX Logo" 
              className="h-32 w-auto mb-6"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bebas text-white leading-tight mb-6"
          >
            Des pièces de marque. Des prix accessibles. Du style garanti.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="https://www.vinted.fr/member/101923031-skobox" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Voir mes pièces
            </a>
            <a href="https://www.tiktok.com/@skobox" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-white border-white hover:bg-white/10">
              Suivre sur TikTok
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white text-sm mb-2">Découvrir</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5
            }}
            className="w-2 h-2 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
