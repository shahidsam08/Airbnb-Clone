import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import api from "../api/axios";
import { toast } from "react-toastify";

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get("/api/navbar", {
          withCredentials: true,
        });

        console.log(response.data.userdata);
        if (response.data.message === "User loggged In") {
          setIsAuthenticated(true);

          setUser(response.data.userdata);
        } else if (response.data.message === "Unauthorized") {
          setIsAuthenticated(false);
        } else if (response.data.message === "Token expired") {
          setIsAuthenticated(false);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  //  logout logics
  const logout = async () => {
    try {
      const response = await api.get("/api/logout", { withCredentials: true });

      if (response.data.message === "Logged out successfully") {
        toast.success("Log Out successfully");
        setTimeout(() => {
          window.location.reload();
        }, 6000);
      } else if (response.data.message === "User not found") {
        toast.error("User not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loading, setIsAuthenticated, user, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
