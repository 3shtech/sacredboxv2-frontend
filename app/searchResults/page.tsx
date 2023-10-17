"use client";

import { BarsOutlined, SearchOutlined } from "@ant-design/icons";
import { ConfigProvider, Layout, Modal } from "antd";
// import jsonData from "/constants/providers.json";
import SearchFilter from "../components/SearchResults/searchFilter";
import theme from "../lib/themeConfig";
import ShowSearchResults from "../components/SearchResults/showSearchResults";

export default function SearchResults() {
  const { Content, Sider } = Layout;

  return (
    <ConfigProvider theme={theme}>
      <main className="flex flex-row gap-10">
        <Layout>
          <Sider width={300} className="sidebar">
            <SearchFilter />
          </Sider>
          <Content>
            {" "}
            {/* filter button */}
            {/* <button
              className="bg-indigo-500 w-10 py-2 px-3 rounded-xl text-white input"
              onClick={() => setOpen(true)}
            >
              <BarsOutlined className="w-5 h-5" />
            </button> */}
            <main className="w-full">
              <ShowSearchResults />
            </main>
          </Content>
        </Layout>
      </main>
    </ConfigProvider>
  );
}
