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
      className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 shadow-md hover:bg-white transition p-1"
    >
      <IoChevronForward className="text-gray-700" size={18} />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 shadow-md hover:bg-white transition p-1"
    >
      <IoChevronBack className="text-gray-700" size={18} />
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
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute w-full flex justify-center">{dots}</div>
    ),
    customPaging: () => (
      <div className="h-2 w-2 rounded-full bg-gray-300 hover:bg-gray-500 transition-all mt-[8px]" />
    ),
  };

  return (
    <article className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 overflow-hidden hover:shadow-md transition">
      {/* Slider */}
      <div className="relative bg-white p-3 pb-0">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
          <Slider {...settings}>
            {room.images.map((img, i) => (
              <div key={i} className="relative h-full w-full">
                <img
                  src={img}
                  alt={`${room.title} photo ${i + 1}`}
                  className="h-full w-full object-cover rounded-xl"
                  loading="lazy"
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
            <FaUserFriends className="text-gray-500" size={15} />
            <span>{room.capacity}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MdOutlineSquareFoot className="text-gray-500" size={15} />
            <span>{room.size}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaBed className="text-gray-500" size={15} />
            <span>{room.rooms}</span>
          </div>
        </div>

        <div className="pt-2 text-base md:text-lg font-bold tracking-tight text-gray-900">
          {room.price.toLocaleString("uz-UZ")} so’m
        </div>
      </div>
    </article>
  );
}
