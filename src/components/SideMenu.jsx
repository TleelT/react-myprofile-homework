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
    `w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
      isActive 
        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/40 scale-105' 
        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
    }`;

  return (
    <div className="w-16 bg-[#18181c] py-6 rounded-full flex flex-col items-center gap-4 border border-white/10 shadow-2xl shrink-0">
      <NavLink to="/" className={linkClass} title="Home"><AiOutlineHome size={18} /></NavLink>
      <NavLink to="/about" className={linkClass} title="About Me"><AiOutlineUser size={18} /></NavLink>
      <NavLink to="/eduexp" className={linkClass} title="Education & Experience"><AiOutlineFileText size={18} /></NavLink>
      <NavLink to="/spec" className={linkClass} title="Specializations"><AiOutlineCode size={18} /></NavLink>
      <NavLink to="/projects" className={linkClass} title="Projects"><AiOutlineFolderOpen size={18} /></NavLink>
      <NavLink to="/skills" className={linkClass} title="Skills"><AiOutlineTool size={18} /></NavLink>
      <NavLink to="/contactme" className={linkClass} title="Contact Me"><AiOutlineMail size={18} /></NavLink>
    </div>
  );
}