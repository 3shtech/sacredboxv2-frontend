import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

import Image from "next/image";
import { PrimaryMenu, SecondaryMenu } from ".";

export default function Navbar() {
  return (
    <nav className="w-full flex flex-row justify-between items-center bg-red-100">
      {/* Logo */}
      <Link href="/" className="bg-white p-0 m-0 mix-blend-multiply">
        <Image
          src="/sb-logo.png"
          alt="sb-logo"
          width={150}
          height={20}
          className="object-contain"
        />
      </Link>

      <PrimaryMenu />

      {/* Login & Register */}
      <SecondaryMenu />

      {/* small screens */}
      {/* <button className="md:hidden mx-3 cursor-pointer  ">
        <AiOutlineMenu className="w-8 h-8" />
      </button> */}
    </nav>
  );
}
