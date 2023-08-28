import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Context } from "../ContextProvider";
import { getIpData } from "../utils";

export default function SearchBar() {
  const context = useContext(Context);
  const isSmallScreen = window.innerWidth < 1024;

  return (
    <div className="flex pb-5 lg:pb-[2.7rem]">
      <input
        type="text"
        placeholder={
          isSmallScreen
            ? "Search for any IP address"
            : "Search for any IP address or domain"
        }
        className="w-[13.5rem] lg:w-[27.4rem] h-11 lg:h-[3.2rem] rounded-l-2xl p-5 text-sm font-semibold lg:font-normal"
        onChange={(e) => context.setInputData(e.target.value)}
      />
      <div
        className="bg-black w-11 lg:w-[3.3rem] rounded-r-2xl flex items-center justify-center"
        onClick={() => {
          // Check if the input is empty, if it is, fetch the IP address of the user
          var ipToFetch = 'check';
          if (context.inputData !== "") {
            ipToFetch = context.inputData;
          }

          getIpData(ipToFetch)
            .then((response) => response.json())
            .then((data) =>
              !data.hasOwnProperty("success")
                ? context.setIpData({
                    ip: data.ip,
                    location:
                      data.country_name +
                      ", " +
                      data.region_name +
                      ", " +
                      data.city,
                    language: data.location.languages[0].name,
                    zipcode: data.zip,
                    lat: data.latitude,
                    lon: data.longitude,
                  })
                : alert("Invalid IP Address")
            );
        }}
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </div>
    </div>
  );
}
