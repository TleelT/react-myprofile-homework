import React from 'react';
import MyCard from '../components/MyCard';
import SideMenu from '../components/SideMenu';
import taskImg from '../assets/task-project.jpg'; // นำเข้ารูปภาพที่วางไว้ใน assets

export default function Projects() {
    return (
        <div className="min-h-screen bg-[#0f0f11] text-white flex items-center justify-center p-6">
            <div className="flex flex-row items-center justify-between bg-[#141417] p-8 rounded-[36px] border border-white/10 shadow-2xl max-w-5xl w-full gap-8">

                {/* การ์ดซ้าย */}
                <MyCard />

                {/* คอนเทนต์กลาง */}
                <div className="flex-1 px-4">
                    <h2 className="text-2xl font-bold mb-1 text-white">
                        Featured <span className="text-orange-500">Projects</span>
                    </h2>
                    <p className="text-xs text-gray-300 mb-2 font-medium">
                        Manage Task App - fullstack web development
                    </p>
                    <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                        Here's my latest project built with React and Tailwind CSS. Modern dashboard interface with interactive components and custom workflows.
                    </p>

                    {/* กรอบแสดงรูปภาพผลงาน */}
                    <div className="bg-[#1e1e24] p-3 rounded-2xl border border-white/5 overflow-hidden shadow-inner">
                        <img
                            src={taskImg}
                            alt="Manage Task App Showcase"
                            className="w-full h-44 object-cover object-top rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300"
                        />
                    </div>
                </div>

                {/* เมนูขวา */}
                <SideMenu />

            </div>
        </div>
    );
}