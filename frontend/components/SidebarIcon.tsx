export default function SidebarIcon({
  icon,
  activeIcon,
  active = false,
  label,
}: {
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  active?: boolean;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-full relative">
      <div
        className={`
            flex flex-col items-center justify-center
            transition-all duration-300
            w-[112px] h-[88px] rounded-[8px]
            py-[10px]
            relative
            ${active ? "opacity-100 border-[1px] border-white/20" : "opacity-80 border-transparent"}
          `}
        style={
          active
            ? {
                background:
                  "linear-gradient(131.59deg, rgba(206, 248, 255, 0.2) 1.36%, rgba(18, 89, 120, 0.2) 92.87%)",
              }
            : {}
        }
      >
        {active && (
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[28px] rounded-full bg-orange-secondary"
            style={{
              left: "7px",
            }}
          />
        )}

        <div
          className={`${active ? "text-[#007FA9]" : "text-slate-400"} transition-colors`}
        >
          {active ? activeIcon : icon}
        </div>
        <span
          className={`
            mt-1 text-gray-90
            ${active ? "body-1-sb" : "body-1-reg"}
          `}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
