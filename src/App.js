import React, { useState, useEffect } from "react";
import "./App.css";
import FilterTab from "./components/FilterTab/FilterTab";
import axios from "axios";
import MainBody from "./components/SearchBody/MainBody";
import { useMediaQuery } from 'react-responsive'

function App() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [showError, setShowError] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  })

  const isTablet = useMediaQuery({ maxDeviceWidth: '1024px', minDeviceWidth: '701px' })
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 700px)'
  })

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches?limit=100")
      .then((response) => {
        setData(response.data);
        setShowData(true);
      })
      .catch((error) => setShowError(true));
  }, []);

  const updateSearchData = (val) => {
    setData(val);
  };
  return (

    
    <div className="body">
      {
        isDesktopOrLaptop &&
        <><div className="header-desktop">SpaceX Launch Programs</div>
      <div className="nav-search-desktop">
        <FilterTab device="isDesktopOrLaptop" updateSearchData={updateSearchData} />
        {showData ? (
          showError ? (
            <span>Something went wrong</span>
          ) : data.length === 0 ? (
            <span> No Record Found </span>
          ) : (
            <MainBody device="isDesktopOrLaptop" data={data} />
          )
        ) : (
          <span> Loading... </span>
        )}
      </div>
      <div className="footer-desktop">Developed by: Antara Mondal</div>
      </>
}
{
        isTablet &&
        <><div className="header-desktop">SpaceX Launch Programs</div>
      <div className="nav-search-desktop">
        <FilterTab device="isDesktopOrLaptop" updateSearchData={updateSearchData} />
        {showData ? (
          showError ? (
            <span>Something went wrong</span>
          ) : data.length === 0 ? (
            <span> No Record Found </span>
          ) : (
            <MainBody device="isTablet" data={data} />
          )
        ) : (
          <span> Loading... </span>
        )}
      </div>
      <div className="footer-desktop">Developed by: Antara Mondal</div>
      </>
}
{ isMobileDevice&&
      <>
      <div className="header">SpaceX Launch Programs</div>
      <div className="nav-search">
        <FilterTab device={"isMobileDevice"} updateSearchData={updateSearchData} />
        {showData ? (
          showError ? (
            <span>Something went wrong</span>
          ) : data.length === 0 ? (
            <span> No Record Found </span>
          ) : (
            <MainBody data={data} />
          )
        ) : (
          <span> Loading... </span>
        )}
      </div>
      <div className="footer">Developed by: Antara Mondal</div></>
      }
      
    </div>
  );
}

export default App;
