import Link from "next/link";
import logo from "../public/logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/">
        <Image src={logo} alt="KBH Creative logo" />
      </Link>
    </main>
  );
}
