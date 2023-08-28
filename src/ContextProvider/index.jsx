import React, { createContext, useState, useEffect } from 'react';
import { getIpData } from '../utils';

export const Context = createContext();

export default function ContextProvider ({ children }) {

  const [inputData, setInputData] = useState("");
  const [ipData, setIpData] = useState({
    ip: "N/A",
    location: "N/A",
    language: "N/A",
    zipcode: "N/A",
    lat: 0,
    lon: 0
  });

  useEffect(() => {
    getIpData('check')
      .then((response) => response.json())
      .then((data) =>
        !data.hasOwnProperty("success")
          ? setIpData({
              ip: data.ip,
              location:
                data.country_name + ", " + data.region_name + ", " + data.city,
              language: data.location.languages[0].name,
              zipcode: data.zip,
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