import React from 'react';

const SocialMedia = () => {
    return (
        <div className="w-full max-w-6xl mx-auto py-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 leading-tight">
                1mdm.com is a leading ecommerce platform that<br />
                helps SMEs go global
            </h2>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-8">
                <div className="flex flex-col items-center w-full md:w-1/2">
                    <div className="w-full aspect-video max-w-xl">
                        <iframe
                            className="w-full h-full rounded"
                            src="https://www.youtube.com/brightgaming846"
                        ></iframe>
                    </div>
                    <div className="mt-4 text-center italic text-gray-700 text-base">
                        SIGNA™ Explorer Lift Installation
                    </div>
                    <a
                        href="#"
                        target="_blank"
                        className="mt-4 inline-block"
                    >
                        <img
                            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
                            alt="Watch on YouTube"
                            className="h-8"
                        />
                    </a>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
                    <div className="mb-8">
                        <p className="text-gray-700 text-lg mb-4">
                            Connect with millions of business buyers from around the world.
                        </p>
                        <p className="text-gray-700 text-lg mb-4">
                            Get the tools and know-how to build a successful ecommerce presence for your business.
                        </p>
                        <p className="text-gray-700 text-lg">
                            Pocket more from each sale, with take rates as low as 0% in some cases.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;

