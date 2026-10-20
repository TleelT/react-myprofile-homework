import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import profileImg from '../assets/profile.png';

export default function MyCard() {
  return (
    <div className="w-[280px] bg-[#18181c] text-white p-6 rounded-3xl flex flex-col items-center shadow-2xl border border-white/10 shrink-0">
      {/* ชื่อหัวการ์ด */}
      <h2 className="text-xl font-bold tracking-wider text-white mb-4">
        <span className="text-orange-500">C</span>honlasit
      </h2>

      {/* กรอบรูปโปรไฟล์ทรงกลมมน พอดี ไม่ใหญ่เกินไป */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-orange-500/40 shadow-xl bg-gray-800 shrink-0">
        <img 
          src={profileImg} 
          alt="Chonlasit Profile" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* ข้อมูลส่วนตัว */}
      <p className="text-xs text-orange-400 font-semibold tracking-widest mb-1">STU ID: 6852410008</p>
      <p className="text-xs text-gray-400 mb-6">Fullstack Web Developer</p>

      {/* โซเชียลไอคอน */}
      <div className="flex gap-2.5 mb-6">
        <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-orange-500 hover:border-orange-500/50 transition-all text-xs"><FaFacebookF /></a>
        <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-orange-500 hover:border-orange-500/50 transition-all text-xs"><FaTwitter /></a>
        <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-orange-500 hover:border-orange-500/50 transition-all text-xs"><FaInstagram /></a>
        <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-orange-500 hover:border-orange-500/50 transition-all text-xs"><FaLinkedinIn /></a>
        <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-orange-500 hover:border-orange-500/50 transition-all text-xs"><FaGoogle /></a>
      </div>

      {/* ปุ่ม Hire Me */}
      <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl tracking-wider hover:opacity-90 transition shadow-lg shadow-orange-500/25 text-xs uppercase cursor-pointer">
        HIRE ME !
      </button>
    </div>
  );
}