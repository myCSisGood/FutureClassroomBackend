"use client";

import { Search, ChevronDown, Info } from "lucide-react";
import Image from "next/image";

const COURSE_GROUPS = [
  {
    semester: "114 - 2",
    courses: [
      {
        id: 1,
        name: "課程名稱",
        code: "000 00000",
        section: "01",
        time: "一, 1-3",
        progress: 4,
        total: 16,
        hasUpdate: true,
      },
      {
        id: 2,
        name: "課程名稱",
        code: "000 00000",
        section: "01",
        time: "二, 6-7",
        progress: 4,
        total: 16,
      },
    ],
  },
  {
    semester: "113 - 2",
    courses: [
      {
        id: 3,
        name: "課程名稱",
        code: "000 00000",
        section: "02",
        time: "一, 1-3",
        progress: 16,
        total: 16,
      },
      {
        id: 4,
        name: "課程名稱",
        code: "000 00000",
        section: "01",
        time: "二, 1-3",
        progress: 15,
        total: 16,
      },
      {
        id: 5,
        name: "課程名稱",
        code: "000 00000",
        section: "01",
        time: "三, 1-3",
        progress: 16,
        total: 16,
      },
    ],
  },
];

export default function CoursePage() {
  return (
    <div className="p-8 flex flex-col gap-8 bg-[#F2F2F2]">
      <header className="flex justify-between items-center">
        <h1 className="title-1 text-gray-90">我的課程</h1>
        <div className="relative w-72">
          <input
            type="text"
            placeholder="搜尋課程名稱"
            className="w-full pl-4 pr-10 py-2 bg-gray-200/50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all"
          />
          <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-500 p-1.5 rounded-full text-white">
            <Search size={16} />
          </div>
        </div>
      </header>

      <section className="flex gap-4">
        <StatCard
          icon="/icon/function/icon_in-progress-blue.svg"
          label="正在分析中"
          value={2}
          hasInfo
        />
        <StatCard
          icon="/icon/function/icon_analysis-blue.svg"
          label="已分析完成"
          value={23}
        />
        <StatCard
          icon="/icon/function/icon_books-blue.svg"
          label="當前課程數量"
          value={46}
        />
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex justify-end">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl text-sm font-medium">
            所有學年期 <ChevronDown size={16} />
          </button>
        </div>

        <div className="space-y-10">
          {COURSE_GROUPS.map((group) => (
            <div key={group.semester} className="space-y-4">
              <h2 className="font-bold text-slate-700 ml-1">
                {group.semester}
              </h2>
              <div className="space-y-3">
                {group.courses.map((course) => (
                  <CourseItem key={course.id} {...course} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, label, value, hasInfo = false }: any) {
  return (
    <div className="flex-1 bg-white p-6 rounded-[24px] flex items-center justify-between transition-transform">
      <div className="flex items-center gap-4">
        <div
          className={`w-[36px] h-[36px] bg-[rgba(1,174,217,0.1)] rounded-full flex items-center justify-center text-xl`}
        >
          <Image
            src={icon}
            alt="Info"
            width={24}
            height={24}
            className="text-blue-50"
          />
        </div>
        <div className="flex items-center gap-2 title-3">
          {label}
          {hasInfo && (
            <div className="w-4 h-4 rounded-full flex items-center justify-center">
              <Image
                src="/icon/function/icon_circle-help.svg"
                alt="Info"
                width={18}
                height={18}
              />
            </div>
          )}
        </div>
      </div>
      <div className="text-4xl font-bold text-slate-800">{value}</div>
    </div>
  );
}

function CourseItem({
  name,
  code,
  section,
  time,
  progress,
  total,
  hasUpdate,
}: any) {
  return (
    <div className="bg-white p-5 rounded-2xl flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="body-1-reg text-gray-90">{name}</span>
          {hasUpdate && <div className="w-2 h-2 bg-red-500 rounded-full" />}
        </div>
        <div className="flex gap-2">
          <Tag text={code} />
          <Tag text={section} />
          <Tag text={time} />
        </div>
      </div>
      <div className="text-right">
        <div className="text-[10px] text-slate-400 mb-1 uppercase tracking-wider">
          課程分析
        </div>
        <div className="text-xl font-bold text-slate-800">
          {progress}
          <span className="text-slate-300 font-normal">/{total}</span>
        </div>
      </div>
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="px-3 py-1 bg-[#F2F2F2] text-slate-500 text-xs rounded-lg font-medium">
      {text}
    </span>
  );
}
