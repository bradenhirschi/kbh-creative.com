import { BsArrowRight } from "react-icons/bs";
import typing from "../../../public/typing.jpg";
import lightbulb from "../../../public/lightbulb.svg";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <main>
      {/* Hero section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 px-responsive min-h-[calc(100vh-80px)]">
        <div className="lg:col-span-2 lg:pr-20 py-10">
          <h1 className="stretched-heading">Elevate Your</h1>
          <h1 className="stretched-heading text-right w-full mb-12">
            Online Presence
          </h1>

          <div className="relative">
            <Image
              src={typing}
              alt="Man smiling and typing on computer"
              priority
              loading="eager"
              className="rounded-lg"
            />
            <div className="stamp bg-stone-200" />
            <div className="stamp bg-lime-700/30 flex items-center justify-center">
              <Image src={lightbulb} alt="Lightbulb logo" />
            </div>
          </div>
        </div>
        <div className="bg-stone-200 border-x border-black h-full pt-32 px-10">
          <h2 className="uppercase font-semibold">
            With
            <br />
            Expert Content & Unmatched Creativity
          </h2>
          <p className="my-4">
            We specialize in crafting content that speaks to your brand&apos;s
            unique identity. Our expertise is your key to increased traffic and
            enhanced engagement
          </p>
          <Link href="./contact" className="btn gap-2">
            Discover Our Services
            <BsArrowRight size={20} />
          </Link>
        </div>
      </section>
      <section className="hidden py-4 bg-stone-200 border-y border-black"></section>
      <section className="hidden py-4"></section>
    </main>
  );
};

export default HomePage;
