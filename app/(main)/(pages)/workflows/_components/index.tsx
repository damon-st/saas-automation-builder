import React from "react";
import Workflow from "./workflow";
import { onGetWorkFlow } from "@/actions/workflow-connections";
import MoreCredits from "./more-credits";

type Props = {};

export default async function Worflows({}: Props) {
  const workflows = await onGetWorkFlow();

  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col gap-4 m-2">
        <MoreCredits />
        {workflows?.length ? (
          workflows.map((work) => <Workflow key={work.id} {...work} />)
        ) : (
          <div className="flex items-center h-full justify-center text-muted-foreground">
            Not Workflows
          </div>
        )}
      </section>
    </div>
  );
}
