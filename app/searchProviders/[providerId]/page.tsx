import getProvider from "@/app/lib/getProvider";
import React from "react";

type Params = {
  params: {
    providerId: number;
  };
};

export default async function ProviderPage({ params: { providerId } }: Params) {
  const providerData: Promise<Provider> = getProvider(providerId);
  const provider = await providerData;

  return (
    <main className="w-11/12 m-auto mt-5 bg-red-100">
      <div className="flex flex-row  ">
        <div>
          <img
            src={provider.profilePicture}
            alt="provider"
            className="w-3/12 rounded-lg px-5 py-2"
          />
        </div>
        {/* Header div */}
        <div>
          <h1> {provider.name}</h1>
          <p className="overflow-hidden text-ellipsis"> {provider.bio} </p>
        </div>
      </div>
    </main>
  );
}
