import React, { createContext, useState, useEffect } from 'react';
import { getIpData } from '../utils';

export const Context = createContext();

export default function ContextProvider ({ children }) {

  const [inputData, setInputData] = useState("");
  const [ipData, setIpData] = useState({
    ip: "N/A",
    location: "N/A",
    postalCode: "N/A",
    isp: "N/A",
    lat: 0,
    lon: 0
  });

  useEffect(() => {
    getIpData("")
      .then((response) => response.json())
      .then((data) => 
        !data.hasOwnProperty("error")
          ? setIpData({
              ip: data.ip,
              location:
                data.country_name + ", " + data.region + ", " + data.city,
              postalCode: data.postal,
              isp: data.org,
              lat: data.latitude,
              lon: data.longitude,
            })
          : alert("Invalid IP Address")
      );
  }, []);

  const contextValues = {
    inputData,
    setInputData,
    ipData,
    setIpData
  };

  return (
    <Context.Provider value={contextValues}>
      {children}
    </Context.Provider>
  );
};