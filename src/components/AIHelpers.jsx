import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const AIHelpers = () => {
  const ref = useRef(null);
  const cheroCardRef = useRef(null);
  const cheroVideoRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const isCheroInView = useInView(cheroCardRef, { once: false, amount: 0.5 });
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (isCheroInView && cheroVideoRef.current) {
      setShowVideo(true);
      cheroVideoRef.current.play().catch(() => {
        setShowVideo(false);
      });
    } else if (!isCheroInView && cheroVideoRef.current) {
      cheroVideoRef.current.pause();
      cheroVideoRef.current.currentTime = 0;
      setShowVideo(false);
    }
  }, [isCheroInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const helpers = [
    {
      name: 'Chero',
      role: 'Email Assistant',
      description: 'Your AI-powered Gmail assistant that helps you manage and reply to emails automatically. Connect your Gmail account and let Chero help you organize messages, generate intelligent replies, and sync emails on your schedule.',
      icon: Mail,
      color: 'from-blue-500 to-cyan-500',
      hasLogo: true,
    },
  ];

  return (
    <section id="helpers" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            A co-worker who's <span className="gradient-text">always on the clock.</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-4">
            Available 24/7. AI tools are always on and available around the clock to support your business. The only helpers who love overtime. Always ready to save your most valuable asset—your time.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500">
            Speaks in 100+ languages. Go global—select, communicate, and complete your work in over 100 languages.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center"
        >
          <div className="max-w-md w-full">
          {helpers.map((helper, index) => {
            const Icon = helper.icon;
            const isChero = helper.name === 'Chero' && helper.hasLogo;
            return (
              <motion.div
                key={index}
                ref={isChero ? cheroCardRef : null}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500"
              >
                {isChero ? (
                  <div className="mb-4 flex items-center space-x-3">
                    <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform relative">
                      <video
                        ref={cheroVideoRef}
                        src="/chero-video.mp4"
                        className={`w-full h-full object-contain absolute inset-0 transition-opacity duration-500 ${
                          showVideo ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                        muted
                        loop
                        playsInline
                        preload="auto"
                      />
                      <img
                        src="/chero-logo.jpeg"
                        alt="Chero Logo"
                        className={`w-full h-full object-contain transition-opacity duration-500 ${
                          showVideo ? 'opacity-0' : 'opacity-100'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-gray-100">{helper.name}</h3>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">{helper.role}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${helper.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-gray-100">{helper.name}</h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-3">{helper.role}</p>
                  </>
                )}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{helper.description}</p>
              </motion.div>
            );
          })}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            Get helpers
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AIHelpers;
