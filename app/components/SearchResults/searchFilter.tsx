"use client";

import theme from "@/app/lib/themeConfig";

import {
  Button,
  ConfigProvider,
  DatePicker,
  DatePickerProps,
  Input,
  Select,
  Slider,
} from "antd";
import { SliderMarks } from "antd/es/slider";

export default function SearchFilter({ open }: any) {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const marks: SliderMarks = {
    0: "0 ",
    100: "100 miles",
  };
  return (
    <ConfigProvider theme={theme}>
      <main>
        <form method="post" className="flex flex-col gap-3">
          <div className="searchForm">
            <label htmlFor="Date" id="title">
              Date
            </label>
            <DatePicker onChange={onChange} className="input" />
          </div>
          <div className="searchForm">
            <label htmlFor="available"> Available On</label>
            <DatePicker onChange={onChange} className="input" />
          </div>
          <div className="searchForm">
            <label htmlFor="available"> Keyword</label>
            <Input name="keyword" className="input" />
          </div>
          <div className="searchForm">
            <label htmlFor="available"> Location</label>
            <Input name="location" className="input" />
          </div>
          <div className="searchForm">
            <label htmlFor="available"> Category </label>
            <Select
              defaultValue="Select Category"
              options={[
                { value: "Hindu Priest", label: "Hindu priest" },
                { value: "Healer", label: "Healer" },
              ]}
            ></Select>
          </div>
          <div className="searchForm">
            <label htmlFor="available"> Filter by Radius</label>
            <Slider marks={marks} />
          </div>
          <div className="searchForm">
            <Button type="primary" className="flex justify-center items-center">
              Apply
            </Button>
          </div>
        </form>
      </main>
    </ConfigProvider>
  );
}
