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
  Form,
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
      <main className="w-full">
        <Form method="post" layout="vertical" className="w-full">
          <Form.Item<filterFormFieldType> label="Date" name="date">
            <DatePicker onChange={onChange} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item<filterFormFieldType>
            label="Available on"
            name="availability"
          >
            <DatePicker onChange={onChange} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item<filterFormFieldType> label="Keyword" name="keyword">
            <Input />
          </Form.Item>

          <Form.Item<filterFormFieldType> label="Address" name="address">
            <Input />
          </Form.Item>

          <Form.Item<filterFormFieldType> label="Category" name="keyword">
            <Select
              defaultValue="Select Category"
              options={[
                { value: "Hindu Priest", label: "Hindu priest" },
                { value: "Healer", label: "Healer" },
              ]}
            ></Select>
          </Form.Item>

          <Form.Item<filterFormFieldType>
            label="Filter by Radius"
            name="filterRadius"
          >
            <Slider marks={marks} />
          </Form.Item>

          <Form.Item<filterFormFieldType>>
            <Button type="primary" block>
              Apply
            </Button>
          </Form.Item>
        </Form>
      </main>
    </ConfigProvider>
  );
}
