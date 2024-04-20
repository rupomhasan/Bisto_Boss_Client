import { useEffect, useState } from "react";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Rating from "react-rating";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
console.log(review);
  return (
    <div>
      <SectionTitle subheading="What Our Clients Say" heading="Testimonials" />
      <div className="max-w-screen-md mx-auto">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="text-center mb-8">
                <Rating
                  readonly
                  initialRating={item.rating}
                  fullSymbol={<FaStar className="text-4xl text-yellow-500" />}
                  emptySymbol={
                    <FaRegStar className="text-4xl text-yellow-500" />
                  }
                />
                <div className="flex justify-center my-6">
                  <FaQuoteLeft className="text-8xl" />
                </div>
              </div>

              <div className="mx-20 text-center">
                <p className="text-lg font-bold my-2">{item.details}</p>
                <p className="text-5xl font-bold text-yellow-600">
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
