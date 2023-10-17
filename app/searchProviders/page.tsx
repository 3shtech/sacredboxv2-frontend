"use client";

import { ConfigProvider, Layout, Modal } from "antd";
import SearchFilter from "../components/SearchProviders/searchFilter";
import theme from "../lib/themeConfig";
import DisplayProviders from "../components/SearchProviders/displayProviders";

export default async function SearchProviders() {
  const { Content, Sider } = Layout;

  return (
    <ConfigProvider theme={theme}>
      <main className="flex flex-row gap-10">
        <Layout>
          <Sider width={300} className="sidebar">
            <SearchFilter />
          </Sider>
          <Content>
            {/* filter button */}
            <main className="w-full">
              {/* <h2> hello </h2> */}
              <DisplayProviders />
            </main>
          </Content>
        </Layout>
      </main>
    </ConfigProvider>
  );
}
