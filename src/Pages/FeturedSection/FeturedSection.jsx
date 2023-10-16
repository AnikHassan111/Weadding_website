
const FeturedSection = () => {
    return (
        <div className="h-56 bg-slate-700 my-5 flex items-center justify-center ">
            <div className="md:flex justify-between lg:gap-48 md:gap-10 grid grid-cols-2 gap-10 text-white">
                <div className="text-center ">
                    <h2 className="font-bold lg:text-5xl text-3xl" >320</h2>
                    <h2 className="font-medium lg:text-2xl text-xl">Featured Event</h2>
                </div>
                <div className="text-center">
                    <h2 className="font-bold lg:text-5xl text-3xl">156</h2>
                    <h2 className="font-medium lg:text-2xl text-xl">Loyal Customer</h2>
                </div>
                <div className="text-center">
                    <h2 className="font-bold lg:text-5xl text-3xl">320</h2>
                    <h2 className="font-medium lg:text-2xl text-xl">Good Moments</h2>
                </div>
                <div className="text-center">
                    <h2 className="font-bold lg:text-5xl text-3xl">167</h2>
                    <h2 className="font-medium lg:text-2xl text-xl">Trophies Won</h2>
                </div>
            </div>
        </div>
    );
};

export default FeturedSection;