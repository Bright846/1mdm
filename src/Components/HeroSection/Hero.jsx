import React from 'react'
import Banner from "../../assets/seller-banner.png"

const Hero = () => {
    return (
        <div
            className="w-full min-h-[440px] flex items-center bg-no-repeat bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${Banner})`,
            }}
        >
            <div className="absolute left-0 top-0 w-64 h-64 bg-[#f44] opacity-20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#f44] opacity-20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
                <div className="max-w-xl">
                    <h4 className="text-lg md:text-xl font-medium text-gray-700 mb-2">Sell on 1mdm.com</h4>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Reach millions of B2B buyers globally
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <button className="bg-[#f44] text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-[#d22] transition">
                            Start selling
                        </button>
                        <button className="border border-[#f44] text-[#f44] font-semibold px-6 py-2 rounded-full bg-white hover:bg-[#f44] hover:text-white transition">
                            Chat with consultant
                        </button>
                    </div>
                </div>
                <div className="mt-10 md:mt-0 flex flex-col gap-8 text-right">
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-gray-900">26,000,000</div>
                        <div className="text-gray-600 text-base md:text-lg">active buyers globally</div>
                    </div>
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-gray-900">400,000</div>
                        <div className="text-gray-600 text-base md:text-lg">product inquiries daily</div>
                    </div>
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-gray-900">200</div>
                        <div className="text-gray-600 text-base md:text-lg">countries and regions represented</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
