import SearchBar from "./SearchBar";
import DataCard from "./DataCard";

export default function Content () {
    return (
        <div className="w-screen fixed top-0 left-0 flex flex-col items-center pt-6">
            <h1 className="font-semibold text-3xl text-white pb-9 lg:pb-[1.4rem]">IP Address Tracker</h1>
            <SearchBar />
            <DataCard />
        </div>
    );
}