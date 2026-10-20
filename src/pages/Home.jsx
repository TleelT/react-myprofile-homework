import React from 'react';
import MyCard from '../components/MyCard';
import SideMenu from '../components/SideMenu';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-white flex items-center justify-center p-6">
      <div className="flex flex-row items-center justify-between bg-[#141417] p-8 rounded-[36px] border border-white/10 shadow-2xl max-w-5xl w-full gap-8">
        <MyCard />
        <div className="flex-1 px-4">
          <p className="text-orange-500 font-semibold mb-2 text-sm tracking-wide">
            Lets Work <span className="text-white">Together !</span>
          </p>
          <h1 className="text-3xl font-extrabold leading-tight mb-4 text-white">
            Hi From <span className="text-orange-500">Chonlasit (Tle)</span>, <br />
            Interactive Designer & Fullstack Web Developer
          </h1>
          <p className="text-gray-400 text-xs mb-8 leading-relaxed">
            I build accessible, user-friendly, and visual-striking digital products. Blending creative design with modern web technologies to create powerful user experiences.
          </p>
          <div className="flex gap-12">
            <div>
              <h3 className="text-3xl font-black text-orange-500">3 +</h3>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-orange-500">10 +</h3>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Projects Completed</p>
            </div>
          </div>
        </div>
        <SideMenu />
      </div>
    </div>
  );
}