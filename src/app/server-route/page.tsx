import 'server-only';
import { serverUtils } from '@/utils/serverUtils';
import ImageSlider from '@/components/ImageSlider';

export default function ServerRoutePage() {
  const result = serverUtils();
  return (
    <>
      <h1>Server Route Page</h1>
      {result}
      <ImageSlider />
    </>
  );
}
