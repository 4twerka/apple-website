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
                                <li><a href="https://www.apple.com/store/" target="_blank" rel="noopener noreferrer">Store</a></li>
                                <li><a href="https://www.apple.com/mac/" target="_blank" rel="noopener noreferrer">Mac</a></li>
                                <li><a href="https://www.apple.com/ipad/" target="_blank" rel="noopener noreferrer">iPad</a></li>
                                <li><a href="https://www.apple.com/iphone/" target="_blank" rel="noopener noreferrer">iPhone</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li><a href="https://www.apple.com/apple-music/" target="_blank" rel="noopener noreferrer">Apple Music</a></li>
                                <li><a href="https://www.apple.com/retail/" target="_blank" rel="noopener noreferrer">Apple Store</a></li>
                                <li><a href="https://www.apple.com/apple-books/" target="_blank" rel="noopener noreferrer">Apple Books</a></li>
                                <li><a href="https://www.apple.com/apple-podcasts/" target="_blank" rel="noopener noreferrer">Apple Podcasts</a></li>
                                <li><a href="https://www.apple.com/apple-news/" target="_blank" rel="noopener noreferrer">Apple News</a></li>
                                <li><a href="https://www.apple.com/apple-tv-app/" target="_blank" rel="noopener noreferrer">Apple TV</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Apple Store</h3>
                            <ul className="space-y-2">
                                <li><a href="https://www.apple.com/retail/" target="_blank" rel="noopener noreferrer">Find a Store</a></li>
                                <li><a href="https://www.apple.com/today/" target="_blank" rel="noopener noreferrer">Today at Apple</a></li>
                                <li><a href="https://apps.apple.com/us/app/apple-store/id375380948" target="_blank" rel="noopener noreferrer">Apple Store App</a></li>
                                <li><a href="https://www.apple.com/shop/order/list" target="_blank" rel="noopener noreferrer">Order Status</a></li>
                                <li><a href="https://www.apple.com/shop/trade-in" target="_blank" rel="noopener noreferrer">Apple Trade In</a></li>
                                <li><a href="https://www.apple.com/shop/help" target="_blank" rel="noopener noreferrer">Shopping Help</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">For Business</h3>
                            <ul className="space-y-2">
                                <li><a href="https://www.apple.com/business/" target="_blank" rel="noopener noreferrer">Apple and Business</a></li>
                                <li><a href="https://www.apple.com/retail/business/" target="_blank" rel="noopener noreferrer">Shop for Business</a></li>
                            </ul>
                            <h3 className="font-bold mt-6 mb-4">For Education</h3>
                            <ul className="space-y-2">
                                <li><a href="https://www.apple.com/education/" target="_blank" rel="noopener noreferrer">Apple and Education</a></li>
                                <li><a href="https://www.apple.com/us/shop/goto/educationrouting" target="_blank" rel="noopener noreferrer">Shop for College</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">About Apple</h3>
                            <ul className="space-y-2">
                                <li><a href="https://www.apple.com/newsroom/" target="_blank" rel="noopener noreferrer">Newsroom</a></li>
                                <li><a href="https://www.apple.com/leadership/" target="_blank" rel="noopener noreferrer">Apple Leadership</a></li>
                                <li><a href="https://www.apple.com/careers/us/" target="_blank" rel="noopener noreferrer">Career Opportunities</a></li>
                                <li><a href="https://www.apple.com/today/" target="_blank" rel="noopener noreferrer">Events</a></li>
                                <li><a href="https://www.apple.com/contact/" target="_blank" rel="noopener noreferrer">Contact Apple</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-4 lg:space-y-0">
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/apple" target="_blank" rel="noopener noreferrer">
                                <img src="/pictures/facebook.png" alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/apple/" target="_blank" rel="noopener noreferrer">
                                <img src="/pictures/instagram.png" alt="Instagram" className="w-6 h-6" />
                            </a>
                            <a href="https://twitter.com/Apple" target="_blank" rel="noopener noreferrer">
                                <img src="/pictures/twitter.png" alt="Twitter" className="w-6 h-6" />
                            </a>
                        </div>
                        <div className="text-sm text-gray-500 flex space-x-4">
                            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                            <span>|</span>
                            <a href="https://www.apple.com/legal/internet-services/terms/site.html" target="_blank" rel="noopener noreferrer">Terms of Use</a>
                            <span>|</span>
                            <a href="https://www.apple.com/shop/browse/open/salespolicies" target="_blank" rel="noopener noreferrer">Sales and Refunds</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;