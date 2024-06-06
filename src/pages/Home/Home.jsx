import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Trending from "./Trending";
import Slider from "./Slider";
import Footer from "../Footer/Footer";
import HouseCard from "./HouseCard";
import Apartment from "./Apartment";



const Home = () => {
    const residential = useLoaderData();
    // console.log(residential)
    return (
        <div>
            <div className="grid grid-cols-6 mb-5">
               <div className="col-span-2"><Header ></Header></div>
               <div className="col-span-4"> <Navbar ></Navbar></div>
              
            </div>
            <Slider></Slider>
            <Trending></Trending>
            <Apartment></Apartment>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
                
                
                <div className="md:col-span-3">
                    {
                        residential.map((house,idx) => <HouseCard
                            key={idx}
                            house={house}
                            ></HouseCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;