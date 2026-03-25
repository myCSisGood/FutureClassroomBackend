"use client";

import Image from "next/image";
import { useState } from "react";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";

interface TermsModalProps {
  open: boolean;
  onClose: () => void;
}

export default function TermsModal({ open, onClose }: TermsModalProps) {
  const [checked, setChecked] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-[8px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-[420px] rounded-[24px] bg-white p-6 shadow-xl border border-[rgba(99,226,253,0.3)] border-2">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <p className="title-1 text-gray-90">開始前</p>
            <h2 className="title-1 text-gray-90">讓我們先來了解條款</h2>
          </div>

          <Image src="/img_notice.svg" alt="Notice" width={124} height={90} />
        </div>

        {/* Terms Scroll Area */}
        <div className="bg-[rgba(6,45,65,0.05)] rounded-[12px] p-4 h-[220px] overflow-y-auto scrollbar scrollbar-thumb-gray-30 scrollbar-track-transparent [&::-webkit-scrollbar]:[width:4px]">
          <h3 className="title-2 text-gray-90 mb-1">隱私保護政策</h3>
          <p className="title-3 text-gray-90 mb-2">Subtitle</p>
          <p className="body-1-reg text-gray-70 mb-2">
            Lorem ipsum dolor sit amet consectetur. Urna ac iurna scelerisque.
            Lorem ipsum dolor sit amet consectetur. Urna ac iurna scelerisque.
            Lorem ipsum dolor sit amet consectetur. Urna ac iurna scelerisque.
          </p>
          <p className="body-1-reg text-gray-70">
            1. Lorem ipsum dolor sit amet consectetur. Urna ac iurna
            scelerisque.
          </p>
        </div>

        {/* Checkbox */}
        <Checkbox
          label="我已充分了解並同意本平台的使用條款。為維護使用者的權益，請事先詳閱以上條款。"
          onChange={(e) => setChecked(e.target.checked)}
        />

        {/* Button */}
        {/* <button
          disabled={!checked}
          onClick={onClose}
          className={`w-full mt-5 h-11 rounded-full font-medium transition
            ${
              checked
                ? "bg-gray-90 text-white cursor-pointer"
                : "bg-gray-40 text-gray-40 text-white cursor-not-allowed"
            }
          `}
        >
          開始使用
        </button> */}

        <Button
          variant="primary"
          size="large"
          onClick={onClose}
          className="w-full mt-5"
        >
          開始使用
        </Button>
      </div>
    </div>
  );
}
