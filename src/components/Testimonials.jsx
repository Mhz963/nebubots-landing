import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const testimonials = [
    {
      name: 'Socrate Concepcion',
      role: 'US',
      content: 'SintraAI has been a Game-Changer for My Business! I can\'t recommend SintraAI enough. It\'s like having a personal business coach 24/7, mapping out steps to grow my company and clarifying my priorities. I feel a renewed sense of focus and control every day.',
      rating: 5,
      date: 'December 29, 2024',
    },
    {
      name: 'Jennifer Glenn',
      role: 'US',
      content: 'Perfect for Solopreneurs—New or Seasoned. Each AI bot tackles my to-do list, from scheduling tasks to crawling my website for SEO tips. I love how it set up calendar reminders for all my commitments. Sintra.ai is well worth every penny, especially for a busy single-person business.',
      rating: 5,
      date: 'December 14, 2024',
    },
    {
      name: 'Custódio Barreiros',
      role: 'HU',
      content: 'Additional Help from Very Organized Helpers! As an entrepreneur launching a new venture, Sintra.ai has made a real difference. The AI assistants are like personal staff I can rely on. And whenever I needed support, the team was on point. A must-try for any budding business!',
      rating: 5,
      date: 'December 21, 2024',
    },
    {
      name: 'Holly Wehde',
      role: 'US',
      content: 'No psychology degree needed and no drama! I once had a large team, and although I loved my helpers, they needed constant motivation. With Sintra, there\'s no drama, just new ideas that I can simply accept or reject. It\'s a huge relief—100% recommended.',
      rating: 5,
      date: 'December 26, 2024',
    },
    {
      name: 'Michele Davis',
      role: 'US',
      content: 'Perfect AI Support for My Online Boutique. Hiring Sintra was a great decision for my struggling boutique. They handle social media posts, guide my ads, and even offered a solution for double social media pages. Now I can focus on my inventory and customers.',
      rating: 5,
      date: 'December 17, 2024',
    },
    {
      name: 'Sami Liftoff',
      role: 'US',
      content: 'Sintra X Saved Me Time. Signed up for Sintra X—it felt overwhelming at first, but once it understood how I think, it turned into a creative powerhouse. Support is top-notch, and the daily integrations impress me.',
      rating: 5,
      date: 'Dec 10, 2024',
    },
    {
      name: 'lars',
      role: 'DK',
      content: 'Some Time They\'re Too Effective with Ideas. I\'m not usually one to give top marks, but once I got comfortable with Sintra\'s 12 helpers, I was blown away by their efficiency. They churn out so many analytical ideas I have to pause and digest them. It\'s sometimes overwhelming, but in a good way.',
      rating: 5,
      date: 'December 29, 2024',
    },
    {
      name: 'Michelangelo',
      role: 'IT',
      content: 'SOOO much better than ChatGPT. Sintra integrates with all my favorite tools and these little helpers automate my tasks in a huge way. They actually learn my company\'s style day by day. It\'s a massive step up from generic AI chats.',
      rating: 5,
      date: 'December 30, 2024',
    },
    {
      name: 'Lionel D\'Alvia',
      role: 'US',
      content: 'So far, I love it! My life is simpler with Sintra. It handles content creation, next steps, brainstorming, and copy. I highly recommend it if you want to free up mental space for what truly matters in your business.',
      rating: 5,
      date: 'December 28, 2024',
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Helpers of the month, <span className="gradient-text">every month.</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            With over 40,000 entrepreneurs from more than 100 countries, Nebubots is the world's leading provider of business automation tools and AI-powered solutions.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                <p className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{testimonial.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
