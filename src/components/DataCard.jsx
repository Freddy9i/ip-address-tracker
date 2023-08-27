import { useContext } from "react"
import { Context } from "../ContextProvider"

export default function DataCard() {
    const { ipData } = useContext(Context)

    return(
        <div className=" bg-white rounded-2xl w-80 lg:w-[61rem] h-80 lg:h-[10.5rem] p-6 lg:p-[1.8rem] flex lg:grid flex-col lg:grid-cols-4 items-center lg:items-start justify-between">
            <span className="lg:grow flex flex-col items-center lg:items-start">
                <p className="pb-2 text-xs font-bold text-gray-500">IP ADDRESS</p>
                <p className=" text-xl text-center lg:text-start font-bold">{ipData.ip}</p>
            </span>
            <span className="lg:grow flex flex-col items-center lg:items-start lg:pl-4">
                <p className="pb-2 text-xs font-bold text-gray-500">LOCATION</p>
                <p className=" text-xl text-center lg:text-start font-bold">{ipData.location}</p>
            </span>
            <span className="lg:grow flex flex-col items-center lg:items-start lg:pl-7">
                <p className="pb-2 text-xs font-bold text-gray-500">TIMEZONE</p>
                <p className=" text-xl text-center lg:text-start font-bold">{ipData.timezone}</p>
            </span>
            <span className="lg:grow flex flex-col items-center lg:items-start lg:pl-11">
                <p className="pb-2 text-xs font-bold text-gray-500">ISP</p>
                <p className=" text-xl text-center lg:text-start font-bold">{ipData.isp}</p>
            </span>
            
        </div>
    )
}