import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What can I use Nebubots for?',
      answer: 'Nebubots is designed to boost productivity and simplify your business operations. You can use it for tasks like administrative work, lead generation, content creation, email outreach, social media management, project management, and much more. It\'s like having an AI Helper that completes your day-to-day tasks.',
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'Yes, we offer a money-back guarantee to ensure your satisfaction with Nebubots. If you\'re not happy with the platform within the specified guarantee period, you can request a full refund.',
    },
    {
      question: 'Can I invite my team to use Nebubots?',
      answer: 'Absolutely! Nebubots allows you to collaborate with your team by inviting them to the platform. You can work together seamlessly—all in one place. It\'s perfect for boosting team productivity and coordination.',
    },
    {
      question: 'Does Nebubots have an affiliate program?',
      answer: 'Yes, we offer a Nebubots affiliate program where you can earn up to 50% commission for every sale made through your unique link.',
    },
    {
      question: 'Are there tutorials or guides to help me use Nebubots?',
      answer: 'Absolutely! We provide a variety of resources to help you make the most of Nebubots, including detailed blog posts, case studies, and a Help Center. These materials are designed to guide you through using the platform effectively and answer any questions you may have.',
    },
    {
      question: 'Can Nebubots integrate with other software I use?',
      answer: 'Yes, Nebubots integrates with many leading tools, such as Google Calendar, Notion, Facebook, Gmail and many more, and is also compatible with leading AI systems for seamless integration.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Questions? <span className="gradient-text">Let's clear things up.</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Yes, we understand—AI-powered solutions, business automation tools, AI for marketing, AI for customer support… a lot of big words can get confusing. We're here to make it clear—check out our FAQs.
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="font-semibold text-lg text-gray-900 dark:text-gray-100 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
