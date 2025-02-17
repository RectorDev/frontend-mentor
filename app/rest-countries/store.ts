import { create } from 'zustand';  // State management library for React

// Defines the possible sort options
export type SortOption = "name" | "population" | "area";

// Interface for the filter store state and actions
interface FilterStore {
  search: string;              // Text search input value
  selectedRegion: string;      // Selected region filter
  sortBy: SortOption;         // Current sort field
  sortOrder: "asc" | "desc";  // Sort direction
  // Action functions to update state
  setSearch: (search: string) => void;
  setSelectedRegion: (region: string) => void;
  setSortBy: (sort: SortOption) => void;
  setSortOrder: (order: "asc" | "desc") => void;
}

// Create Zustand store with initial state and actions
export const useFilterStore = create<FilterStore>((set) => ({
  search: '',                                        // Initial empty search
  selectedRegion: 'All',                            // Initial region filter
  sortBy: 'name',                                   // Default sort by name
  sortOrder: 'asc',                                 // Default ascending order
  setSearch: (search) => set({ search }),           // Update search text
  setSelectedRegion: (selectedRegion) => set({ selectedRegion }), // Update region
  setSortBy: (sortBy) => set({ sortBy }),          // Update sort field
  setSortOrder: (sortOrder) => set({ sortOrder }), // Update sort direction
})); 