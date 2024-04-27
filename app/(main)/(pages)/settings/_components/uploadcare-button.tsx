"use client";
import * as LR from "@uploadcare/blocks";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
LR.registerBlocks(LR);

type Props = {
  onUpload?: any;
};

export default function UploadCareButton({ onUpload }: Props) {
  const router = useRouter();
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null);

  useEffect(() => {
    const handelUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl);
      if (file) {
        router.refresh();
      }
    };
    ctxProviderRef.current?.addEventListener(
      "file-upload-success",
      handelUpload
    );
  }, []);

  const ctxName = "my-uploader";

  return (
    <div>
      <lr-config ctx-name={ctxName} pubkey="45fbb04f12071a1daf05" />
      <lr-file-uploader-regular
        ctx-name={ctxName}
        css-src={`${process.env.NEXT_PUBLIC_UPLOAD_CARE_CSS_SRC}${LR.PACKAGE_VERSION}${process.env.NEXT_PUBLIC_UPLOAD_CARE_SRC_PACKAGE}`}
      />
      <lr-upload-ctx-provider ref={ctxProviderRef} ctx-name={ctxName} />
    </div>
  );
}
