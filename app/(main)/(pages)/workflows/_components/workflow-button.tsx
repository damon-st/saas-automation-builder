"use client";

import WorkflowForm from "@/components/forms/worflow-form";
import CustomModal from "@/components/global/custom-modal";
import { Button } from "@/components/ui/button";
import { useBilling } from "@/providers/billing-provider";
import { useModal } from "@/providers/moda-provider";
import { Plus } from "lucide-react";

type Props = {};

export default function WorkflowButton({}: Props) {
  const { setOpen, setClose } = useModal();
  const { credits } = useBilling();
  const handleClik = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerull that help you automate tasks"
      >
        <WorkflowForm />
      </CustomModal>
    );
  };
  return (
    <Button
      size="icon"
      {...(credits !== "0"
        ? {
            onClick: handleClik,
          }
        : {
            disabled: true,
          })}
    >
      <Plus />
    </Button>
  );
}
