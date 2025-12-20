import Link from "next/link";
import { ArrowRight, Icon } from "./icons";
import React from "react";

export default function NavCard({
  href,
  title,
  desc,
  icon,
}: {
  href: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="card flex items-center gap-4 p-4 hover:opacity-95 active:scale-[0.995] transition"
    >
      <Icon>{icon}</Icon>
      <div className="min-w-0 flex-1">
        <div className="font-semibold text-[15px] leading-5">{title}</div>
        <div className="text-sm text-slate-500 dark:text-slate-400 truncate">{desc}</div>
      </div>
      <div className="text-slate-400 dark:text-slate-500">
        <ArrowRight />
      </div>
    </Link>
  );
}
