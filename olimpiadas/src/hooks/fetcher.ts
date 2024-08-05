import { useState, useEffect, useRef } from "react";
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

  const urlRef = useRef("https://apis.codante.io/olympic-games/events");

  useEffect(() => {
    const fetchData = async () => {
      try {
        switch (routeOptions) {
          case "disciplines":
            urlRef.current =
              "https://apis.codante.io/olympic-games/disciplines";
            break;
          case "countries":
            urlRef.current = "https://apis.codante.io/olympic-games/countries";
            break;
        }
        const response = await fetch(urlRef.current, fetchParams);
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
