import Image from "next/image";

export default function Search({ onInputChange, onSearchClick }) {
    return (
        <div className="w-full flex gap-2 justify-center items-center">
            <input
                type="search"
                placeholder="Enter your city"
                onChange={onInputChange}
                className="px-6 py-2 w-[80%] rounded-full text-[#333] font-medium border-none outline-none xs:w-full sm:text-lg sm:py-4"
            />
            <button className="bg-white rounded-full p-2 outline-none border-none sm:p-4" onClick={onSearchClick}>
                <Image
                    src={`./search.svg`}
                    alt="search"
                    height={50}
                    width={50}
                    className="max-h-5 max-w-5"
                />
            </button>
        </div>
    );
}