import bannerImage from '../assets/image/BannerImage.jpg'


const Banner = () => {

    return (
        <div>
            <div className="lg:h-96 md:h-80 relative overflow-hidden bg-black my-5 text-center">
            <img src={bannerImage} className='opacity-40 h-full lg:h-auto w-full ' alt="" />
            <div className='absolute md:top-1/3 top-1/4 lg:left-1/3 left-5 md:left-32'>
                <p className=' lg:text-4xl text-3xl  font-semibold text-white'>Plan your Weddings Celebration with us! </p>
                <p className=' text-1xl mt-7 text-gray-200'>We will distribute FREE GIFTS to every single Person - Thats Our Promise</p>
            </div>
        </div>
        </div>
    );
};

export default Banner;