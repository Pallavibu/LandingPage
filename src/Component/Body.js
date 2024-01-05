import profile from "../Assets/profile.jpg";
import addline from "../Assets/addline.jpg";
import mobile from "../Assets/mobile.jpg";

const Body = () => {
  return (
    <div className=" bg-blue-200 px-8 py-4">
      <div className="flex gap-1 ">
        <div className="box1 w-1/4 flex flex-col gap-1">
          <div className="flex h-28  rounded-md w-80 bg-gradient-to-r from-blue-200 via-orange-100 to-orange-200">
            <div className="h-12">
              <img src={profile} alt="profile" className="ml-5 mt-6" />
            </div>
            <div className="m-5">
              <div>
                <text className="text-base">Hello</text>
              </div>
              <div>
                <text className="text-xl font-extrabold">Jagannath S</text>
              </div>
            </div>
          </div>
          <div className="bg-white w-80 rounded-md p-2 text-base font-medium">
            <div className="m-2 my-3">
              <p>Profile</p>
            </div>
            <div className="ml-6 my-5 flex flex-col gap-3">
              <p>Personal Information</p>
              <p>Manage Addresses</p>
              <p>Payment Card Information</p>
              <p>All Notifications</p>
            </div>
          </div>
          <div className="bg-white w-80 rounded-md p-2 text-base font-medium">
            <div className="m-2 my-3">
              <p>My Orders</p>
            </div>
            <div className="ml-6 my-5 flex flex-col gap-3">
              <p>All Orders</p>
              <p>My Wishlist</p>
              <p>My Reviews</p>
              <p>Saved For Later</p>
            </div>
          </div>
        </div>
        <div className="box2 w-3/4 flex flex-col gap-3 bg-white rounded-md">
          <div className="flex justify-between mx-8 mt-6">
            <div className="">
              <text className="text-2xl font-semibold">My Reviews</text>
            </div>
            <div className="flex">
              <img src={addline} alt="addline" />
            </div>
          </div>
          <div className="flex flex-col mt-16 items-center justify-center">
            <div className="">
              <img src={mobile} alt="mobile" />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <div className="m-2 mt-4">
                  <p className="text-2xl font-bold">OPPS!!</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">YOU'VE NOT RATED ANYTHING YET</p>
                </div>
              </div>
              <div className="m-4 border-2 border-blue-900 bg-blue-200 rounded-full">
                <button className="mx-5 my-2 text-blue-900 font-medium">Browse now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
