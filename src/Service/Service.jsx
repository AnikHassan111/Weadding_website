import { useEffect, useState } from "react";
import SingleService from "./SingleService";

const Service = () => {
    let [WeddingsService, setWeddingsService] = useState([])
    useEffect(() => {
        fetch('weaddingService.json')
            .then(res => res.json())
            .then(value => setWeddingsService(value))
    }, [])
    return (
        <div className="mx-4">
            <h2 className="text-5xl text-center font-semibold">Our Services</h2>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-4">
                {
                    WeddingsService.map(data => <SingleService key={data.id} dataValue={data}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Service;