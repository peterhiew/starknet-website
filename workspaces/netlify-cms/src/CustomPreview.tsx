import React, { useEffect, useRef } from "react";
import { PreviewTemplateComponentProps } from "netlify-cms-core";
import { useWindowSize } from "./useWindowSize";
import { convertStringTagsToArray } from "@starknet-io/cms-utils/src/index";

export enum CustomPreviewType {
  EVENTS = "EVENTS",
  JOBS = "JOBS",
  TUTORIALS = "TUTORIALS",
  POST = "POST",
  PAGE = "PAGE",
}

type CustomPreviewProps = {
  entry: PreviewTemplateComponentProps["entry"];
  type: CustomPreviewType;
};

export default function CustomPreview(props: CustomPreviewProps) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [refresh, setRefresh] = React.useState(false);
  const { height } = useWindowSize();

  useEffect(() => {
    const { entry } = props;
    let data = entry.getIn(["data"]).toJS();
    if (props.type === CustomPreviewType.TUTORIALS) {
      data.tags = convertStringTagsToArray(data.tags);
    }

    ref.current?.contentWindow?.postMessage(
      {
        type: props.type,
        payload: data,
      },
      "*"
    );
  }, [props, refresh]);

  return (
    <div>
      <iframe
        ref={ref}
        width="100%"
        height={height ? height - 100 : 500}
        src="http://localhost:3000/live-preview"
        title="Events item preview"
        frameBorder="0"
        onLoad={() => {
          setTimeout(() => {
            setRefresh((prev) => !prev);
          }, 300);
        }}
      ></iframe>
    </div>
  );
}
