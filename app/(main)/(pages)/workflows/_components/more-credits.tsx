"use client";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { useBilling } from "@/providers/billing-provider";

type Props = {};

export default function MoreCredits({}: Props) {
  const { credits } = useBilling();
  if (credits !== "0") {
    return <></>;
  }
  return (
    <Card className="p-6">
      <CardContent>
        <CardDescription>You are out of credits</CardDescription>
      </CardContent>
    </Card>
  );
}
