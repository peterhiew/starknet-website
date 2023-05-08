"use client";

import EventCard from "src/app/[locale]/events/(components)/EventCard";
import { isUpcomingEvent } from "src/app/[locale]/events/(components)/utils";
import JobsCard from "src/app/[locale]/jobs/(components)/JobsCard";
import usePreviewData, { CustomPreviewType } from "./usePreviewData";
import TutorialsCard from "src/app/[locale]/tutorials/(components)/TutorialsCard";
import PostByCategory from "src/app/[locale]/posts/[category]/(components)/PostByCategory";

export default function LivePreivewPage() {
  const data = usePreviewData();

  return (
    <div className="preview-content">
      {data.type === CustomPreviewType.EVENTS && (
        <EventCard
          event={data.payload}
          isPastEvent={
            !isUpcomingEvent(
              data.payload?.start_date || "",
              data.payload?.end_date || ""
            )
          }
        />
      )}
      {data.type === CustomPreviewType.JOBS && <JobsCard hit={data.payload} />}
      {data.type === CustomPreviewType.TUTORIALS && (
        <TutorialsCard hit={data.payload} />
      )}
      {data.type === CustomPreviewType.POST && (
        <PostByCategory
          post={data.payload}
          category={{
            id: data.payload.category,
            name: data.payload.category,
            slug: data.payload.category,
          }}
          locale="en"
          topics={[]}
        />
      )}
    </div>
  );
}
