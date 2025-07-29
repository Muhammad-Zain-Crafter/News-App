import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-10 font-bold">
      <p>© {new Date().getFullYear()} News App. All rights reserved.</p>
      <p className="text-sm mt-1">
        Powered by <a href="https://gnews.io" target="_blank" className="underline">GNews API</a>
      </p>
    </footer>
  );
};

export default Footer;
