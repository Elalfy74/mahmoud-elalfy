import sanityClient from '@/utils/sanity';

export function getTestimonials() {
  return sanityClient.fetch(
    `*[_type == 'testimonial']{
        _id,
        author_name,
        author_avatar{
          asset->{
            url
          },
        },
        author_major,
        body
    }`
  );
}
