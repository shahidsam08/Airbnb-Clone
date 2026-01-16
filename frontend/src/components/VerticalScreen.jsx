import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function ScrollWatcher() {
  const [show, setShow] = useState(false);

  const { isAuthenticated, loading, setIsAuthenticated, user } = useContext(AuthContext);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      const scrollPercent =
        (scrollTop / (documentHeight - windowHeight)) * 100;

      if (scrollPercent >= 50 && !isAuthenticated) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {show && (
        <Link to="/login" className="fixed bottom-5 right-5 bg-[#e01735] text-white px-8 py-3 rounded">
          <p>Login</p>
        </Link>
      )}
      
    </>
  );
}

export default ScrollWatcher;
