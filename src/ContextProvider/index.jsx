import React, { createContext, useState, useEffect } from 'react';
import { getIpData } from '../utils';

export const Context = createContext();

export default function ContextProvider ({ children }) {

  const [inputData, setInputData] = useState("");
  const [ipData, setIpData] = useState({
    ip: "N/A",
    location: "N/A",
    timezone: "N/A",
    isp: "N/A",
    lat: 0,
    lon: 0
  });

  useEffect(() => {
    getIpData(inputData)
            .then(response => response.json())
            .then(data => data.status === "success" ? setIpData({
              ip: data.query,
              location: data.country+", "+data.regionName+", "+data.city,
              timezone: data.timezone,
              isp: data.isp,
              lat: data.lat,
              lon: data.lon
            }) : alert("Invalid IP Address"))
  }, [])

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