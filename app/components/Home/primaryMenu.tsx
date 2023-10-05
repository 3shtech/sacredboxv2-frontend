import Link from "next/link";

export const PrimaryMenu = () => {
  return (
    <ul className="flex flex-col gap-5 md:flex-row md:gap-10 px-4">
      <Link href="/">Home</Link>
      <Link href="/aboutUs">About Us</Link>
      <Link href="/contactUs">Contact Us</Link>
    </ul>
  );
};
