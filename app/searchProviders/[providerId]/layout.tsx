import Link from "next/link";
import { ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
};
export default function ProviderLayout({ children }: LayoutProps) {
  return (
    <section className=" w-11/12 m-auto">
      {children}
      <nav className="flex flex-row gap-4 justify-between border-b-2 border-b-slate-800 w-auhref">
        <Link href=".">About</Link>
        <Link href="services">Services</Link>
        <Link href="reviews">Reviews</Link>
        <Link href="faq"> FAQ's</Link>
      </nav>
    </section>
  );
}
