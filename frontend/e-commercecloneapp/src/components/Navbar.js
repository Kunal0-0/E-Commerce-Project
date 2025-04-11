import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 border-b">
      <h1 className="text-4xl font-semibold">Exclusive</h1>
      <nav className="space-x-6">
        <a href="#" className="text-gray-700 hover:text-black">Home</a>
        <a href="#" className="text-gray-700 hover:text-black">Contact</a>
        <a href="#" className="text-gray-700 hover:text-black">About</a>
        <a href="#" className="text-gray-700 hover:text-black font-medium underline underline-offset-4">Sign Up</a>
      </nav>
      <div className="relative">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="border rounded-full py-1.5 px-4 w-64 focus:outline-none"
        />
        <span className="absolute right-4 top-1.5 text-gray-500 text-sm">🔍</span>
      </div>
    </header>
  );
};

export default Navbar;
