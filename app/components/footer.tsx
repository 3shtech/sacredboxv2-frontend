import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "antd";
import {
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <nav className=" flex flex-row justify-between bg-slate-100">
      {/* sb logo */}
      <div className="w-1/4">
        <Image
          src="/sb-logo.png"
          alt="logo"
          width={200}
          height={10}
          className="mix-blend-multiply object-fit-contain "
        />
        <div className="flex gap-5 px-5 py-3">
          <Button
            shape="circle"
            icon={<InstagramOutlined />}
            className="text-pink-600"
          />
          <Button
            shape="circle"
            icon={<FacebookOutlined />}
            className="text-blue-800"
          />
          <Button
            shape="circle"
            icon={<YoutubeOutlined />}
            className="text-red-800"
          />
          <Button
            shape="circle"
            icon={<LinkedinOutlined />}
            className="text-blue-800"
          />
        </div>
      </div>

      {/* QuickLinks */}

      <ul className="flex flex-col gap-4 mx-5">
        <h2 className="pt-3 underline underline-offset-8"> Quick Links</h2>
        <li>
          <Link href="privacyPolicy"> Privacy Policy</Link>
        </li>
        <li>
          <Link href="termsConditions">Terms and Conditions</Link>
        </li>
        <Link href="3SHTech Ltd"> 3SHTech Ltd</Link>
        <li>
          <Link href="fAQ's">FAQs</Link>
        </li>
      </ul>

      {/* legal */}

      <ul className="flex flex-col gap-4 mx-5">
        <h2 className="pt-3 underline underline-offset-8"> Legal </h2>
        <li>
          <Link href="termsOfService"> Terms of Service</Link>
        </li>
        <li>
          <Link href="membershipAgreement"> Membership Agreement</Link>
        </li>
        <li>
          <Link href="paymentTerms">Payment Terms</Link>
        </li>
        <Link href="codeConduct"> Code of conduct</Link>
      </ul>
    </nav>
  );
};

export default Footer;
