import profile from "../Assets/profile.jpg";
import addline from "../Assets/addline.jpg"
import mobile from "../Assets/mobile.jpg"

const Body = () => {
  return (
    <div className=" bg-blue-200 px-8 py-4">
      <div className="flex gap-4 border border-green-950  bg-blue-800">
        <div className="box1 w-1/4 flex flex-col gap-2">
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
        <div className="box2 w-3/4 flex flex-col gap-3">
          <div>
            <div>
                <text>My Reviews</text>
            </div>
            <div className="flex">
                <img src={addline} alt="addline"/>
                <input type="text" placeholder="text"></input>
            </div>
          </div>
          <div>
            <div>
                <img src={mobile} alt="mobile"/>
            </div>
            <div>
              <div>
                <text>OOPS!!</text>
                <p>YOU HAVE NOT RATED ANYTHING YET</p>
              </div>
              <div>
                <button>Browse now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
