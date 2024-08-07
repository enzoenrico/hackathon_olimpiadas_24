const Sportcard = () => {
    return (
        <div id='outerContainer' className="w-10/12 relative h-72 border-4 border-green-600 bg-green-500 rounded-md flex flex-row justify-evenly items-center">
            <div className="w-full mx-2 h-5/6 border-2 border-green-300 bg-white rounded-md flex flex-row items-center justify-evenly">
                <img src='src\ui\components\BaseComponents\sportcard\img1.png' className="object-cover overflow-visible w-2/5" />
                <div id='outer_innerContainer' className=" flex items-center justify-center pr-10 h-full">
                    <div id='inner_innerContainer' className="min-w-fit flex flex-row justify-evenly h-full">
                        <div id='textContainer' className="w-3/4 h-auto flex flex-col items-start justify-evenly">
                            <h1 className="font-semibold text-6xl">Atletismo</h1>
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda commodi qui iusto tenetur minus culpa debitis, maxime, deserunt alias perferendis nisi vitae eius quam excepturi non. Harum sunt amet tempore.</p>
                        </div>
                        <div id='eventContainer' className="w-1/4 h-auto ">
                            {/* add rolling container */}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque alias illum eligendi harum, fugiat ad aperiam ab in impedit cupiditate accusantium hic est velit obcaecati numquam quam? Illo, ipsa?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sportcard
