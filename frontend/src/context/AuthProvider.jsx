import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import api from "../api/axios";

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser ] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get("/api/navbar", {
          withCredentials: true,
        });

        

        if (response.data.message === "User loggged In") {
          setIsAuthenticated(true);
          setUser(response.data.token)
        } else if (response.data.message === "Unauthorized") {
          setIsAuthenticated(false);
        } else if (response.data.message === "Token expired") {
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

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loading, setIsAuthenticated, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
