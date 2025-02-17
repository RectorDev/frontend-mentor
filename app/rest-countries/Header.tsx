"use client";  // Enables client-side interactivity
import React from "react";  // Core React library
import { SortOption, useFilterStore } from "./store";  // Types and state management
// Available region options for filtering
const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function Header() {
  // Get filter state and actions from store
  const { 
    search, selectedRegion, sortBy, sortOrder,      // State values
    setSearch, setSelectedRegion, setSortBy, setSortOrder  // Actions
  } = useFilterStore();

  return (
    <div className="mb-6 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
      {/* Search input for country/capital search */}
      <div className="flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search for a country or capital..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 md:items-center">
        {/* Region filter dropdown */}
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {regions.map((region) => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>

        <div className="flex items-center gap-2">
          {/* Sort field selection */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="name">Name</option>
            <option value="population">Population</option>
            <option value="area">Area</option>
          </select>

          {/* Sort direction toggle */}
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            {sortOrder === "asc" ? "↑" : "↓"}
          </button>
        </div>
      </div>
    </div>
  );
}
