import { Mail, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Logo from './Logo';

const Hero = () => {
  const ref = useRef(null);
  const logoRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isLogoInView = useInView(logoRef, { once: false, amount: 0.3 });

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
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Text Content Section - Above the full screen logo */}
      <div className="relative z-10 pt-24 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                  AI-Powered Email Assistant
                </span>
              </div>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
            >
              <span className="gradient-text">Chero</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-200 mb-4 max-w-4xl mx-auto font-medium"
            >
              AI Employees: Your Helpers That Never Sleep
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-3 max-w-3xl mx-auto"
            >
              Build, grow, and scale your business with a team of AI employees.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-500 dark:text-gray-500 mb-6 max-w-2xl mx-auto"
            >
              Connect your Gmail account and let AI help you manage and reply to emails automatically.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
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
      </div>

      {/* Full Screen Logo Area */}
      <div 
        ref={logoRef}
        className="flex-1 w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center relative bg-gradient-to-b from-transparent via-primary-50/50 dark:via-primary-900/20 to-primary-100/50 dark:to-primary-900/30"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isLogoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center items-center"
        >
          <Logo 
            size="hero" 
            animated={true} 
            scrollTriggered={true} 
            className="drop-shadow-2xl w-full max-w-2xl h-auto"
          />
        </motion.div>
      </div>

      {/* Feature Cards Section */}
      <div className="relative z-10 pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto justify-items-center"
          >
            {[
              {
                icon: Mail,
                title: 'Smart Email Management',
                description: 'Automatically sync and organize your Gmail messages with intelligent categorization',
              },
              {
                icon: Sparkles,
                title: 'AI-Powered Replies',
                description: 'Generate intelligent, context-aware email replies using advanced AI technology',
              },
              {
                icon: Mail,
                title: 'Auto Sync',
                description: 'Set up automatic email syncing on your schedule - daily, weekly, or custom intervals',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-gray-100">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
