import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiClock, FiDroplet, FiSun, FiScissors } from "react-icons/fi";

const HowItWorks = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      icon: <FiScissors />,
      title: "Loại bỏ bụi bẩn",
      description: "Cẩn thận làm sạch lớp bụi bẩn bên ngoài để chuẩn bị cho quá trình vệ sinh sâu.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <FiDroplet />,
      title: "Sử dụng dung dịch chuyên dụng",
      description: "Áp dụng dung dịch vệ sinh phù hợp với từng loại chất liệu để đảm bảo an toàn.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FiCheck />,
      title: "Làm sạch sâu",
      description: "Tiến hành vệ sinh kỹ lưỡng bằng các công cụ và kỹ thuật chuyên nghiệp.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <FiClock />,
      title: "Loại bỏ cặn bẩn",
      description: "Cẩn thận làm sạch toàn bộ dư lượng dung dịch vệ sinh để hoàn thiện quá trình.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <FiSun />,
      title: "Sấy khô chuyên nghiệp",
      description: "Sử dụng phương pháp sấy khô kiểm soát để bảo vệ độ bền của chất liệu.",
      color: "from-red-500 to-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quy trình làm sạch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Quy trình vệ sinh chuyên nghiệp giúp đảm bảo sản phẩm của bạn luôn sạch đẹp và bền lâu.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredStep(index)}
              onHoverEnd={() => setHoveredStep(null)}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-[2px] bg-gradient-to-r from-white/20 to-transparent transform -translate-y-1/2 z-0" />
              )}

              <motion.div
                animate={{
                  scale: hoveredStep === index ? 1.05 : 1,
                  y: hoveredStep === index ? -5 : 0,
                }}
                className={`relative z-10 p-6 rounded-2xl bg-gradient-to-br ${step.color} 
                  backdrop-blur-lg shadow-lg transform transition-all duration-300`}
              >
                <div className="text-white text-3xl mb-4 ml-10">{step.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {step.description}
                </p>
                
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
