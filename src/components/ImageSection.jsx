import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1682687221038-404670f367f0?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1682687221038-404670f367f1?auto=format&fit=crop&q=80&w=1000'
];

function ImageSection({ activeImage }) {
  return (
    <div className="w-full h-[40vh] md:h-screen md:sticky md:top-0 flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        <motion.img
          key={activeImage}
          src={images[activeImage]}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover rounded-lg shadow-lg"
          alt={`Scene ${activeImage + 1}`}
        />
      </AnimatePresence>
    </div>
  );
}

export { ImageSection };