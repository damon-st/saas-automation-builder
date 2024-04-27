import { ConnectionProviderProps } from "@/providers/connections-provider";
import { EditorState } from "@/providers/editor-provider";
import { useFuzzieStore } from "@/store/store";
import ContentBasedOnTitle from "./content-based-ontitle";

type Props = {
  state: EditorState;
  nodeConnection: ConnectionProviderProps;
};

export default function RenderOutputAccorion({ nodeConnection, state }: Props) {
  const {
    googleFile,
    setGoogleFile,
    selectedSlackChannels,
    setSelectedSlackChannels,
  } = useFuzzieStore();
  return (
    <ContentBasedOnTitle
      nodeConnection={nodeConnection}
      newState={state}
      file={googleFile}
      setFile={setGoogleFile}
      selectedSlackChannels={selectedSlackChannels}
      setSelectedSlackChannels={setSelectedSlackChannels}
    />
  );
}
