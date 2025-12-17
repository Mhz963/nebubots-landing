import { Mail, MessageSquare, Calendar, TrendingUp, Users, Search, Briefcase, Megaphone, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Logo from './Logo';

const AIHelpers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
      name: 'Emmie',
      role: 'Email Marketing Specialist',
      description: 'From crafting engaging emails to generating effective win-back flows, Emmie uses AI-powered solutions to turn your subscriber list into revenue. Emmie also helps reduce the cost of email marketing campaigns while increasing ROI.',
      icon: Mail,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Cassie',
      role: 'Customer Support Specialist',
      description: 'As a smart and charming AI for customer support, Cassie crafts expertly tailored responses to customer queries while maintaining your brand\'s unique voice. Cassie works alongside your human employees, supporting them to deliver exceptional customer support.',
      icon: MessageSquare,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Vizzy',
      role: 'Virtual Assistant',
      description: 'A trustworthy AI for business owners and busy entrepreneurs to handle calendars, schedule meetings, plan trips, or simply ask AI questions about daily challenges.',
      icon: Calendar,
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Dexter',
      role: 'Data Analyst',
      description: 'A data genius seamlessly transforming complex data into precise calculations, forecasts, and clear, actionable business insights that drive results. With Dexter, you gain actionable insights that inform your business decisions.',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Scouty',
      role: 'Recruiter',
      description: 'Turning hiring challenges into opportunities, crafting magnetic job posts, and guiding smooth team onboarding. Scouty can support recruitment needs across all departments, from HR to finance to customer service.',
      icon: Users,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      name: 'Penn',
      role: 'Copywriter',
      description: 'Dedicated to writing compelling copy for your ads, blog posts, websites, advertorials and other marketing campaigns that convert readers into customers. For example, Penn can generate engaging ad copy for a new product launch.',
      icon: PenTool,
      color: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Seomi',
      role: 'SEO Specialist',
      description: 'Streamline business processes with Seomi\'s proven SEO strategies, SEO-optimized blog posts, and AI-powered solutions to boost your website rankings. Seomi brings advanced SEO skills to your team, helping you stay ahead in search rankings.',
      icon: Search,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      name: 'Milli',
      role: 'Sales Manager',
      description: 'Milli uses your business insights to craft compelling cold call scripts, design persuasive cold emails, and build pitches that help you close deals with confidence. Milli is also capable of adapting sales strategies to different audiences and markets.',
      icon: Briefcase,
      color: 'from-teal-500 to-cyan-500',
    },
    {
      name: 'Soshie',
      role: 'Social Media Manager',
      description: 'Boost Productivity with AI social media manager by using business automation tools—generate content, plan strategies, schedule posts, find trends, and more. Soshie can collaborate with your marketing and content teams to ensure a unified social media strategy.',
      icon: Megaphone,
      color: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section id="helpers" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {helpers.map((helper, index) => {
            const Icon = helper.icon;
            const isEmmie = helper.name === 'Emmie';
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500"
              >
                {isEmmie ? (
                  <div className="mb-4 flex items-center space-x-3">
                    <Logo size="default" animated={true} className="group-hover:scale-110 transition-transform" />
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
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
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
