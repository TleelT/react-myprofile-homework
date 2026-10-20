import React from 'react';
import MyCard from '../components/MyCard';
import SideMenu from '../components/SideMenu';
import { FaReact, FaFigma, FaHtml5, FaJs, FaGithub } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export default function Skill() {
  const skills = [
    { name: 'React', percent: '80%', icon: <FaReact className="text-cyan-400 text-2xl" /> },
    { name: 'Figma', percent: '85%', icon: <FaFigma className="text-pink-500 text-2xl" /> },
    { name: 'HTML/CSS', percent: '90%', icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
    { name: 'Next.js', percent: '75%', icon: <SiNextdotjs className="text-white text-2xl" /> },
    { name: 'JavaScript', percent: '85%', icon: <FaJs className="text-yellow-400 text-2xl" /> },
    { name: 'GitHub', percent: '90%', icon: <FaGithub className="text-white text-2xl" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f11] text-white flex items-center justify-center p-4 md:p-6 pb-24 lg:pb-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between bg-[#141417] p-6 md:p-8 rounded-[36px] border border-white/10 shadow-2xl max-w-5xl w-full gap-6">
        <MyCard />
        <div className="flex-1 px-0 md:px-4 text-center lg:text-left w-full">
          <h2 className="text-2xl font-bold mb-6 text-white">My <span className="text-orange-500">Skills</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {skills.map((s, index) => (
              <div
                key={index}
                className="p-3 md:p-4 rounded-2xl flex flex-col items-center justify-center border border-white/10 bg-[#1e1e24] shadow-md hover:border-orange-500/50 transition-all"
              >
                <div className="mb-2">{s.icon}</div>
                <span className="text-xs text-orange-400 font-bold">{s.percent}</span>
                <span className="text-xs text-gray-300 mt-1">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
        <SideMenu />
      </div>
    </div>
  );
}