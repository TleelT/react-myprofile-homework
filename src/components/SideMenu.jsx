import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineCode,
  AiOutlineFolderOpen,
  AiOutlineTool,
  AiOutlineMail
} from 'react-icons/ai';

export default function SideMenu() {
  const linkClass = ({ isActive }) =>
    `w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${isActive
      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/40 scale-105'
      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
    }`;

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:static flex flex-row lg:flex-col items-center gap-2 md:gap-4 bg-[#18181c]/95 px-4 py-2.5 lg:py-6 lg:px-3 rounded-full border border-white/10 shadow-2xl z-50 backdrop-blur-md">
      <NavLink to="/" className={linkClass} title="Home"><AiOutlineHome size={18} /></NavLink>
      <NavLink to="/about" className={linkClass} title="About Me"><AiOutlineUser size={18} /></NavLink>
      <NavLink to="/eduexp" className={linkClass} title="Education & Experience"><AiOutlineFileText size={18} /></NavLink>
      <NavLink to="/spec" className={linkClass} title="Specializations"><AiOutlineCode size={18} /></NavLink>
      <NavLink to="/projects" className={linkClass} title="Projects"><AiOutlineFolderOpen size={18} /></NavLink>
      <NavLink to="/skills" className={linkClass} title="Skills"><AiOutlineTool size={18} /></NavLink>
      <NavLink to="/contactme" className={linkClass} title="Contact Me"><AiOutlineMail size={18} /></NavLink>
    </nav>
  );
}