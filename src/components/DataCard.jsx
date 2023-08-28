import { useContext } from "react"
import { Context } from "../ContextProvider"

export default function DataCard() {
  const { ipData } = useContext(Context);

  return (
    <div className=" bg-white rounded-2xl w-[16.4rem] lg:w-[61rem] p-5 lg:p-[1.8rem] flex lg:grid flex-col lg:grid-cols-4">
      <span className="pb-2 lg:grow flex flex-col items-center lg:items-start">
        <p className="text-[0.65rem] lg:pb-2 font-bold text-gray-500">IP ADDRESS</p>
        <p className=" text-lg lg:text-xl text-center lg:text-start font-bold">
          {ipData.ip}
        </p>
      </span>
      <span className="pb-2 lg:grow flex flex-col items-center lg:items-start lg:pl-4">
        <p className="text-[0.65rem] lg:pb-2 font-bold text-gray-500">LOCATION</p>
        <p className="text-lg lg:text-xl text-center lg:text-start font-bold">
          {ipData.location}
        </p>
      </span>
      <span className="pb-2 lg:grow flex flex-col items-center lg:items-start lg:pl-7">
        <p className="text-[0.65rem] lg:pb-2 font-bold text-gray-500">POSTAL CODE</p>
        <p className="text-lg lg:text-xl text-center lg:text-start font-bold">
          {ipData.postalCode}
        </p>
      </span>
      <span className="lg:grow flex flex-col items-center lg:items-start lg:pl-11">
        <p className="text-[0.65rem] lg:pb-2 font-bold text-gray-500">ISP</p>
        <p className="text-lg lg:text-xl text-center lg:text-start font-bold">
          {ipData.isp}
        </p>
      </span>
    </div>
  );
}