// FooterSection.jsx
import React from "react";
import Logo from "../../assets/1mdm-168x58.png";

// Replace with your actual logo import or image path if needed
const Logos = () => (
    <div className="flex flex-col items-start">
        <img src={Logo} alt="1MDM Logo" className="h-12 mb-2" />

        <span className="text-sm text-gray-300 mt-2">One Medical Devices<br />Market Place</span>
    </div>
);

const FooterSection = () => (
    <div className="relative bg-white">
        <div className="bg-red-600 bg-opacity-95 py-16 flex flex-col items-center justify-center text-center"
            style={{
                backgroundImage: "url('/your-bg-image.jpg')", // Optional: set your background image here
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <div className="flex gap-4">
                <button className="bg-white text-red-600 font-semibold px-7 py-2 rounded-full text-lg shadow hover:bg-red-50 border-2 border-white transition">
                    Start selling
                </button>
                <button className="bg-red-600 text-white font-semibold px-7 py-2 rounded-full text-lg border-2 border-white hover:bg-red-700 transition">
                    Chat with consultant
                </button>
            </div>
        </div>

        {/* Footer Section */}
        <footer className="bg-black text-white py-14 px-4 md:px-0">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">
                {/* Logo */}
                <div>
                    <Logos />
                </div>
                {/* Columns */}
                <div className="flex-1 flex flex-wrap justify-between gap-10 mt-10 md:mt-0">
                    <div>
                        <div className="font-bold mb-3">Platform</div>
                        <ul className="space-y-2 text-gray-300">
                            <li>Sell on 1MDM</li>
                            <li>Pricing</li>
                            <li>About Us</li>
                            <li>Our Story</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Brands</li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-bold mb-3">Press Room</div>
                        <ul className="space-y-2 text-gray-300">
                            <li>Images & B-roll</li>
                        </ul>
                        <div className="font-bold mt-6 mb-3">Policies</div>
                        <ul className="space-y-2 text-gray-300">
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Delivery Information</li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-bold mb-3">Reach Us</div>
                        <ul className="space-y-2 text-gray-300">
                            <li>Corporate Information</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className="text-gray-400 text-center mt-10 text-sm">
                © 2025 1MDM <span role="img" aria-label="lightning">⚡</span> by SuperLabs
            </div>
        </footer>
    </div>
);

export default FooterSection;
