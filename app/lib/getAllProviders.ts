export default async function getAllProviders() {
  const res = await fetch("http://localhost:4000/providers");

  if (!res.ok) throw new Error("Something went wrong!");

  return res.json();
}
