import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const HouseCard = ({ house }) => {
    const { estate_title, image,description,id } = house;
    return (
        <div className="card bg-base-100 shadow-xl mb-16">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>

                {
                  <p>{description} <Link
                            to={`/house/${id}`}
                            className="text-blue-600 font-bold">Show Details...</Link></p>
                        
                }


            </div>
        </div>
    );
};

HouseCard.propTypes = {
    house: PropTypes.object
};


export default HouseCard;