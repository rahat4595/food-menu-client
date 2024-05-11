import { Swiper, SwiperSlide } from 'swiper/react';

import '../../../../node_modules/swiper/swiper-bundle.min.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import slider1 from '../../../assets/slider-1.png';
import slider2 from '../../../assets/slider-4.jpg';
import slider3 from '../../../assets/slider-5.jpg';
import { Typewriter } from 'react-simple-typewriter';


const Banner = () => {

  return (
    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      speed={1200}
      loop={true}
      pagination={{ clickable: true }}

    >

      <SwiperSlide>

        <div className='bg-no-repeat w-full  bg-center bg-cover h-[550px] flex justify-center items-center' style={
          {
            backgroundImage: `url(${slider1})`,
          }
        }>
          <div className='text-center bg-gray-700 h-full w-full bg-opacity-30 flex justify-center items-center'>
            <div className='mt-12 space-y-4'>

              <h1 className='text-xl md:text-6xl font-bold text-white'>YOUR ULTIMATE SPOT <br /> FOR CREATIVE{' '}<Typewriter
                words={['CREATION', 'INSPIRATION', 'EXPRESSION']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1200}
              /></h1>

              <div>
                <p className=' lg:text-xl font-semibold  text-white'>Discover the beauty of handmade craftsmanship with our curated selection of unique and inspiring creations.</p>
              </div>

              <button className="text-xl font-semibold px-5 py-2 bg-black text-white rounded-md mt-10 relative overflow-hidden group">
                <span className="absolute inset-0 bg-[#23BE0A] duration-300 transition-transform group-hover:translate-x-full"></span>
                <span className="relative z-10">Explore</span>
              </button>

            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>

        <div className='bg-no-repeat w-full bg-center  bg-cover h-[550px] flex justify-center items-center' style={
          {
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.23), rgba(0,0,0,0.23)), url(${slider2})`,
          }
        }>
          <div className='text-center bg-gray-700 h-full w-full bg-opacity-30 flex justify-center items-center'>
            <div className='mt-12 space-y-4'>

              <h1 className='text-xl md:text-6xl font-bold text-white'>YOUR ULTIMATE SPOT <br /> FOR CREATIVE{' '}<Typewriter
                words={['CREATION', 'INSPIRATION', 'EXPRESSION']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1200}
              /></h1>

              <div>
                <p className='lg:text-xl font-semibold  text-white'>Explore the allure of artisanal craftsmanship with our thoughtfully curated assortment of one-of-a-kind and inspiring creations</p>
              </div>

              <button className="text-xl font-semibold px-5 py-2 bg-black text-white rounded-md mt-10 relative overflow-hidden group">
                <span className="absolute inset-0 bg-[#23BE0A] duration-300 transition-transform group-hover:translate-x-full"></span>
                <span className="relative z-10">Explore</span>
              </button>

            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>

        <div className='bg-no-repeat w-full bg-center bg-cover h-[550px] flex justify-center items-center' style={
          {
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.23), rgba(0,0,0,0.23)), url(${slider3})`,
          }
        }>
          <div className='text-center bg-gray-700 h-full w-full bg-opacity-30 flex justify-center items-center'>
            <div className='mt-12 space-y-4'>

              <h1 className='text-xl md:text-6xl font-bold text-white'>YOUR ULTIMATE SPOT <br /> FOR CREATIVE{' '}<Typewriter
                words={['CREATION', 'INSPIRATION', 'EXPRESSION']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1200}
              /></h1>

              <div>
                <p className='lg:text-xl font-semibold  text-white'>
                  Explore the allure of artisanal craftsmanship with our handpicked array of distinctive and captivating arts.</p>
              </div>

              <button className="text-xl font-semibold px-5 py-2 bg-black text-white rounded-md mt-10 relative overflow-hidden group">
                <span className="absolute inset-0 bg-[#23BE0A] duration-300 transition-transform group-hover:translate-x-full"></span>
                <span className="relative z-10">Explore</span>
              </button>

            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;