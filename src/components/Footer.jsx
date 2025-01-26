import React from "react";

function Footer() {
    return (
        <div className="h-screen flex mx-auto justify-center items-center">
            <footer className="bg-white text-black py-10 border-t border-gray-200 w-full">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
                        <div>
                            <h3 className="font-bold mb-4">Shop and Learn</h3>
                            <ul className="space-y-2">
                                <li>Store</li>
                                <li>Mac</li>
                                <li>iPad</li>
                                <li>iPhone</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li>Apple Music</li>
                                <li>Apple Store</li>
                                <li>Apple Books</li>
                                <li>Apple Podcasts</li>
                                <li>Apple News</li>
                                <li>Apple TV</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Apple Store</h3>
                            <ul className="space-y-2">
                                <li>Find a Store</li>
                                <li>Today at Apple</li>
                                <li>Apple Store App</li>
                                <li>Order Status</li>
                                <li>Apple Trade In</li>
                                <li>Shopping Help</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">For Business</h3>
                            <ul className="space-y-2">
                                <li>Apple and Business</li>
                                <li>Shop for Business</li>
                            </ul>
                            <h3 className="font-bold mt-6 mb-4">For Education</h3>
                            <ul className="space-y-2">
                                <li>Apple and Education</li>
                                <li>Shop for College</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">About Apple</h3>
                            <ul className="space-y-2">
                                <li>Newsroom</li>
                                <li>Apple Leadership</li>
                                <li>Career Opportunities</li>
                                <li>Events</li>
                                <li>Contact Apple</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-4 lg:space-y-0">
                        <div className="flex space-x-4">
                            <a href="#">
                                <img src="/pictures/facebook.png" alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="#">
                                <img src="/pictures/instagram.png" alt="Instagram" className="w-6 h-6" />
                            </a>
                            <a href="#">
                                <img src="/pictures/twitter.png" alt="Twitter" className="w-6 h-6" />
                            </a>
                        </div>
                        <div className="text-sm text-gray-500 flex space-x-4">
                            <a href="#">Privacy Policy</a>
                            <span>|</span>
                            <a href="#">Terms of Use</a>
                            <span>|</span>
                            <a href="#">Sales and Refunds</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
