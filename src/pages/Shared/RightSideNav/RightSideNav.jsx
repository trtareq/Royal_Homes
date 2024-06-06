import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/7.jpg';
import qZone2 from '../../../assets/8.png';
import qZone3 from '../../../assets/9.jpg';


const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 mb-6'>
                <h2 className="text-3xl mb-4">Find Us on</h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex text-lg items-center border-x' href="">
                    <FaTwitter className='mr-2'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg' href="">
                    <FaInstagram className='mr-2'></FaInstagram>
                    <span>Facebook</span>
                </a>
            </div>
            {/* q zone */}
            <div className='p-4 space-y-3 mb-6'>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;