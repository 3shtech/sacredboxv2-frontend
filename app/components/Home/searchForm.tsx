"use client";

import Link from "next/link";
import { Select, Input, Form, Button } from "antd";

export default function SearchForm() {
  const handleSelectCategory = (value: string) => {
    console.log("Selected ", value);
  };
  return (
    <div className="flex flex-col items-center justify-center mx-3 my-5  px-5 py-3 rounded-lg  md:w-1/2 border-2 border-gray-100  ">
      <h2 className="font-semibold mb-6"> Meet your spiritual helpers</h2>
      <Form
        method="post"
        // className="px-5 w-3/4 flex flex-col justify-center items-center gap-4 mt-10"
        className="w-full"
        action="/searchResults"
        layout="horizontal"
        autoComplete="on"
      >
        <Form.Item<formFieldType>
          name="keyword"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Keyword" />
        </Form.Item>
        <Form.Item<formFieldType>
          name="address"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Address" />
        </Form.Item>

        <Form.Item<formFieldType>>
          <Select
            placeholder="Select Category"
            className=" border-black input"
            bordered={true}
            onChange={handleSelectCategory}
            options={[
              { value: "hindu priest", label: "Hindu Priest" },
              { value: "reiki healer", label: "Reiki Healer" },
              { value: "crystal healer", label: "Crystal Healer" },
            ]}
          />

          {/* <Select placeholder="Select Category">
            <Select.Option value="priest">Priest</Select.Option>
            <Select.Option value="reiki">Reiki Healer</Select.Option>
            <Select.Option value="crystal">Crystal Healer</Select.Option>
          </Select> */}
        </Form.Item>

        <Button type="primary" href="/searchResults">
          {" "}
          Search
        </Button>
        {/* <div className="flex flex-col items-center ">
          <Link
            className="bg-black text-white px-10 py-3 rounded-xl "
            href="/searchResults"
          >
            Search{" "}
          </Link>
        </div> */}
      </Form>
    </div>
  );
}
