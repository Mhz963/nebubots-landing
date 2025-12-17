import { Mail, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/nebubots.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-full border border-primary-200 dark:border-primary-800">
              <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                AI Employees Platform
              </span>
            </div>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
          >
            <span className="gradient-text">Nebubots</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl text-white mb-4 max-w-4xl mx-auto font-medium drop-shadow-lg"
          >
            AI Employees: Your Helpers That Never Sleep
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/90 mb-3 max-w-3xl mx-auto drop-shadow-md"
          >
            Build, grow, and scale your business with a team of AI employees.
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-white/80 mb-6 max-w-2xl mx-auto drop-shadow-md"
          >
            Nebubots provides a team of specialized AI assistants including Chero for email management, Emmie for email marketing, and many more to help automate your business tasks.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center space-x-2 group"
            >
              <Mail className="w-5 h-5" />
              <span>Sign in with Gmail</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-500 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
