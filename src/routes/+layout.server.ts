import sanityClient from '@sanity/client';
import type { Carousel } from './../types/carousel';
import type { LayoutServerLoad } from './$types';
const client = sanityClient({
  projectId: import.meta.env.VITE_PROJECT_ID,
  dataset: import.meta.env.VITE_DATASET,
  apiVersion: '2021-10-21',
  useCdn: false
});

export const load = (async () => {
  const res: Carousel[] = await client.fetch(`*[_type == "carousel"]`);
  const response = res.sort((a, b) => a.id - b.id);
  if (res) {
    return { response };
  }
  return {
    status: 500,
    body: new Error('Internal Server Error')
  };
}) satisfies LayoutServerLoad;