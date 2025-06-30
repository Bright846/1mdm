import React, { useState } from "react";
import LAPTOP_IMG_URL from '../../assets/aa.webp'

const sidebarLinks = [
    {
        label: "Custom storefront",
        headline: "Set up a store that showcases your brand",
        description:
            "Differentiate yourself from the competition with a full store dedicated to your products – no coding or design skills necessary!",
    },
    {
        label: "Advertising tools",
        headline: "Increase exposure by up to 120% with a suite of smart advertising tools.",
        description:
            "Get your products placed in the right spots to be noticed by the exact audience you are targeting.",
    },
    {
        label: "Data and analytics",
        headline: "Optimize your every move with in-depth data and customer insights",
        description:
            "Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more.!",
    },
    {
        label: "Customers support",
        headline: "Know you’re supported throughout your journey",
        description:
            "From onboarding help to online chats to local support during business hours and account optimization tips -- we’re here for you",
    },
];

const BrandInfo = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const { headline, description } = sidebarLinks[activeIndex];

    return (
        <div className="flex min-h-screen bg-white font-sans">
            {/* Sidebar */}
            <aside className="w-64 border-r border-gray-200 py-16 pl-12">
                <nav className="flex flex-col space-y-8">
                    {sidebarLinks.map((item, idx) => (
                        <button
                            key={item.label}
                            onClick={() => setActiveIndex(idx)}
                            className={`text-lg text-left font-semibold transition-colors ${idx === activeIndex
                                ? "text-red-600 border-l-4 border-red-600 pl-3 bg-white"
                                : "text-gray-800 hover:text-red-600 pl-3"
                                }`}
                            style={{ outline: "none" }}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-between px-20">
                <div>
                    <h1 className="text-5xl font-bold mb-6 leading-tight max-w-2xl">
                        {headline}
                    </h1>
                    <p className="text-lg text-gray-500 max-w-xl">{description}</p>
                </div>
                {/* Laptop Image */}
                <div className="hidden lg:block">
                    <img
                        src={LAPTOP_IMG_URL}
                        alt="Laptop mockup"
                        className="w-[500px] h-auto object-contain drop-shadow-xl"
                        draggable={false}
                    />
                </div>
            </main>
        </div>
    );
}

export default BrandInfo