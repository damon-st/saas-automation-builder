import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="size-full flex items-center justify-center">{children}</div>
  );
}
