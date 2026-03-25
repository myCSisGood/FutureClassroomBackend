import React from "react";
import Image from "next/image";
import { Bell, Info } from "lucide-react";
import SidebarIcon from "@/components/SidebarIcon";

const COURSES = [
  {
    id: 1,
    name: "課程名稱",
    date: "09月25日",
    code: "D0040000",
    type: "必",
    credit: "1.0",
  },
  {
    id: 2,
    name: "Lorem ipsum dolor sit amet co...",
    date: "09月14日",
    code: "D0040000",
    type: "選",
    credit: "2.0",
  },
  {
    id: 3,
    name: "課程名稱",
    date: "08月12日",
    code: "D0040000",
    type: "必",
    credit: "1.0",
  },
];

const NOTIFICATIONS = [
  {
    id: 1,
    title: "系統維護",
    type: "system",
    date: "08/21 23:59",
    color: "text-blue-500",
  },
  {
    id: 2,
    title: "功能更新",
    type: "update",
    date: "07/22 20:59",
    color: "text-indigo-600",
  },
  {
    id: 3,
    title: "個人通知",
    type: "user",
    date: "06/25 21:59",
    color: "text-purple-500",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-[#F3F6F9] text-slate-700 font-sans">
      {/* Sidebar */}
      <aside className="w-[136px] flex flex-col items-center py-8 bg-white border-r border-gray-200">
        <div
          className="
            mb-12 
            text-[32px] 
            font-normal 
            leading-none 
            tracking-[0.06em] 
            text-center 
            antialiased
            bg-[radial-gradient(154.49%_51.47%_at_50%_113.24%,#007FA9_0%,#262626_100%)]
            bg-clip-text
            text-transparent
          "
          style={{ fontFamily: '"Changa One", sans-serif' }}
        >
          NTU
        </div>
        <nav className="flex flex-col space-y-8 flex-1">
          <SidebarIcon
            icon={
              <Image
                src="/icon/common/icon_home-d.svg"
                alt="Home"
                width={44}
                height={44}
              />
            }
            activeIcon={
              <Image
                src="/icon/common/icon_home-p.svg"
                alt="Home"
                width={44}
                height={44}
              />
            }
            active
            label="主控台"
          />
          <SidebarIcon
            icon={
              <Image
                src="/icon/common/icon_course-d.svg"
                alt="Course"
                width={44}
                height={44}
              />
            }
            activeIcon={
              <Image
                src="/icon/common/icon_course-p.svg"
                alt="Course"
                width={44}
                height={44}
              />
            }
            label="我的課程"
          />
          <SidebarIcon
            icon={
              <Image
                src="/icon/common/icon_settings-d.svg"
                alt="Settings"
                width={44}
                height={44}
              />
            }
            activeIcon={
              <Image
                src="/icon/common/icon_settings-p.svg"
                alt="Settings"
                width={44}
                height={44}
              />
            }
            label="系統設定"
          />
        </nav>
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
          <span className="text-xs">User</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 flex gap-6">
        <div className="flex-[3] flex flex-col gap-6">
          {/* Welcome Banner */}
          <section className="relative h-64 rounded-3xl bg-gradient-to-r from-[#D6E6F2] to-[#B2D4EA] p-10 flex flex-col justify-center overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 flex gap-1">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="h-full w-1 bg-white rounded-full" />
              ))}
            </div>

            <h1 className="text-4xl font-bold text-slate-800 mb-2">
              Good morning, 庭妤
            </h1>
            <p className="text-slate-500 text-sm">
              資料上次更新時間：2025 年 1 月 8 日
            </p>
          </section>

          {/* Data List */}
          <div className="grid grid-cols-2 gap-6">
            <DataCard title="最新分析" data={COURSES} hasChart />
            <DataCard title="近期查看" data={COURSES} />
          </div>
        </div>

        {/* Notification Center */}
        <aside className="flex-1 bg-[#EAEFF4] rounded-3xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-lg">通知中心 (2)</h2>
            <button className="text-xs text-blue-600">全部標記為已讀</button>
          </div>

          <div className="space-y-4">
            {NOTIFICATIONS.map((n) => (
              <NotificationItem key={n.id} {...n} />
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}

// Data Card
function DataCard({
  title,
  data,
  hasChart = false,
}: {
  title: string;
  data: any[];
  hasChart?: boolean;
}) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">{title}</h3>
        <Info size={16} className="text-slate-300" />
      </div>
      <div className="space-y-4">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-xs py-2 border-b border-gray-50 last:border-0"
          >
            <div>
              <div className="font-bold text-slate-800 mb-1">{item.name}</div>
              <div className="text-slate-400 flex gap-2">
                <span>{item.date}</span>
                <span>{item.code}</span>
                <span>{item.type}</span>
                <span>{item.credit}</span>
              </div>
            </div>
            {hasChart && (
              <div className="w-20 h-10 bg-blue-50 rounded-md overflow-hidden relative">
                <div
                  className="absolute bottom-0 w-full h-1/2 bg-blue-200 opacity-50"
                  style={{
                    clipPath:
                      "polygon(0 100%, 20% 40%, 40% 60%, 60% 20%, 80% 50%, 100% 0, 100% 100%)",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Notification Item
function NotificationItem({
  title,
  date,
  color,
}: {
  title: string;
  date: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className={`mt-1 p-2 rounded-lg bg-gray-50 ${color}`}>
          <Bell size={16} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <span className="font-bold text-sm">{title}</span>
            <span className="text-[10px] text-slate-400">{date}</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            elementum odio dui.
          </p>
        </div>
      </div>
    </div>
  );
}
