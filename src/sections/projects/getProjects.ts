import sanityClient from '@/utils/sanity';

export function getProjects() {
  return sanityClient.fetch<IProject[]>(
    `*[_type == 'project']{
        _id,
        title,
        type,
        desc,
        mainImage{
          asset->{
            url
          },
        },
      'tools':tools[]->{
        title,
        mainImage{
          asset->{
            url
          },
        },
      },
      githubLink,
      previewLink
    }`
  );
}
