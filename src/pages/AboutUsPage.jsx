import React from "react";
import ab1 from "../assets/images/ab1.jpg";

const AboutUsPage = () => {
  return (
    <div
      id="about-us"
      className="text-black bg-gray-200 min-h-screen mx-auto px-4 md:px-24 py-20"
    >
      <div className="text-center text-2xl font-bold mb-6 text-black p-10">
        VỀ CHÚNG TÔI
      </div>
      <div className="items-center flex flex-col">
        <div>
          <button
            className="border p-10 bg-white mb-10 flex flex-col items-center space-y-4 rounded-lg cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.facebook.com/share/p/Zw8XeWHFcAZF19iB/",
                "_blank"
              )
            }
          >
            <div>
              <h1 className="font-bold"> [PRE-ORDER] </h1>
              <p> Gây quỹ nuôi em Mộc Châu</p>
            </div>
            <img
              src={ab1}
              alt="Quỹ nuôi em Mộc Châu"
              className="w-40 h-auto md:w-80 md:h-auto items-end"
            />
          </button>
        </div>
        <div>
          <button
            className="border p-10 bg-white mb-10 flex flex-col items-center rounded-lg space-y-4 cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.facebook.com/share/p/Sa5jZvh5gRy824u1/",
                "_blank"
              )
            }
          >
            <div>
              <h1 className="font-bold"> [GÓC CHIA SẺ] </h1>
              <p>Hướng dẫn vệ sinh giày tại nhà</p>
            </div>
            <img
              src={ab1}
              alt="Vệ sinh giày tại nhà"
              className="w-40 h-auto md:w-80 md:h-auto items-end"
            />
          </button>
        </div>
        <div>
          <button
            className="border p-10 bg-white mb-10 flex flex-col items-center space-y-4 rounded-lg cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.facebook.com/share/p/PenzwQLA1YrGeDyT/",
                "_blank"
              )
            }
          >
            <div>
              <h1 className="font-bold"> [GÓC CHIA SẺ] </h1>
              <p> Tại sao phải vệ sinh ở 50-Lab?</p>
            </div>
            <img
              src={ab1}
              alt="Quỹ nuôi em Mộc Châu"
              className="w-40 h-auto md:w-80 md:h-auto items-end"
            />
          </button>
        </div>
        <div>
          <button
            className="border p-10 bg-white mb-10 flex flex-col items-center space-y-4 rounded-lg cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.facebook.com/share/p/kqtcskwXezBhu7DE/",
                "_blank"
              )
            }
          >
            <div>
              <h1 className="font-bold"> [GÓC CHIA SẺ] </h1>
              <p>Giày được tạo nên từ những vật liệu nào?</p>
            </div>
            <img
              src={ab1}
              alt="Quỹ nuôi em Mộc Châu"
              className="w-40 h-auto md:w-80 md:h-auto items-end"
            />
          </button>
        </div>
        <div>
          <button
            className="border p-10 bg-white mb-10 flex flex-col items-center space-y-4 rounded-lg cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.facebook.com/share/p/jXhjDmg12SvUrLi2/",
                "_blank"
              )
            }
          >
            <div>
              <h1 className="font-bold"> [GÓC CHIA SẺ] </h1>
              <p> Tại sao giày bị hở keo khi lâu ngày không sử dụng?</p>
            </div>
            <img
              src={ab1}
              alt="Quỹ nuôi em Mộc Châu"
              className="w-40 h-auto md:w-80 md:h-auto items-end"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
