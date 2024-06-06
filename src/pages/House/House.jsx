import { Link, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";

const House = () => {
    const house = useLoaderData();
    console.log(house);
    const {id} = useParams();
    console.log(id);
    const idInt = parseInt(id);
    console.log(idInt);

    const house_details = house.find(house => house.id === idInt);
    console.log(house_details);

    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-6">
                <div className="card md:col-span-5 gap-5 mt-5 p-2 card-side bg-base-100">
        <figure className="rounded-xl "><img src={house_details.image} alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title text-4xl font-bold">{house_details.estate_title}</h2>
            <p className="border-b-2"> Types : {house_details.segment_name}</p>
            <p><span className="font-bold">Description : </span>{house_details.description}</p>
            <p className="border-b-2 font-semibold">{house_details.location}</p>
            <ul className="flex gap-2 font-semibold ">
                    {
                    house_details.facilities.map((facility, idx) => (
                        <li className="btn btn-outline rounded-xl p-2" key={idx}>{facility}</li>
                        ))
                    }
            </ul>
            
            <div className="grid grid-cols-2">
                <p>Price :</p>
                <p className="font-bold">{house_details?.price?.amount}</p>
                <p>Duration :</p>
                <p className="font-bold">{house_details?.price?.duration}</p>
                <p >Area : </p>
                <p className="font-bold">{house_details.area}</p>
                <p >Status : </p>
                <p className="font-bold">{house_details.status}</p>
                <p>More view to Visit : </p>
                <Link to={house_details.view_property_url} className="font-bold text-red-500">Click Here..</Link>
            </div>
            

            <div className="card-actions">
            <button  className="btn hover:bg-red-100 rounded-xl btn-primary text-black bg-[#FFFFFF]">Rent Now</button>
            
            </div>
        </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default House;