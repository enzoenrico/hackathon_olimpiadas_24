import React from 'react';
import Sportcard from '../sportcard/sportcard';
import { useFetch } from '../../../../hooks/fetcher';
import { ApiResponse, Event } from '../../../../types/olimpic';

const Sports = () => {
    const { data, isLoading, isError } = useFetch<ApiResponse>({ fetchParams: { method: "GET" } });
    return (
        <div className="flex flex-row flex-wrap justify-center items-center gap-10 p-5">
            {isLoading ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error...</div>
            ) : (
                data?.data.map((sport, index) => (
                    <Sportcard key={sport.id} sport={sport} imgbool={
                        index % 2
                    } />
                ))
            )}
        </div>
    );
};

export default Sports;
