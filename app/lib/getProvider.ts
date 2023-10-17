export default async function getProvider(providerId: number) {
  const res = await fetch("http://localhost:4000/providers/" + providerId);

  if (!res.ok) throw new Error("failed to fetch provider");

  return res.json();
}
