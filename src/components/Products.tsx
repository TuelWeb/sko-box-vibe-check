
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Products = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Produits avec images stylées de vêtements (images d'exemple)
  const products = [
    {
      id: 1,
      name: "Nike Tech Fleece",
      image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=1664&auto=format&fit=crop",
      brand: "Nike",
    },
    {
      id: 2,
      name: "Ralph Lauren Polo",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1580&auto=format&fit=crop",
      brand: "Ralph Lauren",
    },
    {
      id: 3,
      name: "Stone Island Sweatshirt",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974&auto=format&fit=crop",
      brand: "Stone Island",
    },
    {
      id: 4,
      name: "Burberry Shirt",
      image: "https://images.unsplash.com/photo-1529720317453-c8da503f2051?q=80&w=2070&auto=format&fit=crop",
      brand: "Burberry",
    },
    {
      id: 5,
      name: "Amiri Jeans",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop",
      brand: "Amiri",
    },
    {
      id: 6,
      name: "Nike Air Max",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1925&auto=format&fit=crop",
      brand: "Nike",
    },
  ];

  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Nos produits</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Découvrez une sélection de pièces de qualité, soigneusement choisies pour leur style et leur état impeccable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-md group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div 
                className="aspect-[4/5] bg-cover bg-center" 
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div 
                  className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <h3 className="text-xl text-white font-bebas mb-2">{product.name}</h3>
                  <p className="text-skobox-yellow mb-4">{product.brand}</p>
                  <a 
                    href="https://www.vinted.fr/member/101923031-skobox" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn bg-skobox-yellow text-black hover:bg-opacity-80"
                  >
                    Voir sur Vinted
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-10"
        >
          <a 
            href="https://www.vinted.fr/member/101923031-skobox" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Découvrir toute la sélection sur Vinted
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
