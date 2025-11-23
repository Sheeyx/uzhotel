import React from "react";
import Slider from "react-slick";
import { FaUserFriends, FaBed } from "react-icons/fa";
import { MdOutlineSquareFoot } from "react-icons/md";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import type { Room } from "../data/rooms";

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition p-2"
    >
      <IoChevronForward className="text-gray-700" size={20} />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition p-2"
    >
      <IoChevronBack className="text-gray-700" size={20} />
    </button>
  );
}

export default function RoomCard({ room }: { room: Room }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    // ⭐ Dots OUTSIDE the image (beautiful & centered)
    appendDots: (dots:any) => (
      <div className="pt-3">
        <ul className="flex justify-center items-center gap-2">{dots}</ul>
      </div>
    ),

    customPaging: () => (
      <div
        className="
          h-3 w-3 rounded-full 
          bg-gray-300 
          hover:bg-gray-500
          transition-all duration-300
        "
      />
    ),
  };

return (
    <article className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 overflow-hidden hover:shadow-md transition">
      {/* Slider */}
      <div className="relative bg-white p-3 pb-0">
        <div className="overflow-hidden rounded-xl mx-auto relative w-full h-[220px] sm:h-[240px]">
          <Slider {...settings}>
            {room.images.map((img, i) => (
              <div key={i} className="relative">
                <img
                  src={img}
                  alt={`${room.title} photo ${i + 1}`}
                  loading="lazy"
                  className="w-full h-[220px] sm:h-[240px] object-cover rounded-xl"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Text */}
      <div className="p-5 space-y-3 border-t border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">{room.title}</h3>

        <div className="flex items-center gap-5 text-gray-600 text-sm">
          <div className="flex items-center gap-1.5">
            <FaUserFriends className="text-gray-500" size={16} />
            <span>{room.capacity}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MdOutlineSquareFoot className="text-gray-500" size={16} />
            <span>{room.size}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaBed className="text-gray-500" size={16} />
            <span>{room.rooms}</span>
          </div>
        </div>

        <div className="pt-2 text-base md:text-lg font-bold text-gray-900">
          {room.price.toLocaleString("uz-UZ")} so’m
        </div>
      </div>
    </article>
  );
}