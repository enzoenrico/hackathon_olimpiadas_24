import React from 'react';
import Minievent from './mini-event';
import { useFetch } from '../../../../hooks/fetcher';
import { ApiResponse, Event } from '../../../../types/olimpic';

const Sportcard = ({ sport, imgbool }: { sport: Event }) => {
    const { data, isLoading, isError } = useFetch<ApiResponse>({ fetchParams: { method: "GET" } });

    return (
        <div id='outerContainer' className="w-10/12 relative h-72 border-4 border-green-600 bg-green-500 rounded-md flex flex-row justify-evenly items-center">
            <div className="w-full mx-2 h-5/6 border-2 border-green-300 bg-white rounded-md flex flex-row items-center justify-evenly">
                {
                    imgbool ?
                        <img src='src\ui\components\BaseComponents\sportcard\img1.png' className="object-cover overflow-visible w-2/5" /> : false
                }
                <div id='outer_innerContainer' className={`flex ${imgbool ? 'flex-row' : 'flex-row-reverse'} items-center justify-center pr-10 h-full`}>
                    <div id='inner_innerContainer' className="min-w-fit flex xl:flex-row flex-col justify-evenly h-full">
                        <div id='textContainer' className="w-3/4 h-auto flex flex-col items-start justify-evenly">
                            <h1 className="font-semibold xl:text-6xl text-4xl">{sport.discipline_name}</h1>
                        </div>
                        <div id='eventContainer' className="w-1/2 h-auto overflow-y-scroll">
                            {/* add rolling container */}
                            {isLoading ? (
                                <div>Loading...</div>
                            ) : isError ? (
                                <div>Error...</div>
                            ) : (
                                data?.data.map((event) => (
                                    <Minievent key={event.id} event={event} />
                                ))
                            )}
                        </div>
                    </div>
                </div>
                {
                    !imgbool ?
                        <img src='src\ui\components\BaseComponents\sportcard\img2.png' className="object-cover overflow-visible w-2/5" /> : false
                }
            </div>
        </div>
    );
};

export default Sportcard;
