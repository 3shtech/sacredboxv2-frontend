"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BarsOutlined, SearchOutlined } from "@ant-design/icons";
import { Layout, Modal } from "antd";
import jsonData from "/constants/providers.json";
import SearchFilter from "../components/SearchResults/searchFilter";

export default function SearchResults() {
  const { Content, Sider } = Layout;

  const [open, setOpen] = useState(false);
  return (
    <main className="flex flex-row gap-10">
      <Layout>
        <Sider className="w-3/4 bg-red-100">
          <SearchFilter />
        </Sider>
        <Content>
          {" "}
          con
          {/*TODO: add filter  */}
          <section className=" w-11/12 lg:w-5/6 m-auto  mb-10  mt-10">
            {/* Search filter */}
            <div className="flex flex-row justify-center items-center gap-8 ">
              <div className=" relative flex flex-row items-center gap-3 w-full text-gray-500 hover:cursor-text">
                <SearchOutlined className="w-5 h-5 absolute ml-3 " />

                <form action="post" className="form-control">
                  <input
                    className="pl-10"
                    type="text"
                    name="search"
                    placeholder="Search"
                  />
                </form>
              </div>
              {/* filter form */}
              <button
                className="bg-indigo-500 w-10 py-2 px-3 rounded-xl text-white input"
                onClick={() => setOpen(true)}
              >
                <BarsOutlined className="w-5 h-5" />
              </button>

              <Modal
                title="Filters"
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                centered
                //!TODO afterClose={}
              >
                <SearchFilter open={open} />
              </Modal>
            </div>

            {/* provider div */}
            {jsonData.providers.map((provider: jsonData) => (
              <div
                key={provider.id}
                className="shadow-md  mt-10 mb-10 pb-5 bg-slate-100"
              >
                <div className=" flex flex-row gap-5 mb-10  ">
                  {/* provider image and description */}
                  <div className="flex flex-row gap-5 justify-normal">
                    {/* image */}
                    <div className=" w-2/12 mx-5 my-2">
                      <img
                        src={provider.profilePicture}
                        alt="person"
                        className="rounded-lg"
                      />
                    </div>
                    {/* profile description */}
                    <div className="flex flex-col w-4/6  p-2">
                      <ul className=" flex flex-col gap-4">
                        <h1 className="font-bold text-xl"> {provider.name}</h1>
                        <li> {provider.experience}+ years in business</li>
                        <li> 35 bookings from sacredbox </li>
                        <li> usually responds in 24hrs </li>
                        <li>
                          {" "}
                          Performs services like{" "}
                          <span className="font-semibold ">
                            {" "}
                            {provider.services.join(" , ")}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* button */}
                  <div className="hidden lg:block m-auto w-1/2">
                    <Link
                      id="primary-btn"
                      href={`/searchResults/${provider.id}`}
                    >
                      {" "}
                      View Profile
                    </Link>
                  </div>
                </div>
                <div className="bg-white px-10 py-2 rounded-md mx-5 my-5 ">
                  <p>
                    I would personally recommend Ravi Iyer for all pujas.....
                    says Sundar.S
                  </p>
                </div>
                {/* testimonials */}
              </div>
            ))}
          </section>
          tent{" "}
        </Content>
      </Layout>
    </main>
  );
}
