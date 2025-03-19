import { motion } from "framer-motion";
import ab1 from "../assets/images/ab1.jpg";
import ab2 from "../assets/images/ab2.jpg";
import ab3 from "../assets/images/ab3.jpg";
import ab4 from "../assets/images/ab4.jpg";
import ab5 from "../assets/images/ab5.jpg";
import { useTheme } from "../components/ThemeProvider";

const AboutUsPage = () => {
  const { isDarkMode } = useTheme();

  const posts = [
    {
      title: "[PRE-ORDER]",
      subtitle: "Gây quỹ nuôi em Mộc Châu",
      image: ab1,
      alt: "Quỹ nuôi em Mộc Châu",
      link: "https://www.facebook.com/share/p/Zw8XeWHFcAZF19iB/"
    },
    {
      title: "[GÓC CHIA SẺ]",
      subtitle: "Hướng dẫn vệ sinh giày tại nhà",
      image: ab2,
      alt: "Vệ sinh giày tại nhà",
      link: "https://www.facebook.com/share/p/Sa5jZvh5gRy824u1/"
    },
    {
      title: "[GÓC CHIA SẺ]",
      subtitle: "Tại sao phải vệ sinh ở 50-Lab?",
      image: ab3,
      alt: "Tại sao phải vệ sinh ở 50-Lab",
      link: "https://www.facebook.com/share/p/PenzwQLA1YrGeDyT/"
    },
    {
      title: "[GÓC CHIA SẺ]",
      subtitle: "Giày được tạo nên từ những vật liệu nào?",
      image: ab4,
      alt: "Vật liệu của giày",
      link: "https://www.facebook.com/share/p/kqtcskwXezBhu7DE/"
    },
    {
      title: "[GÓC CHIA SẺ]",
      subtitle: "Tại sao giày bị hở keo khi lâu ngày không sử dụng?",
      image: ab5,
      alt: "Giày bị hở keo",
      link: "https://www.facebook.com/share/p/jXhjDmg12SvUrLi2/"
    }
  ];

  return (
    <div className={`min-h-screen w-full pt-20 ${
      isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 relative group"
        >
          <span className="relative inline-block">
            Về chúng tôi
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </span>
        </motion.h1>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1 
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${
                isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"
              }`}
            >
              <motion.button
                onClick={() => window.open(post.link, "_blank")}
                className="w-full text-left focus:outline-none"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative overflow-hidden">
                  <div className="relative aspect-[21/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.alt}
                      className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h2 className={`text-2xl font-bold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                      {post.title}
                    </h2>
                    <p className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {post.subtitle}
                    </p>
                  </div>
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;