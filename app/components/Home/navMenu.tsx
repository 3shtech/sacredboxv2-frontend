"use client";

import React from "react";
import { Menu } from "antd";

type Props = {};

export default function NavMenu({}: Props) {
  const handleMenuClick = () => {
    console.log("clciked");
  };
  return (
    <>
      <Menu className=" mix-blend-darken border-none ">
        {" "}
        {/* <MenuOutlined className="w-8 h-8" onClick={() => handleMenuClick()} /> */}
      </Menu>
    </>
  );
}
