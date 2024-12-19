import React from "react";
import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/main.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/cover-women.jpg"; // Ensure the path is correct
import OrderPopup from "../components/OrderPopup/OrderPopup";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // Fetch users data
  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>

        {/* Places Section */}
        <Places handleOrderPopup={handleOrderPopup} />

        {/* Banner Image */}
        <div className="w-full my-6">
          <img
            src={BannerImg}
            alt="Banner"
            className="mx-auto w-full max-w-4xl object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Blogs Section */}
        <BlogsComp />

        {/* Another Banner Section */}
        <Banner />

        {/* Order Popup */}
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

        {/* Users Section */}
        <div className="users-section bg-gray-100 p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Users</h2>
          {loading ? (
            <p className="text-center text-blue-500">Loading users...</p>
          ) : error ? (
            <p className="text-center text-red-500">Error: {error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="p-4 bg-white border rounded-lg shadow-sm flex flex-col items-center text-center"
                >
                  {/* User Avatar */}
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={`${user.name || "User"}'s Avatar`}
                      className="w-24 h-24 object-cover rounded-full mb-4 border"
                    />
                  ) : (
                    <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-full mb-4 border">
                      <span className="text-gray-500 text-sm">No Image</span>
                    </div>
                  )}

                  {/* User Name */}
                  <p className="font-bold text-lg">{user.name || "N/A"}</p>

                  {/* User Email */}
                  <p className="text-gray-500 text-sm">{user.email || "N/A"}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
