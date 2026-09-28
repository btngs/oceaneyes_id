'use client';

import { Suspense } from 'react';
import FeaturePage from '../features/company-profile/news-and-update/news-and-update';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <FeaturePage />
    </Suspense>
  );
}
