import { createClient } from '@sanity/client';

export default createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: 'production',
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
});
