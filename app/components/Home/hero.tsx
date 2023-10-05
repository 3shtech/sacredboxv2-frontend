import SearchForm from "./searchForm";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center md:flex-row md:justify-between md:gap-16 ">
      {/* Hero title */}
      <div className="text-5xl mx-5 my-10 font-semibold md:w-1/2">
        <h1> Find your service provider locally! </h1>
        <p className="text-sm my-5 text-gray-400">
          {" "}
          Launching in Bay Area, Greater NYC & London
        </p>
      </div>

      <SearchForm />
    </section>
  );
}
