import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

const CardInfoSwiper = (props) => {
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
        <>
            <Swiper
                slidesPerView={2}
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    loading
                        ? card.map((item, id) => (
                            <SwiperSlide key={id}>
                                <img src={item.image} alt={`Card image ${id}`} />
                            </SwiperSlide>
                        ))
                        : <span className="loading loading-ring loading-lg"></span>
                }
            </Swiper>
        </>
    );
}
export default CardInfoSwiper;
