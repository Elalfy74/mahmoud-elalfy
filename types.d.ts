interface ISkill {
  name: string;
  icon: (props: IconProps) => JSX.Element;
  type: 'skill' | 'tool';
}

interface IProject {
  _id: string;
  type: string;
  desc: string;
  title: string;
  previewLink: string;
  githubLink: string;
  mainImage: MainImg;
  tools: {
    title: string;
    mainImage: MainImg;
  }[];
}

interface MainImg {
  asset: { url: string };
}
