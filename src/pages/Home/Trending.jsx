import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Trending = () => {
    return (
        <div className="flex">
            <button className="btn btn-error font-bold text-xl text-white">Trending..</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12 bg-teal-200 rounded p-2" to="/">Virtual Tours and Open Houses: Offer free virtual tours and open houses for all listed properties......</Link>
                <Link className="mr-12  bg-yellow-100 rounded p-2" to="/">Discounted Closing Costs: Provide discounts on closing costs for a limited time or for first-time home buyers......</Link>
                <Link className="mr-12  bg-green-100 rounded p-2" to="/">Zero Down Payment Programs: Assist with zero down payment financing options......</Link>
            </Marquee>
        </div>
    );
};

export default Trending;