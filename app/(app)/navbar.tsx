import Link from "next/link";
import logo from "../../public/logo-bulb-center.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex flex-row py-4 px-responsive h-[80px] bg-stone-200 border-b-black border-b">
      <Link href="/">
        <Image src={logo} alt="KBH Creative logo" className="h-full w-min" />
      </Link>
      <div className="grow" />
      <ul id="main-navbar" className="h-full flex items-center gap-8">
        <li className="hidden">
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
