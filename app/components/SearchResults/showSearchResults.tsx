// Display the list of providers for the given search data
import getAllProviders from "@/app/lib/getAllProviders";
import Link from "next/link";

export default async function ShowSearchResults() {
  const providersData: Promise<provider[]> = getAllProviders();
  const providers = await providersData;
  console.log(providers);
  const data = (
    <section>
      {/* {providers.map((provider) => {
        return (
          <>
            <Link key={provider.id} href={`${provider.name}`} prefetch={true}>
              <h2> {provider.name} </h2>
            </Link>
          </>
        );
      })} */}
      {providers.map((provider: provider) => (
        <div
          key={provider.id}
          className="shadow-md  mt-10 mb-10 pb-5 bg-slate-100"
        >
          <div className=" flex flex-row gap-5 mb-10  ">
            {/* provider image and description */}
            <div className="flex flex-row gap-5 justify-normal">
              {/* image */}
              <div className=" w-2/12 mx-5 my-2">
                <img
                  src={provider.profilePicture}
                  alt="person"
                  className="rounded-lg"
                />
              </div>
              {/* profile description */}
              <div className="flex flex-col w-4/6  p-2">
                <ul className=" flex flex-col gap-4">
                  <h1 className="font-bold text-xl"> {provider.name}</h1>
                  <li> {provider.experience}+ years in business</li>
                  <li> 35 bookings from sacredbox </li>
                  <li> usually responds in 24hrs </li>
                  <li>
                    {" "}
                    Performs services like{" "}
                    <span className="font-semibold ">
                      {" "}
                      {provider.services.join(" , ")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* button */}
            <div className="hidden lg:block m-auto w-1/2">
              <Link id="primary-btn" href={`/searchResults/${provider.id}`}>
                View Profile
              </Link>
            </div>
          </div>
          <div className="bg-white px-10 py-2 rounded-md mx-5 my-5 ">
            <p>
              I would personally recommend Ravi Iyer for all pujas..... says
              Sundar.S
            </p>
          </div>
          {/* testimonials */}
        </div>
      ))}
    </section>
  );
  return <div>{data}</div>;
}
