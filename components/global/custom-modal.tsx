import { useModal } from "@/providers/moda-provider";
import React, { ReactNode } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  subheading: string;
  children: ReactNode;
  defualtOpen?: boolean;
};

export default function CustomModal({
  children,
  subheading,
  title,
  defualtOpen,
}: Props) {
  const { isOpen, setClose } = useModal();
  const handleCLose = () => setClose();
  return (
    <Drawer open={isOpen} onClose={handleCLose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">{title}</DrawerTitle>
          <DrawerDescription className="text-center flex flex-col items-center gap-4 h-96 overflow-scroll">
            {subheading}
            {children}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex flex-col gap-4 bg-background border-t-[1px] border-t-muted">
          <DrawerClose>
            <Button variant="ghost" className="w-full" onClick={handleCLose}>
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
