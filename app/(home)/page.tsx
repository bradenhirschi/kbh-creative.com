import typing from "../../public/typing.jpg";
import Image from "next/image";

const Home = () => {
  return (
    <main>
      {/* Hero section */}
      <section className="grid grid-cols-3 px-44 min-h-[calc(100vh-80px)]">
        <div className="col-span-2 pr-20 p-10">
          <h1 className="stretched-heading">We create</h1>
          <h1 className="stretched-heading text-right w-full mb-4">Content</h1>
          <Image
            src={typing}
            alt="Man smiling and typing on computer"
            priority
          />
        </div>
        <div className="bg-stone-200 border-x border-black h-full pt-24 px-10">
          <h2 className="uppercase font-semibold">
            With
            <br />
            purpose, strategy, & flawless creativity
          </h2>
          <p className="my-4">
            We are all about organic business growth, highlighting your
            company&apos;s strengths through storytelling that drives traffic,
            boosts engagement, and generates leads.
          </p>
          <button className="bg-lime-500/30 p-5 rounded-full">
            Discover Our Services
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
