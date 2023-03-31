import getVideoMetadata from "@ui/VideoPlayer/meta/getVideoMetadata";
import VideoPage from "./(components)/VideoPage";

interface VideoParams {
  searchParams: { chapter: string };
  params: { locale: string };
}
export async function generateMetadata({
  searchParams: { chapter },
}: VideoParams) {
  return getVideoMetadata(chapter);
}

interface Props extends VideoParams {}

export default function Page({
  searchParams: { chapter },
  params: { locale },
}: Props) {
  return <VideoPage chapter={chapter} locale={locale} />;
}
