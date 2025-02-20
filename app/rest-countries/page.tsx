"use client";  // Enables client-side interactivity
import { useQuery } from "@tanstack/react-query";  // Hook for data fetching with caching
import React, { useMemo } from "react";  // Core React and performance optimization hook
import Link from "next/link";  // Next.js navigation component
import { Country } from "./types";  // TypeScript interface for country data
import Image from "next/image";  // Next.js optimized image component
import Header from "./Header";  // Custom header component with filters
import { useFilterStore } from "./store";  // Zustand state management store

// Function to fetch countries data from local JSON file
const getCountries = async (): Promise<Country[]> => {
  const response = await fetch('./data.json');
  const data = await response.json();
  return data;
};

export default function Page() {
  // Get filter states from the store
  const { search, selectedRegion, sortBy, sortOrder } = useFilterStore();

  // Fetch countries data using React Query
  const { data, error, isLoading } = useQuery({
    queryKey: ["countries"],      // Unique key for caching
    queryFn: getCountries,        // Fetch function
    staleTime: 1000 * 60 * 10,   // Cache for 10 minutes
  });

  // Memoized filtering and sorting logic
  const filteredAndSortedCountries = useMemo(() => {
    if (!data) return [];

    // Filter countries based on search text and region
    let filtered = data.filter((country) => {
      const matchesSearch = country.name.toLowerCase().includes(search.toLowerCase()) ||
        country.capital?.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = selectedRegion === "All" || country.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });

    // Sort countries based on selected field and direction
    return filtered.sort((a, b) => {
      let comparison = 0;
      if (sortBy === "name") {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === "population") {
        comparison = a.population - b.population;
      } else if (sortBy === "area") {
        comparison = (a.area || 0) - (b.area || 0);
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });
  }, [data, search, selectedRegion, sortBy, sortOrder]);

  // Loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>There was an error: {(error as Error).message}</div>;

  return (
    <div className="p-4">
      {/* Filter and sort controls */}
      <Header />
      
      {/* Results count */}
      <p className="mb-4 text-gray-600">
        Found {filteredAndSortedCountries.length} countries
      </p>

      {/* Grid of country cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAndSortedCountries.map((country: Country) => (
          <Link href={`/rest-countries/${country.alpha3Code}`} key={country.alpha3Code}>
            <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              {/* Country flag */}
              <Image 
                width={870} 
                height={100} 
                src={country.flags.png} 
                alt={`Flag of ${country.name}`} 
                className="w-full h-40 object-cover mb-4" 
              />
              {/* Country details */}
              <h2 className="text-xl font-bold">{country.name}</h2>
              <p>Capital: {country.capital}</p>
              <p>Population: {country.population.toLocaleString()}</p>
              <p>Region: {country.region}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}