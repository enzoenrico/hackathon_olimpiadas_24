import { useState, useEffect } from "react";
import { ApiResponse } from "../types/olimpic";

interface FetchingState<ApiResponse> {
  data: ApiResponse | null;
  isLoading: boolean;
  error: string | null;
}

export function useFetch<ApiResponse>({
  fetchParams = {},

  //game id, 'disciplines' or 'countries'
  routeOptions = "",
}: {
  fetchParams?: RequestInit;
  routeOptions?: string;
} = {}): FetchingState<T> {
  const [state, setState] = useState<FetchingState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  let url = "https://apis.codante.io/olympic-games";
  useEffect(() => {
    const fetchData = async () => {
      try {
        switch (routeOptions) {
          case "disciplines":
            url = "https://apis.codante.io/olympic-games/disciplines";
          case "countries":
            url = "https://apis.codante.io/olympic-games/countries";
          case routeOptions:
            url = `https://apis.codante.io/olympic-games/events/${routeOptions}`;
          default:
            url = "https://apis.codante.io/olympic-games/events";
        }
        const response = await fetch(url, fetchParams);
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data: ApiResponse = await response.json(); // Ensure correct typing for 'data'
        setState({ data, isLoading: false, error: null });
      } catch (error) {
        setState({
          data: null,
          isLoading: false,
          error: error.message || "Unknown error",
        });
      }
    };
    fetchData();
  }, []); // Refetch when the URL changes

  return state;
}
