import { ConnectionsProvider } from "@/providers/connections-provider";
import EditorProvider from "@/providers/editor-provider";
import EditorCanvas from "./_components/editor-canvas";

type Props = {
  params: {
    editorId: string;
  };
};

export default function EditorPage({ params }: Props) {
  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <EditorCanvas />
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
}
