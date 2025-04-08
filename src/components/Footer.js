import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
      <footer className="text-gray-900 bg-yellow-50 py-3 sm:pt-16 lg:pt-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:px-4">
                <img className="w-28 h-auto" src="/logo.png" alt="" />

                <p className="text-base leading-relaxed text-gray-600 mt-7">Aaoji is your perfect pit stop on the highway, serving up bold, authentic flavors that are fast, fun, and full of taste. Whether you're craving a quick bite or a satisfying meal on the go, Aaoji brings the perfect blend of tradition and excitement to your journey. Stop by for a flavorful adventure – no detours needed!</p>

                <ul className="flex items-center space-x-3 mt-9">

                    <li>
                    <FaInstagram className="text-[#e7000b] text-3xl hover:cursor-pointer" />
                    </li>
                    <li>
                    <FaFacebookSquare className="text-[#e7000b] text-3xl hover:cursor-pointer" />
                    </li>

                    <li>
                    <FaSquareXTwitter className="text-[#e7000b] text-3xl hover:cursor-pointer" />
                    </li>
                </ul>
            </div>

            <div>
                <p className="text-sm font-semibold tracking-widest text-red-600 uppercase">Quick Links</p>

                <ul className="mt-4 space-y-4">
                    <li>
                        <a href="#hero" title="" className="flex text-base text-black transition-all duration-200 hover:text-red-600 focus:text-red-600">Home</a>
                    </li>

                    <li>
                        <a href="#features" title="" className="flex text-base text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"> Features </a>
                    </li>

                    <li>
                        <a href="#about" title="" className="flex text-base text-black transition-all duration-200 hover:text-red-600 focus:text-red-600">About</a>
                    </li>

                    <li>
                        <a href="#gallery" title="" className="flex text-base text-black transition-all duration-200 hover:text-red-600 focus:text-red-600">Gallery</a>
                    </li>
                    <li>
                        <a href="#testimonials" title="" className="flex text-base text-black transition-all duration-200 hover:text-red-600 focus:text-red-600">Tastimonials</a>
                    </li>
                    <li>
                        <a href="#contact" title="" className="flex text-base text-black transition-all duration-200 hover:text-red-600 focus:text-red-600">Contact</a>
                    </li>
                </ul>
            </div>

            <div>
                <p className="text-sm font-semibold tracking-widest text-red-600 uppercase ">Get in Touch</p>

              <div className="">
                <h4 className="text-md font-semibold text-red-600 mt-4">Phone</h4>
                <p className="text-gray-700">+91 1227774774</p>
              </div>
              <div className="">
                <h4 className="text-md font-semibold text-red-600 mt-4">Email</h4>
                <p className="text-gray-700">contact@aaoji.com</p>
              </div>
              <div className="">
                <h4 className="text-md font-semibold text-red-600 mt-4">Location</h4>
                <p className="text-gray-700">123 Street, Haridwar, Uttrakhand, India</p>
              </div>

            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                <p className="text-sm font-semibold tracking-widest text-red-600 uppercase">Opening Hours</p>
                <p className=" text-xl">Mon to Sun: 12PM to 12AM</p>
            </div>
        </div>
        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">&copy; {new Date().getFullYear()} Aaoji Restaurant. All rights reserved.</p>
    </div>
      </footer>
    );
  }