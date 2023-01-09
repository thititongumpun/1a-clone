import sanityClient from '@sanity/client';
import type { Carousel } from './../types/carousel';
import type { PageLoad } from './$types';
const client = sanityClient({
  projectId: 'ma4z32ps',
  dataset: 'production',
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
}) satisfies PageLoad;