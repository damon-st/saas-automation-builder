"use client";
import ConnectionCard from "@/app/(main)/(pages)/connections/_components/connections-card";
import { AccordionContent } from "@/components/ui/accordion";
import MultipleSelector from "@/components/ui/multiple-selector";
import { Connection } from "@/lib/types";
import { useNodeConnections } from "@/providers/connections-provider";
import { EditorState } from "@/providers/editor-provider";
import { useFuzzieStore } from "@/store/store";

type Props = {
  connection: Connection;
  state: EditorState;
};

export default function RenderConnectionAccordion({
  connection,
  state,
}: Props) {
  const {
    connectionKey,
    description,
    image,
    title,
    accessTokenKey,
    alwaysTrue,
    slackSpecial,
  } = connection;
  const { nodeConnection } = useNodeConnections();
  const { slackChannels, selectedSlackChannels, setSelectedSlackChannels } =
    useFuzzieStore();
  const connectionData = (nodeConnection as any)[connectionKey];
  const isConnected =
    alwaysTrue ||
    (nodeConnection[connectionKey] &&
      accessTokenKey &&
      connectionData[accessTokenKey!]);
  return (
    <AccordionContent key={title}>
      {state.editor.selectedNode.data.title === title && (
        <>
          <ConnectionCard
            title={title}
            icon={image}
            description={description}
            type={title}
            connected={{ [title]: isConnected }}
          />
          {slackSpecial && isConnected && (
            <div className="p-6">
              {slackChannels?.length ? (
                <>
                  <div className="mb-4 ml-1">
                    Select the slack channels to send notification and messages:
                  </div>
                  <MultipleSelector
                    value={selectedSlackChannels}
                    onChange={setSelectedSlackChannels}
                    defaultOptions={slackChannels}
                    placeholder="Select channels"
                    emptyIndicator={
                      <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                        No results found.
                      </p>
                    }
                  />
                </>
              ) : (
                "No slack channels found Please add your slack bot to your Slack Channel"
              )}
            </div>
          )}
        </>
      )}
    </AccordionContent>
  );
}
