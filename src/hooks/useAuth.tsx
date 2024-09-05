import { useEffect, useState } from "react";
import { getCookie, removeCookie } from "react-use-cookie";

export const useAuth = () => {
  const token = getCookie("token");

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      setLoading(true);
      try {
        fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to fetch user data");
            }
            return res.json();
          })
          .then((data) => {
            setUser(data);
            setLoading(false);
          })
          .catch(() => {
            setUser(null);
            setLoading(false);
            removeCookie("token");
          });
      } catch (e) {
        setUser(null);
        setLoading(false);
        removeCookie("token");
      }
    }
  }, [token]);

  return { user, loading, setUser, token };
};
