import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const SingleService = ({ dataValue }) => {
    // console.log(dataValue);
    return (
        <div>

            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={dataValue.image} className='w-full h-72' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{dataValue.name}</h2>
                    <p className='text-2xl font-medium'>${dataValue.price}</p>
                    <p>{dataValue.short_description}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/service/${dataValue.id}`} className="btn btn-neutral">Show Details</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleService;

SingleService.propTypes = {
    dataValue: PropTypes.object
}