"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const r = useRouter();
  return (
    <button
      onClick={() => r.back()}
      className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 dark:bg-white/5 border border-slate-200/20 dark:border-slate-700/40 backdrop-blur"
    >
      <span className="text-lg leading-none">←</span>
      <span className="text-sm">Back</span>
    </button>
  );
}
