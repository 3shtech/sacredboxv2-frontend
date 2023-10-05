import React from "react";
import Link from "next/link";

export const SecondaryMenu = () => {
  return (
    <ul className="flex flex-col gap-5 md:flex-row md:gap-10 px-4">
      <Link href="/signup" className="hover:font-bold ">
        {" "}
        Register
      </Link>
      <Link href="/login" className="hover:font-bold ">
        {" "}
        Login
      </Link>
    </ul>
  );
};
