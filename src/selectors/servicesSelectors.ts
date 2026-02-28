// src/selectors/servicesSelectors.ts
import { createSelector } from "reselect";
import type { RootState } from "../types";

export const selectAllServices = (state: RootState) => state.services.items;
export const selectSearchTerm = (state: RootState) => state.filter.searchTerm;

export const selectFilteredServices = createSelector(
  [selectAllServices, selectSearchTerm],
  (services, searchTerm) => {
    if (!searchTerm.trim()) {
      return services;
    }
    const term = searchTerm.toLowerCase();
    return services.filter((service) =>
      service.name.toLowerCase().includes(term)
    );
  }
);

export const selectFilterStats = createSelector(
  [selectFilteredServices, selectAllServices],
  (filtered, all) => ({
    found: filtered.length,
    total: all.length,
  })
);
