import React from 'react';

const BrandInfo = () => {
    return (
        <div>
            <div className="w-full h-80 bg-red-600 py-10 px-4">
                <div className="max-w-4xl h-full mx-auto flex flex-col gap-6 items-center justify-around text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                        Largest number of products &amp; categories of medical devices on a single place – 1mdm.com
                    </h3>
                    <span className="text-lg text-white">
                        Connect with buyers worldwide for your product &amp; start selling now.
                    </span>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-12 mb-8 text-[30px] text-red-800 font-bold px-4 text-center">
                Grow your business with a suite of tools built for you
            </div>
        </div>
    );
};

export default BrandInfo;
