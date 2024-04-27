import { useEditor } from "@/providers/editor-provider";
import { CSSProperties } from "react";
import { Connection, Handle, HandleProps } from "reactflow";

type Props = HandleProps & { style?: CSSProperties };

const selector = (s: any) => ({
  nodeInternals: s.nodeInternals,
  edges: s.edges,
});

export default function CustomHandle(props: Props) {
  const { state } = useEditor();

  const handleIsValidConnection = (e: Connection) => {
    const sourcesFromHandleInState = state.editor.edges.filter(
      (edge) => edge.source === e.source
    ).length;
    const sourceNode = state.editor.elements.find(
      (node) => node.id === e.source
    );
    //target
    const targetFromHandleInState = state.editor.edges.filter(
      (edge) => edge.target === e.target
    ).length;
    if (targetFromHandleInState === 1) return false;
    if (sourceNode?.type === "Condition") return true;
    if (sourcesFromHandleInState < 1) return true;
    return false;
  };

  return (
    <Handle
      {...props}
      isValidConnection={handleIsValidConnection}
      className="!-bottom-2 !size-4 dark:bg-neutral-800"
    />
  );
}
