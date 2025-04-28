
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface Temp404OverlayProps {
  onClose: () => void;
}

const Temp404Overlay = ({ onClose }: Temp404OverlayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
    >
      <div className="text-center max-w-md p-6 bg-white/10 rounded-lg">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-200 mb-6">
          Cette page n'existe pas ou n'est plus disponible
        </p>
        <div className="text-sm text-gray-400 mb-4">
          Pour activer le site, définissez SHOW_404_OVERLAY sur false dans le fichier Index.tsx
        </div>
        <button
          onClick={onClose}
          className="bg-skobox-yellow text-black px-6 py-3 rounded-md font-medium flex items-center mx-auto"
        >
          <X className="mr-2 h-4 w-4" /> Fermer
        </button>
      </div>
    </motion.div>
  );
};

export default Temp404Overlay;
