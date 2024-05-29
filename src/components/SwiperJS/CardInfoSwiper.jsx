import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const CardInfoSwiper = ({ width }) => {

    const [loading, setLoading] = useState(false);
    const [card, setCard] = useState([]);

    useEffect(() => {
        async function CardData() {
            try {
                let request = await fetch(
                    "https://6651e1d520f4f4c44279069b.mockapi.io/api/v1/Cards"
                );
                let response = await request.json();
                setCard(response);
                setLoading(true);
                console.log(response);
            } catch (error) {
                console.log("Error is caught");
                setLoading(true);
            }
        }
        CardData();
    }, []);

  return (
    <div className="flex items-center justify-center h-[474px]" style={{ width }}>
      <Swiper
        direction={'vertical'}
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {card.map((slide, id) => (
          <SwiperSlide>
            <div key={id} className='flex size-[237px]'>
              <img src={slide.image} alt='swiper-img' className="w-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <img src="/card-info-images/card-info-swiper-main.png" alt="" />
    </div>
  );
}

export default CardInfoSwiper





// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';


// // import required modules
// import { Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         direction={'vertical'}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
