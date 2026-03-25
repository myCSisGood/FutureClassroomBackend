import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface Props {
  onLoginClick: () => void;
}

export default function AuthSidebar({ onLoginClick }: Props) {
  return (
    <aside className="flex items-center justify-center min-h-screen px-10">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="space-y-6">
          <Image
            src="/icon/logo/icon_logo-ntu.svg"
            alt="Logo"
            width={56}
            height={56}
          />

          <div>
            <h1 className="headline-2-sb text-gray-90">嗨！很高興見到你</h1>
            <p className="body-1-reg text-gray-70">
              歡迎使用臺大課堂互動分析系統，請用臺大計中帳號密碼登入
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Account Input */}
          <div className="flex items-center gap-3 rounded-lg bg-gray-200 px-4 py-3">
            <Image
              src="/icon/function/icon_student-id.svg"
              alt="Student ID"
              width={24}
              height={24}
            />
            <input
              type="text"
              placeholder="計中帳號"
              className="body-1-reg w-full bg-transparent outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center gap-3 rounded-lg bg-gray-200 px-4 py-3">
            <Image
              src="/icon/function/icon_lock.svg"
              alt="Lock"
              width={24}
              height={24}
            />
            <input
              type="password"
              placeholder="計中密碼"
              className="body-1-reg w-full bg-transparent outline-none"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a className="body-1-reg text-blue-70 hover:underline cursor-pointer">
              修改密碼
            </a>
          </div>

          {/* Login Button */}
          {/* <button
            onClick={onLoginClick}
            type="button"
            className="body-1-reg w-full rounded-full bg-black py-3 text-white hover:opacity-90 transition cursor-pointer"
          >
            登入
          </button> */}
          <Button
            variant="primary"
            size="large"
            onClick={onLoginClick}
            className="w-full"
          >
            登入
          </Button>
        </form>
      </div>
    </aside>
  );
}
