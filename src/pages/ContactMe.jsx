import React from 'react';
import MyCard from '../components/MyCard';
import SideMenu from '../components/SideMenu';

export default function ContactMe() {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-white flex items-center justify-center p-6">
      <div className="flex flex-row items-center justify-between bg-[#141417] p-8 rounded-[36px] border border-white/10 shadow-2xl max-w-5xl w-full gap-8">
        <MyCard />
        <div className="flex-1 px-4">
          <h2 className="text-2xl font-bold mb-1 text-white">Contact <span className="text-orange-500">Me</span></h2>
          <p className="text-xs text-gray-400 mb-6">Let's get in touch!</p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-orange-400 block mb-1 font-medium">Email</label>
                <input type="email" placeholder="your@email.com" className="w-full bg-transparent border-b border-gray-700 pb-1 text-xs text-white focus:outline-none focus:border-orange-500" />
              </div>
              <div>
                <label className="text-xs text-orange-400 block mb-1 font-medium">Phone</label>
                <input type="text" placeholder="+66 XX XXX XXXX" className="w-full bg-transparent border-b border-gray-700 pb-1 text-xs text-white focus:outline-none focus:border-orange-500" />
              </div>
              <div>
                <label className="text-xs text-orange-400 block mb-1 font-medium">Name</label>
                <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-gray-700 pb-1 text-xs text-white focus:outline-none focus:border-orange-500" />
              </div>
              <div>
                <label className="text-xs text-orange-400 block mb-1 font-medium">Address</label>
                <input type="text" placeholder="Bangkok, Thailand" className="w-full bg-transparent border-b border-gray-700 pb-1 text-xs text-white focus:outline-none focus:border-orange-500" />
              </div>
            </div>
            <div>
              <label className="text-xs text-orange-400 block mb-1 font-medium">Content</label>
              <input type="text" placeholder="Your message..." className="w-full bg-transparent border-b border-gray-700 pb-1 text-xs text-white focus:outline-none focus:border-orange-500" />
            </div>
            <div className="flex items-center gap-2 pt-2">
              <input type="checkbox" id="news" className="accent-orange-500 w-3.5 h-3.5 cursor-pointer" />
              <label htmlFor="news" className="text-xs text-gray-400 cursor-pointer">I would like to receive the newsletter.</label>
            </div>
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl text-xs tracking-wider hover:opacity-90 transition shadow-lg shadow-orange-500/25 uppercase cursor-pointer">
              Submit
            </button>
          </form>
        </div>
        <SideMenu />
      </div>
    </div>
  );
}