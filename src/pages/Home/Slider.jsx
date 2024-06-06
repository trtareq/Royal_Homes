import img_1 from '../../assets/1.jpg';
import img_2 from '../../assets/2.jpg';
import img_3 from '../../assets/3.jpg';
import img_4 from '../../assets/4.jpg';
import img_5 from '../../assets/5.jpg';
import img_6 from '../../assets/6.jpg';
const Slider = () => {
    return (
        <div>
            <div className="carousel h-[540px]">
  <div id="item1" className="carousel-item w-full">
    <img src={img_1} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={img_2} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={img_3} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={img_4} className="w-full" />
  </div>
  <div id="item5" className="carousel-item w-full">
    <img src={img_5} className="w-full" />
  </div>
  <div id="item6" className="carousel-item w-full">
    <img src={img_6} className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn bg-lime-200 btn-xs">1</a> 
  <a href="#item2" className="btn bg-amber-200 btn-xs">2</a> 
  <a href="#item3" className="btn bg-red-200 btn-xs">3</a> 
  <a href="#item4" className="btn bg-teal-200 btn-xs">4</a>
  <a href="#item5" className="btn bg-green-200 btn-xs">5</a>
  <a href="#item6" className="btn bg-yellow-200 btn-xs">6</a>
</div>
        </div>
    );
};

export default Slider;
