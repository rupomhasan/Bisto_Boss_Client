import ServiceCard from "../../../../Components/Shared/ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const OrderTab = ({ data }) => {
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // };
  // console.log(pagination);
  const totalPage = Math.ceil(data?.length / 6); // itemPerPage(6)
  console.log(totalPage);

  return (
    <div className="">
      <Swiper
      // pagination={pagination}
      // modules={[Pagination]}
      // className="mySwiper"
      >
        {Array(totalPage)
          .fill(0)
          .map((item, idx) => {
            return (
              <button className="btn" key={idx}>
                {idx + 1}
              </button>
            );
          })}
      </Swiper>
    </div>
  );
};
{
  /* <SwiperSlide key={idx}>
                <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-3 mx-5 ">
                  {data?.map((item, idx) => (
                    <ServiceCard key={idx} item={item}></ServiceCard>
                  ))}
                </div>
              </SwiperSlide> */
}
