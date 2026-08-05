import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import Footer from "../Component/Footer";

function Wishlist() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState([]);
  const [houseData, setHouseData] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentUserId = userId || localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchHouseData();
      if (currentUserId) {
        await fetchWishlist();
      }
      setLoading(false);
    };

    fetchData();
  }, [currentUserId]);

  const fetchHouseData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/houses");
      if (!res.ok) throw new Error("Failed to fetch houses");
      const data = await res.json();
      setHouseData(data);
    } catch (error) {
      console.error("Error fetching houses:", error);
    }
  };

  const fetchWishlist = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/wishlist/${currentUserId}`
      );
      if (!res.ok) throw new Error("Failed to fetch wishlist");

      const data = await res.json();
      setWishlistItems(data);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  const handleRemoveFromWishlist = async (houseId) => {
    if (!currentUserId) {
      navigate("/login");
      return;
    }

    const targetId = String(houseId);

    setWishlistItems((prev) =>
      prev.filter((item) => {
        const idToCheck =
          typeof item.houseId === "object" && item.houseId !== null
            ? String(item.houseId._id)
            : String(item.houseId || item._id || item);
        return idToCheck !== targetId;
      })
    );

    try {
      const res = await fetch(
        `http://localhost:5000/api/wishlist/${currentUserId}/${targetId}`,
        { method: "DELETE" }
      );

      if (!res.ok) {
        throw new Error("Failed to remove item");
      }
    } catch (error) {
      console.error("Wishlist operation failed:", error);
      fetchWishlist();
    }
  };

  const getWishlistHouses = () => {
    if (!wishlistItems || wishlistItems.length === 0) return [];

    return wishlistItems
      .map((wItem) => {
        if (typeof wItem.houseId === "object" && wItem.houseId !== null) {
          return wItem.houseId;
        }

        const targetId = String(wItem.houseId || wItem.id || wItem._id || wItem);
        return houseData.find(
          (h) => String(h._id || h.id) === targetId
        );
      })
      .filter(Boolean); 
  };

  const displayedHouses = getWishlistHouses();

  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] flex flex-col justify-between px-3 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6">
      <div>
        <div className="flex items-center gap-3 my-6">
          <button
            onClick={() => navigate("/")}
            className="p-2.5 bg-white border border-gray-200 rounded-full hover:bg-gray-100 transition duration-200 cursor-pointer shadow-sm"
          >
            <FaArrowLeft className="text-gray-700 text-sm" />
          </button>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            My Wishlist ❤️
          </h1>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-gray-500 font-medium animate-pulse">
              Loading your saved properties...
            </p>
          </div>
        ) : displayedHouses.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm my-6">
            <p className="text-gray-500 text-lg mb-4">
              Your wishlist is empty! 🏠
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-[#CBA358] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition duration-300 cursor-pointer"
            >
              Explore Homes
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-10">
            {displayedHouses.map((item) => {
              const currentHouseId = String(item._id || item.id);

              return (
                <div
                  key={currentHouseId}
                  className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    <img
                      src={item.image}
                      alt={item.houseName || "House"}
                      className="w-full h-36 sm:h-56 object-cover"
                    />

                    <div className="p-3 sm:p-4">
                      <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">
                        {item.houseName}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-gray-500 mb-3 leading-tight">
                        {item.description && item.description.length > 60
                          ? item.description.substring(0, 60) + "..."
                          : item.description}
                      </p>

                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[11px] sm:text-xs font-bold">
                          Rating:
                          <span className="text-[11px] sm:text-xs font-normal text-gray-600 ml-1">
                            {item.rating}
                          </span>
                        </span>
                      </div>

                      <div className="flex justify-between items-center mb-3 sm:mb-4">
                        <span className="font-bold text-gray-800 text-sm sm:text-base">
                          Price: {item.price}
                        </span>
                        <span className="text-[10px] sm:text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600">
                          {item.propertyType}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 pt-0 flex justify-between items-center">
                    <button
                      onClick={() => navigate(`/redirect/${currentHouseId}`)}
                      className="bg-[#CBA358] text-white text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-[#b8923e] transition duration-200 cursor-pointer"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => handleRemoveFromWishlist(currentHouseId)}
                      className="cursor-pointer transition-transform duration-200 active:scale-125 p-1"
                      title="Remove from wishlist"
                    >
                      <GoHeartFill className="text-red-500 text-lg hover:scale-110" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Wishlist;