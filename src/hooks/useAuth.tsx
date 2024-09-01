import { useEffect, useState } from "react";
import { getCookie } from "react-use-cookie";

let authState: any = null;
let authLoading = false;

export const useAuth = () => {
  const token = getCookie("token");

  const [user, setUser] = useState(authState);
  const [loading, setLoading] = useState(authLoading);

  useEffect(() => {
    if (token) {
      setLoading(true);
      authLoading = true;

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
          authState = data;
          setUser(data);
          setLoading(false);
          authLoading = false;
        })
        .catch(() => {
          authState = null;
          setUser(null);
          setLoading(false);
          authLoading = false;
        });
    }
  }, [token]);

  return { user, loading, setUser };
};
