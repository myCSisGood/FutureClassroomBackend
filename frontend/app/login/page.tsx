"use client";

import Image from "next/image";
import { useState } from "react";
import AuthSidebar from "@/components/AuthSidebar";
import TermsModal from "@/components/TermsModal";

export default function LoginPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <main className="min-h-screen grid lg:grid-cols-[1fr_380px]">
        <div className="relative hidden lg:block p-6">
          <div className="relative w-full h-full overflow-hidden rounded-3xl">
            <Image
              src="img_login-kv_1920.svg"
              alt="Background"
              fill
              priority
              className="object-cover object-left-top"
            />
          </div>
        </div>

        <AuthSidebar onLoginClick={() => setOpenModal(true)} />
      </main>

      <TermsModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
