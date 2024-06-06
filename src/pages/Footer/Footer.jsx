import { FaLaptopHouse } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <footer className="footer p-10 bg-black text-white ">
        <aside>
          <svg width="100" height="100"  fillRule="evenodd" clipRule="evenodd" className="fill-current text-7xl "><FaLaptopHouse /></svg>
          <p><span className="text-[#FF0000]">Royal <span >Homes</span></span> Ltd.<br/>Providing reliable Home since 2000</p>
        </aside> 
        <nav>
          <h6 className="footer-title">Services</h6> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Company</h6> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Legal</h6> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="footer footer-center p-4  bg-black text-white">
         <aside>
              <p>Copyright © 2024 - All right reserved by <span className="text-[#FF0000]">Royal <span >Homes</span></span> Ltd</p>
         </aside>
        </div>
      </>
    );
};

export default Footer;