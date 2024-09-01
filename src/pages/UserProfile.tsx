import { useEffect, useState } from "react";
import { getCookie, removeCookie } from "react-use-cookie";

import { Button } from "@/components/atoms/button";

const UserProfile = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Fetching user data from the API
    fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getCookie("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user data:", err));
  }, []);

  const logout = () => {
    // Clearing the token cookie
    removeCookie("token");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      {/* Header */}
      <header className="bg-black bg-opacity-75 px-8 py-4">
        <h1 className="text-3xl font-bold">User Profile</h1>
      </header>

      {!user && (
        <div className="flex items-center justify-center p-10">Loading...</div>
      )}

      {/* Profile Section */}
      {user && (
        <div className="flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl rounded-lg bg-black p-8 text-gray-800 shadow-lg">
            {/* Profile Image */}
            <div className="-mt-24 flex justify-center">
              <img
                src={user.image}
                alt="Profile"
                className="h-40 w-40 rounded-full border-4 border-white object-cover"
              />
            </div>

            {/* User Information */}
            <div className="mt-6 text-center">
              <h2 className="text-3xl font-bold text-white">
                {user.firstName} {user.lastName}
              </h2>

              <p className="text-white">{user.username}</p>
              <div className="mt-2 flex justify-center space-x-4">
                <span className="rounded-full bg-blue-500 px-4 py-2 text-sm text-white">
                  Age: {user.age}
                </span>
                <span className="rounded-full bg-blue-500 px-4 py-2 text-sm text-white">
                  Gender: {user.gender}
                </span>
              </div>
            </div>

            {/* About Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-sky-400">About</h3>
              <p className="mt-2 text-white">
                {user.about ||
                  "Passionate software engineer with a focus on creating scalable web applications. Specializes in front-end development using React and Tailwind CSS."}
              </p>
            </div>

            {/* Contact Information */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-sky-400">
                  Contact Information
                </h3>
                <p className="mt-2 text-white">Email: {user.email}</p>
                <p className="text-white">
                  Phone: {user.phone || "Not available"}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-sky-400">Location</h3>
                <p className="mt-2 text-white">
                  {user.address?.city}, {user.address?.state}
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex justify-center space-x-4">
              {user.socialLinks?.facebook && (
                <a href={user.socialLinks.facebook} className="text-blue-500">
                  <i className="fab fa-facebook-f"></i>
                </a>
              )}
              {user.socialLinks?.twitter && (
                <a href={user.socialLinks.twitter} className="text-blue-400">
                  <i className="fab fa-twitter"></i>
                </a>
              )}
              {user.socialLinks?.instagram && (
                <a href={user.socialLinks.instagram} className="text-pink-600">
                  <i className="fab fa-instagram"></i>
                </a>
              )}
            </div>
            <Button onClick={logout} variant={"destructive"}>
              Logout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
