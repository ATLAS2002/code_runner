import { ExtendedFC } from "@/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Header: ExtendedFC = () => {
  return (
    <header className="h-10 sm:h-16 w-full bg-stone-100 flex items-center justify-between px-4 lg:px-12">
      <Link
        href="/"
        className="font-heading font-bold text-lg sm:text-3xl text-red-600"
      >
        Code Runner
      </Link>
      <Link
        href="/submissions"
        className="text-slate-700 text-xs sm:text-base flex items-center justify-evenly gap-2 font-semibold bg-stone-200 shadow px-1 sm:px-3 sm:py-2 rounded sm:rounded-lg"
      >
        View all submissions
        <span>
          <ArrowRight className="scale-50 sm:scale-100" />
        </span>
      </Link>
    </header>
  );
};
