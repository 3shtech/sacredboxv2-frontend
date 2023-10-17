import Link from "next/link";
import Image from "next/image";
import { PrimaryMenu, SecondaryMenu } from ".";
import NavMenu from "./Home/navMenu";

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
      {/* <div className="hidden md:flex"> */}
      <PrimaryMenu />

      {/* </div> */}

      {/* Login & Register */}
      {/* <div className="hidden md:flex">
        <SecondaryMenu />
      </div> */}

      {/* small screens */}
      {/* <button className="md:hidden mx-3 cursor-pointer  ">
        <NavMenu />
      </button> */}
    </nav>
  );
}
