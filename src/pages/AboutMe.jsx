import React from 'react';
import MyCard from '../components/MyCard';
import SideMenu from '../components/SideMenu';

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-white flex items-center justify-center p-6">
      <div className="flex flex-row items-center justify-between bg-[#141417] p-8 rounded-[36px] border border-white/10 shadow-2xl max-w-5xl w-full gap-8">
        <MyCard />
        <div className="flex-1 px-4">
          <h2 className="text-2xl font-bold mb-3 text-orange-500">About <span className="text-white">Me</span></h2>
          <h3 className="text-base font-semibold mb-4 leading-snug">I find fulfillment in blending visual design with the power of coding to create meaningful experiences.</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            I am a passionate Fullstack Web Developer dedicated to building clean, efficient, and visual-striking web applications. My goal is to create seamless digital interactions that bring ideas to life.
          </p>
        </div>
        <SideMenu />
      </div>
    </div>
  );
}