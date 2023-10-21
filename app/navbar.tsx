import Link from "next/link";
import logo from "../public/logo-bulb-center.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row py-4 px-44 h-[80px] bg-stone-200 border-b-black border-b">
      <Link href="/">
        <Image src={logo} alt="KBH Creative logo" className="h-full w-min" />
      </Link>
      <div className="grow" />
      <nav className="h-full flex items-center">
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
