import React from 'react'
import { useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import HeaderCommon from '../components/HeaderCommon';

function HostingPage() {
  const { isAuthenticated, loading, setIsAuthenticated, user } =
    useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/", { replace: true });
    }
  });
  return (
    <div>
      <HeaderCommon />

      <form action="" method="post">
        <label htmlFor="PhotoUrl">Image URL</label>
        <input type="text" name="image" id="PhotoUrl" placeholder='Enter the Image URL' />
      </form>
    </div>
  )
}

export default HostingPage
