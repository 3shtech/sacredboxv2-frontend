"use client";

import { Select, Input, Form, Button, ConfigProvider } from "antd";
import theme from "@/app/lib/themeConfig";

export default function SearchForm() {
  const handleSelectCategory = (value: string) => {
    console.log("Selected ", value);
  };
  return (
    <ConfigProvider theme={theme}>
      <div className="flex flex-col items-center justify-center mx-3 my-5  px-5 py-3 rounded-lg  md:w-1/2 border-2 border-gray-100  ">
        <h2 className="font-semibold mb-6"> Meet your spiritual helpers</h2>
        <Form
          method="post"
          // className="px-5 w-3/4 flex flex-col justify-center items-center gap-4 mt-10"
          className="w-3/4"
          action="/searchProviders"
          layout="horizontal"
          autoComplete="on"
        >
          <Form.Item<searchFormFieldType>
            name="keyword"
            // rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Keyword" />
          </Form.Item>
          <Form.Item<searchFormFieldType>
            name="address"
            // rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Address" />
          </Form.Item>

          <Form.Item<searchFormFieldType>>
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
          </Form.Item>

          <Button type="primary" href="/searchProviders" block>
            {" "}
            Search
          </Button>
        </Form>
      </div>
    </ConfigProvider>
  );
}
