import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';

const CardInfoSwiper = ({ width }) => {
    const [loading, setLoading] = useState(false);
    const [card, setCard] = useState([]);
    const [mainImage, setMainImage] = useState("/card-info-images/card-info-swiper-main.png"); // Default main image

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

    const handleSlideClick = (image) => {
        setMainImage(image);
    };

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
                    <SwiperSlide key={id} onClick={() => handleSlideClick(slide.image)}>
                        <div className='flex size-[237px]'>
                            <img src={slide.image} alt='swiper-img' className="w-full cursor-pointer" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <img className="main w-full h-full" src={mainImage} alt="main-img" />
        </div>
    );
}

export default CardInfoSwiper;
