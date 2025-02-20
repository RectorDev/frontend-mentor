"use client"; // Enables client-side interactivity
import { useQuery } from "@tanstack/react-query"; // Hook for data fetching with caching
import { useParams, useRouter } from "next/navigation"; // Hook to access route parameters
import { Country } from "../types"; // TypeScript interface for country data
import Image from "next/image";

const getCountry = async (id: string): Promise<Country> => {
  const response = await import("@/public/data.json");
  const data = response.default as Country[];
  const country = data.find((c) => c.alpha3Code.toLowerCase() === id.toLowerCase());
  if (!country) throw new Error("Country not found");
  return country;
};

export default function CountryDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const {
    data: country,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["country", id],
    queryFn: () => getCountry(id),
    staleTime: 1000 * 60 * 30, // Consider fresh for 30 minutes
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>There was an error: {(error as Error).message}</div>;
  if (!country) return <div>No country found</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <button onClick={() => router.back()} className="mb-8 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image src={country.flags.png} alt={`Flag of ${country.name}`} width={400} height={200} className="w-full h-auto rounded-lg shadow-lg" />

        <div>
          <h1 className="text-3xl font-bold mb-6">{country.name}</h1>
          <div className="grid grid-cols-1 gap-4">
            <p>
              <span className="font-semibold">Native Name:</span> {country.nativeName}
            </p>
            <p>
              <span className="font-semibold">Capital:</span> {country.capital}
            </p>
            <p>
              <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Region:</span> {country.region}
            </p>
            <p>
              <span className="font-semibold">Sub Region:</span> {country.subregion}
            </p>
            <p>
              <span className="font-semibold">Languages:</span> {country.languages.map((lang) => lang.name).join(", ")}
            </p>
            {country.currencies && (
              <p>
                <span className="font-semibold">Currencies:</span> {country.currencies.map((curr) => `${curr.name} (${curr.symbol})`).join(", ")}
              </p>
            )}
            {country.borders && country.borders.length > 0 && (
              <p>
                <span className="font-semibold">Border Countries:</span> {country.borders.join(", ")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
