import React from 'react';
import MyCard from '../components/MyCard';
import SideMenu from '../components/SideMenu';

export default function Spec() {
  const specs = [
    { title: 'Frontend Developer', desc: 'Crafting responsive, high-performance web interfaces with React and modern CSS.' },
    { title: 'UI/UX Designer', desc: 'Designing intuitive user flows and aesthetically pleasing UI layouts in Figma.' },
    { title: 'Graphic Designer', desc: 'Creating visual assets and branding elements that effectively communicate ideas.' }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f11] text-white flex items-center justify-center p-4 md:p-6 pb-24 lg:pb-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between bg-[#141417] p-6 md:p-8 rounded-[36px] border border-white/10 shadow-2xl max-w-5xl w-full gap-6">
        <MyCard />
        <div className="flex-1 px-0 md:px-4 text-center lg:text-left w-full">
          <h2 className="text-2xl font-bold mb-4 text-white">My <span className="text-orange-500">Specializations</span></h2>
          <div className="space-y-3 text-left">
            {specs.map((item, idx) => (
              <div key={idx} className="p-4 bg-[#1e1e24] rounded-2xl border border-white/5">
                <h4 className="font-bold text-sm text-white mb-1">{item.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <SideMenu />
      </div>
    </div>
  );
}