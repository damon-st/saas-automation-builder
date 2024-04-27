"use client";
import { useRouter } from "next/navigation";
import UploadCareButton from "./uploadcare-button";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
type Props = {
  userImage: string | null;
  onDelete?: any;
  onUpload?: any;
};

export default function ProfilePicture({
  userImage,
  onDelete,
  onUpload,
}: Props) {
  const router = useRouter();
  const onRemoveProfileImage = async () => {
    const response = await onDelete();
    if (response) {
      router.refresh();
    }
  };
  return (
    <div className="flex flex-col">
      <p className="text-lg text-white">Profile picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImage ? (
          <>
            <div className="relative h-full w-2/12">
              <Image src={userImage} alt="user_image" fill />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove Logo
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  );
}
