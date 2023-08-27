import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Context } from "../ContextProvider";
import { getIpData } from "../utils";

export default function SearchBar() {
  const context = useContext(Context);
  const isSmallScreen = window.innerWidth < 1024;


  return (
    <div className="flex pb-6 lg:pb-[2.7rem]">
      <input
        type="text"
        placeholder={isSmallScreen ? "Search for any IP address" : "Search for any IP address or domain"}
        className="w-72 lg:w-[27.4rem] h-16 lg:h-[3.2rem] rounded-l-2xl p-5 text-lg font-semibold lg:font-normal"
        onChange={(e) => context.setInputData(e.target.value)}
      />
      <div 
        className="bg-black w-16 lg:w-[3.3rem] rounded-r-2xl flex items-center justify-center"
        onClick={() => {
          getIpData(context.inputData)
            .then(response => response.json())
            .then(data => data.status === "success" ? context.setIpData({
              ip: data.query,
              location: data.country+", "+data.regionName+", "+data.city,
              timezone: data.timezone,
              isp: data.isp,
              lat: data.lat,
              lon: data.lon
            }) : alert("Invalid IP Address"))
        }}
        >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </div>
    </div>
  );
}
