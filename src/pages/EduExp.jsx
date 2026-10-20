import React from 'react';
import MyCard from '../components/MyCard';
import SideMenu from '../components/SideMenu';

export default function EduExp() {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-white flex items-center justify-center p-6">
      <div className="flex flex-row items-center justify-between bg-[#141417] p-8 rounded-[36px] border border-white/10 shadow-2xl max-w-5xl w-full gap-8">
        <MyCard />
        <div className="flex-1 px-4">
          <h2 className="text-2xl font-bold mb-5 text-white">Education & <span className="text-orange-500">Experience</span></h2>
          <div className="space-y-4 border-l-2 border-orange-500/40 pl-4 text-xs">
            <div>
              <span className="text-orange-500 font-medium">2022 - Present</span>
              <h4 className="font-bold text-sm">UI/UX Designer & Web Developer</h4>
              <p className="text-gray-400 text-[11px]">Freelance Project Development</p>
            </div>
            <div>
              <span className="text-orange-500 font-medium">2022 - 2025</span>
              <h4 className="font-bold text-sm">Bachelor Degree in Technology Digital and Innovation</h4>
              <p className="text-gray-400 text-[11px]">Southeast Asia University</p>
            </div>
            <div>
              <span className="text-orange-500 font-medium">2016 - 2021</span>
              <h4 className="font-bold text-sm">High School Diploma</h4>
              <p className="text-gray-400 text-[11px]">Taweethapiseck School</p>
            </div>
          </div>
        </div>
        <SideMenu />
      </div>
    </div>
  );
}