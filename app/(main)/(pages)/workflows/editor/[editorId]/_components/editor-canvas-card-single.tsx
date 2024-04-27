import { EditorCanvasCardType } from "@/lib/types";
import { useEditor } from "@/providers/editor-provider";
import React, { useMemo } from "react";
import { Position, useNodeId } from "reactflow";
import EditorCanvasIconHelper from "./editor-canvas-icon-helper";
import CustomHandle from "./custom-handler";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

type Props = {
  data: EditorCanvasCardType;
};

export default function EditorCanvasCardSingle({ data }: Props) {
  const { dispatch, state } = useEditor();
  const nodeId = useNodeId();
  const logo = useMemo(() => {
    return <EditorCanvasIconHelper type={data.type} />;
  }, [data]);
  const hanleClickCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    const val = state.editor.elements.find((n) => n.id === nodeId);
    if (val) {
      dispatch({
        type: "SELECTED_ELEMENT",
        payload: {
          element: val,
        },
      });
    }
  };
  return (
    <>
      {data.type !== "Trigger" && data.type !== "Google Drive" && (
        <CustomHandle
          type="target"
          position={Position.Top}
          style={{ zIndex: 100 }}
        />
      )}
      <Card
        onClick={hanleClickCard}
        className="relative max-w-[400px] dark:border-muted-foreground/70"
      >
        <CardHeader className="flex flex-row items-center gap-4">
          <div>{logo}</div>
          <div>
            <CardTitle className="text-md">{data.title}</CardTitle>
            <CardDescription>
              <p className="text-xs text-primary-foreground/50">
                <b className="text-muted-foreground/80">ID: {nodeId}</b>
              </p>
              <p>{data.description}</p>
            </CardDescription>
          </div>
        </CardHeader>
        <Badge variant="secondary" className="absolute ring-2 top-2">
          {data.type}
        </Badge>
        <div
          className={clsx("absolute left-3 top-4 size-2 rounded-full", {
            "bg-green-500": Math.random() < 0.6,
            "bg-orange-500": Math.random() >= 0.6 && Math.random() < 0.8,
            "bg-red-500": Math.random() >= 0.8,
          })}
        />
      </Card>
      <CustomHandle type="source" position={Position.Bottom} id="a" />
    </>
  );
}
