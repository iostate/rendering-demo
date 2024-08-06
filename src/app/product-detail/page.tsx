import Product from '@/components/product';
import Review from '@/components/review';
import { Suspense } from 'react';
export default function ProductDetailPage() {
  return (
    <div>
      <h1>Product Detail page</h1>
      <Suspense fallback={<p>Loading Product...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading Review...</p>}>
        <Review />
      </Suspense>
    </div>
  );
}
