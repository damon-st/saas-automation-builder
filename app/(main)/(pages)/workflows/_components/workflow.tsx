"use client";
import { onFlowPublish } from "@/actions/workflow-connections";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

type Props = {
  name: string;
  description: string;
  id: string;
  publish: boolean | null;
};

export default function Workflow({ description, id, name, publish }: Props) {
  const onPublishFlow = async (event: any) => {
    const response = await onFlowPublish(
      id,
      event.target.ariaChecked === "false"
    );
    if (response) {
      toast.message(response);
    }
  };

  return (
    <Card className="flex w-full items-center justify-between">
      <CardHeader className="flex flex-col gap-4">
        <Link href={`/workflows/editor/${id}`}>
          <div className="flex flex-row gap-2">
            <Image
              className="object-contain"
              src="/googleDrive.png"
              alt="Google Drive"
              height={30}
              width={30}
            />
            <Image
              className="object-contain"
              src="/notion.png"
              alt="Notion"
              height={30}
              width={30}
            />
            <Image
              className="object-contain"
              src="/discord.png"
              alt="Discord"
              height={30}
              width={30}
            />
          </div>
          <div className="">
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </Link>
      </CardHeader>
      <div className="flex flex-col items-center gap-2 p-4">
        <Label className="text-muted-foreground" htmlFor="ariaplane-mode">
          {publish ? "On" : "Off"}
        </Label>
        <Switch
          id="ariaplane-mode"
          onClick={onPublishFlow}
          defaultChecked={publish ?? false}
        />
      </div>
    </Card>
  );
}
