
const OutTeamMemberCard = ({ card }) => {
    console.log(card);
    let {image,name,short_description,work} = card
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={image} className="h-72 w-full" alt="Shoes" /></figure>
                <div className="card-body text-center my-3">
                    <h2 className=" font-semibold text-3xl" >{name}</h2>
                    <div className="h-1 bg-red-500 w-14 mx-auto"></div>
                    <p className="font-medium ">{work}</p>
                    <p>{short_description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default OutTeamMemberCard;