import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    let data = useLoaderData()
    console.log(data);

    let { id } = useParams()

    let dataDetails = data.find(e => e.id == id)
    console.log(dataDetails);
    return (
        <div className="max-w-7xl mx-auto mt-10">
            <hr className="mb-7"></hr>
            <div className="flex gap-5 items-center justify-center">
                <img src={dataDetails.image} className=" w-full h-96 rounded-lg  " alt="" />
               <div className=" ">
               <h2 className=" text-4xl font-semibold ">{dataDetails.name}</h2>
               <div className="h-1 bg-red-500 w-14 mt-5"></div>
               <h2 className="text-2xl text-gray-600 mt-3">{dataDetails.short_description}</h2>
               </div>
            </div>
            <hr className="mt-7"></hr>
        </div>
    );
};

export default ServiceDetails;