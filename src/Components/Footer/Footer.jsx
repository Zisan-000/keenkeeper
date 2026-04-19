import React from "react";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/instagram.png";
import x from "../../assets/twitter.png";
import logo from "../../assets/logo-xl.png";

const Footer = () => {
  return (
    <footer className="bg-[#2d4a3e] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="flex items-center justify-center my-5">
          <img src={logo} alt="" />
        </span>

        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <button>
            <img src={facebook} alt="" />
          </button>
          <button>
            <img src={insta} alt="" />
          </button>
          <button>
            <img src={x} alt="" />
          </button>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-xs text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
