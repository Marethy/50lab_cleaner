import React from "react";
import ab1 from "../assets/images/ab1.jpg";
import ab2 from "../assets/images/ab2.jpg";
import ab3 from "../assets/images/ab3.jpg";
import ab4 from "../assets/images/ab4.jpg";
import ab5 from "../assets/images/ab5.jpg";

const AboutUsPage = () => {
  return (
    <div className=" flex flex-col text-black bg-gray-200 items-center p-10 gap-10   ">
      <h1 className="text-3xl font-bold text-center">Về chúng tôi</h1>

      <div className="flex flex-col items-center gap-10   ">
        <div>
          <button
            className="border p-10 bg-white  flex flex-col items-center rounded-lg space-y-4 cursor-pointer   "
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
              className="w-40 h-auto md:w-[500px] md:h-auto"
            />
          </button>
        </div>
        <div>
          <button
            className="border p-10 bg-white  flex flex-col items-center rounded-lg space-y-4 cursor-pointer "
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
              src={ab2}
              alt="Vệ sinh giày tại nhà"
              className="w-40 h-auto md:w-[500px] md:h-auto"
            />
          </button>
        </div>
        <div>
          <button
            className="border p-10 bg-white flex flex-col items-center space-y-4 rounded-lg cursor-pointer"
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
              src={ab3}
              alt="Quỹ nuôi em Mộc Châu"
              className="w-40 h-auto md:w-[500px] md:h-auto"
            />
          </button>
        </div>
        <div>
          <button
            className="border p-10 bg-white flex flex-col items-center space-y-4 rounded-lg cursor-pointer"
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
              src={ab4}
              alt="Quỹ nuôi em Mộc Châu"
              className="w-40 h-auto md:w-[500px] md:h-auto"
            />
          </button>
        </div>
        <div>
          <button
            className="border p-10 bg-white flex flex-col items-center space-y-4 rounded-lg cursor-pointer"
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
              src={ab5}
              alt="Quỹ nuôi em Mộc Châu"
              className="w-40 h-auto md:w-[500px] md:h-auto"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
