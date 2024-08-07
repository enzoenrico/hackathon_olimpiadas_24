import { useState, useEffect, useRef, useMemo } from "react";
import { ApiResponse } from "../types/olimpic";

interface FetchingState<T> {
    data: T | null;
    isLoading: boolean;
    error: string | null;
}

export function useFetch<T>({
    fetchParams = {},
    routeOptions = "",
}: {
    fetchParams?: RequestInit;
    routeOptions?: string;
}): FetchingState<T> {
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

                const data: T = await response.json(); // Ensure correct typing for 'data'
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

    const memoizedData = useMemo(() => state.data, [state.data])
    return {
        ...state,
        data: memoizedData,
    };
}
