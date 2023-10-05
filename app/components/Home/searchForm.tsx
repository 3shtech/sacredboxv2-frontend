"use client";

import Link from "next/link";
import { Select, Input } from "antd";

export default function SearchForm() {
  const handleSelectCategory = (value: string) => {
    console.log("Selected ", value);
  };
  return (
    <div className="flex flex-col items-center justify-center mx-3 my-5  px-5 py-3 rounded-lg  md:w-1/2 border-2 border-gray-100  ">
      <h2 className="font-semibold"> Meet your spiritual helpers</h2>
      <form
        method="post"
        className="px-5 w-full flex flex-col justify-center items-center gap-4 mt-10"
        action="/searchResults"
      >
        <Input placeholder="Keyword" className="input" />
        <Input placeholder="Address" className="input" />

        <Select
          defaultValue="Select Category"
          className="w-3/4 border-black"
          bordered={true}
          onChange={handleSelectCategory}
          options={[
            { value: "hindu priest", label: "Hindu Priest" },
            { value: "reiki healer", label: "Reiki Healer" },
            { value: "crystal healer", label: "Crystal Healer" },
          ]}
        />

        <div className="flex flex-col items-center ">
          <Link
            className="bg-black text-white px-10 py-3 rounded-xl "
            href="/searchResults"
          >
            Search{" "}
          </Link>
        </div>
      </form>
    </div>
  );
}
