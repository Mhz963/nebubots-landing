import { Zap, Clock, Globe, Brain, Shield, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const features = [
    {
      icon: Zap,
      title: 'Automates Work',
      subtitle: 'Even while you sleep.',
      description: 'Automate tasks with business automation tools—create social media posts, respond to comments, and more—freeing your team from repetitive tasks so they can focus on more strategic work.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Clock,
      title: 'Always On the Clock',
      subtitle: 'Available 24/7.',
      description: 'AI tools are always on and available around the clock to support your business. The only helpers who love overtime. Always ready to save your most valuable asset—your time.',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Globe,
      title: '100+ Languages',
      subtitle: 'Go global.',
      description: 'Select, communicate, and complete your work in over 100 languages. Break down language barriers effortlessly.',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Brain,
      title: 'Learns Your Business',
      subtitle: 'Just like real helpers.',
      description: 'Answer questions about your brand, add files, instructions, and your website for more unique results. The more information they have, the better the outcome.',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      subtitle: 'Enterprise-grade security.',
      description: 'Your data is protected with enterprise-grade security. We never share your information and maintain the highest privacy standards.',
      color: 'from-red-400 to-rose-500',
    },
    {
      icon: BarChart3,
      title: 'Improves Over Time',
      subtitle: 'Gets smarter every day.',
      description: 'AI that gets smarter with every interaction. Remembers files, websites, facts, and asks guided questions to deliver better results.',
      color: 'from-indigo-400 to-blue-500',
    },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Automates work.<br />
            <span className="text-gray-400 dark:text-gray-500">Even while you sleep.</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Automate tasks with business automation tools—create social media posts, respond to comments, and more—freeing your team from repetitive tasks so they can focus on more strategic work.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-800 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{feature.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">{feature.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
