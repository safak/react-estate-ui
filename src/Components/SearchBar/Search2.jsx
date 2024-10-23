import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

const OrderForm = () => {
  return (
    <form className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
      {/* From */}
      <div className="col-span-1 flex items-center">
        <input
          type="text"
          className="h-[48px] w-full leading-[36px] border border-[#eaeaea] bg-transparent text-[#3b3b3b] rounded-full placeholder:text-black py-[6px] px-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="From"
        />
        <FontAwesomeIcon icon={faSync} className="text-black ml-2" />
      </div>
      {/* To */}
      <div className="col-span-1">
        <input
          type="text"
          className="h-[48px] w-full leading-[36px] border border-[#eaeaea] bg-transparent text-[#3b3b3b] rounded-full placeholder:text-black py-[6px] px-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="To"
        />
      </div>
      {/* Depart */}
      <div className="col-span-1">
        <input
          type="date"
          className="h-[48px] w-full leading-[36px] border border-[#eaeaea] bg-transparent text-[#3b3b3b] rounded-full py-[6px] px-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Way */}
      <div className="col-span-1">
        <select className="h-[48px] w-full leading-[36px] border border-[#eaeaea] bg-transparent text-[#3b3b3b] rounded-full py-[6px] px-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option selected>One Way</option>
          <option>Multiple Way</option>
        </select>
      </div>
      {/* Passengers */}
      <div className="col-span-1">
        <select className="h-[48px] w-full leading-[36px] border border-[#eaeaea] bg-transparent text-[#3b3b3b] rounded-full py-[6px] px-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option selected>1 Passenger</option>
          <option>2 Passengers</option>
          <option>3 Passengers</option>
          <option>4 Passengers</option>
          <option>5 Passengers</option>
        </select>
      </div>
      {/* Type */}
      <div className="col-span-1">
        <select className="h-[48px] w-full leading-[36px] border border-[#eaeaea] bg-transparent text-[#3b3b3b] rounded-full py-[6px] px-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option selected>Business</option>
          <option>Economy</option>
          <option>1st Class</option>
        </select>
      </div>
      {/* Search Button */}
      <div className="col-span-2 md:col-span-1">
        <button className="text-white min-h-[48px] w-full text-[15px] py-[2px] px-[30px] bg-blue-600 hover:opacity-90 rounded-full">
          Search
        </button>
      </div>
    </form>
  );
};

const SearchSection = () => {
  return (
    <section className="py-2">
      <div className="container mx-auto px-4">
        <div className="bg-white text-black p-[10px] rounded-full">
          <OrderForm />
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
