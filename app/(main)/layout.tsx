import InfoBar from "@/components/infobar";
import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        <InfoBar />
        {children}
      </div>
    </div>
  );
}
