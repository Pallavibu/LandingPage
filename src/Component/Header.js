import logo from "../Assets/logo.jpg";
import vector from "../Assets/Vector.jpg";
import Mask from "../Assets/Mask.jpg";
import down from "../Assets/down.jpg";
import cart from "../Assets/cart.jpg";

const Header = () => {
  return (
    <div className="w-full h-28">
      <div className="h-12 my-4 mx-14 flex gap-10 ">
        <div>
          <img src={logo} alt="logo" className="w-36" />
        </div>
        <div className="flex justify-between h-12  border border-gray-300 rounded-sm w-3/4 ">
          <div className="text-gray-400 my-3 ml-4">
            <p className="h-3">Search for products, Brands, Markets & more</p>
          </div>
          <div className="my-4  mr-4">
            <img src={vector} alt="search" />
          </div>
        </div>
        <div className="flex w-32 h-5 my-3 gap-2">
          <div>
            <img src={Mask} alt="mask" />
          </div>
          <div>
            <p>Jagannat</p>
          </div>
          <div className="mt-3">
            <img src={down} alt="" />
          </div>
        </div>
        <div className="flex w-24 h-5 my-3 gap-2">
          <div>
            <img src={cart} alt="cart" />
          </div>
          <div>
            <p>cart</p>
          </div>
        </div>
      </div>
      <div className="flex border border-gray-300">
        <div className="h-14 py-4 px-6">
          <p className="text-black font-medium">Mobile & Tablets</p>
        </div>
        <div className="h-12 py-4 px-6">
          <p className="text-black font-medium">Electrical & Electronics</p>
        </div>
        <div className="h-12 py-4 px-6">
          <p className="text-black font-medium">Grocery</p>
        </div>
        <div className="h-12 py-4 px-6">
          <p className="text-black font-medium">TV & Appliances</p>
        </div>
        <div className="h-12 py-4 px-6">
          <p className="text-black font-medium">Fashion</p>
        </div>
        <div className="h-12 py-4 px-6">
          <p className="text-black font-medium">Home & Kitchen</p>
        </div>
        <div className="h-12 py-4 px-6">
          <p className="text-black font-medium">Furniture</p>
        </div>
        <div className="h-12 py-4 px-6">
          <p className="text-black font-medium">Grocery</p>
        </div>
        <div className="h-12 py-4 px-6">
          <p className="text-black font-medium">Grocery</p>
        </div>
        <div className="h-12 py-4 px-6">
          <p className="text-black font-medium">Grocery</p>
        </div>
        <div className="h-12 py-4 px-6">
          <p className="text-black font-medium">Top Saving Offers</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
