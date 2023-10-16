import { useEffect, useState } from "react";
import OutTeamMemberCard from "./OutTeamMemberCard";
import image1 from '../../assets/image/image1.jpg'
import image2 from '../../assets/image/image2.jpg'
import image3 from '../../assets/image/image3.jpg'
import image4 from '../../assets/image/image4.jpg'


const OurTeamMember = () => {
    let [data,setData] = useState([])
    useEffect(()=>{
        fetch('teamMember.json')
        .then(res => res.json())
        .then(value => setData(value))
    },[])
    console.log(data);
    return (
        <div className='max-w-7xl mx-auto my-10 '>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mx-4'>
                {
                    data.map(card => <OutTeamMemberCard key={card.id} card={card}></OutTeamMemberCard>)
                }
            </div>
        </div>
    );
};

export default OurTeamMember;