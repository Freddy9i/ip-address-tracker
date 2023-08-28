import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Context } from "../ContextProvider";
import { getIpData } from "../utils";

export default function SearchBar() {
  const context = useContext(Context);

  return (
    <div className="flex pb-5 lg:pb-[2.7rem]">
      <input
        type="text"
        placeholder={"Search for any IP address"}
        className="w-[13.5rem] lg:w-[27.4rem] h-11 lg:h-[3.2rem] rounded-l-2xl p-5 text-sm font-semibold lg:font-normal"
        onChange={(e) => context.setInputData(e.target.value)}
      />
      <div
        className="bg-black w-11 lg:w-[3.3rem] rounded-r-2xl flex items-center justify-center"
        onClick={() => {
          getIpData(context.inputData)
            .then((response) => response.json())
            .then((data) =>
              !data.hasOwnProperty("error")
                ? context.setIpData({
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
        }}
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </div>
    </div>
  );
}
