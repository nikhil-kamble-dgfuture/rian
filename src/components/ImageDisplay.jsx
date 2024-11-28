import { motion, AnimatePresence } from 'framer-motion';

export function ImageDisplay({ content, activeIndex }) {
  return (
    <div className="w-full h-[40vh] md:h-screen md:sticky md:top-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="w-full h-full p-4 md:p-8"
        >
          <img
            src={content[activeIndex].image}
            alt={`Scene ${activeIndex + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}