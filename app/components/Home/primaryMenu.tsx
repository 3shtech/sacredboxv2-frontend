"use client";

import Link from "next/link";
import { Menu, MenuProps } from "antd";
import { ConfigProvider } from "antd";
import theme from "@/app/lib/themeConfig";
import { MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export const PrimaryMenu = () => {
  const router = useRouter();
  const items: MenuProps["items"] = [
    {
      label: "Home",
      key: "/",
    },
    {
      label: "About Us",
      key: "aboutus",
    },
    {
      label: "Contact Us",
      key: "contactus",
    },
    {
      label: "Register",
      key: "register",
    },
    {
      label: "Login",
      key: "login",
    },
  ];

  return (
    // <ul className=" flex flex-col gap-5 md:flex-row md:gap-10 px-4">
    //   <Link href="/">Home</Link>
    //   <Link href="/aboutUs">About Us</Link>
    //   <Link href="/contactUs">Contact Us</Link>
    // </ul>
    <ConfigProvider theme={theme}>
      <>
        <div className="w-3/4 hidden md:flex justify-end ">
          <Menu
            mode="horizontal"
            items={items}
            style={{ flex: "auto", minWidth: 0 }}
            className="bg-transparent border-none "
            onClick={({ keyPath }) => router.push(`/${keyPath}`)}
            defaultSelectedKeys={["/"]}
          />
        </div>

        <div className="w-full flex justify-end md:hidden">
          <MenuOutlined
            className="w-8 h-8"
            onClick={() => console.log("hello ")}
          />
        </div>
      </>
    </ConfigProvider>
  );
};
