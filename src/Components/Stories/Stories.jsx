import React, { useState } from "react";
import SliderOne from "../../assets/slider-1.webp";
import SliderTwo from "../../assets/slider-2.webp";
import SliderThree from "../../assets/slider-3.webp";
import SliderFour from "../../assets/slider-4.webp";

const stories = [
    {
        text: `LTA International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTA's long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA.`,
        image: SliderOne,
    },
    {
        text: `Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years' experience using IP systems that are conventional`,
        image: SliderTwo,
    },
    {
        text: `Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company's team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.`,
        image: SliderThree,
    },
    {
        text: `Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line`,
        image: SliderFour,
    },
];

const Stories = () => {
    const [current, setCurrent] = useState(0);

    const prevStory = () =>
        setCurrent((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
    const nextStory = () =>
        setCurrent((prev) => (prev === stories.length - 1 ? 0 : prev + 1));

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative w-[80vw] max-w-6xl bg-white rounded-xl shadow-lg flex overflow-hidden mx-auto">
                {/* Left Arrow */}
                <button
                    onClick={prevStory}
                    className="absolute left-[-32px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full border border-gray-200 p-3 hover:bg-red-100 transition"
                    aria-label="Previous Story"
                >
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                        <path
                            d="M15 19l-7-7 7-7"
                            stroke="#EF4444"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {/* Story Content */}
                <div className="flex flex-1">
                    {/* Quote Section */}
                    <div className="flex flex-col justify-center p-10 w-[60%]">
                        <span className="text-5xl text-red-600 mb-4">
                            <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                                <path
                                    d="M7.17 14C7.06 13.69 7 13.35 7 13c0-2.21 1.79-4 4-4V5c-3.86 0-7 3.14-7 7 0 2.21 1.79 4 4 4v-2zm10 0c-.11-.31-.17-.65-.17-1 0-2.21 1.79-4 4-4V5c-3.86 0-7 3.14-7 7 0 2.21 1.79 4 4 4v-2z"
                                    fill="#EF4444"
                                />
                            </svg>
                        </span>
                        <p className="text-gray-800 text-lg leading-relaxed">{stories[current].text}</p>
                    </div>
                    {/* Image Section */}
                    <div className="relative w-[40%] flex items-center">
                        <img
                            src={stories[current].image}
                            alt="Story"
                            className="object-cover w-full h-full rounded-r-xl"
                            draggable={false}
                        />
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={nextStory}
                    className="absolute right-[-32px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full border border-gray-200 p-3 hover:bg-red-100 transition"
                    aria-label="Next Story"
                >
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                        <path
                            d="M9 5l7 7-7 7"
                            stroke="#EF4444"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Stories;
