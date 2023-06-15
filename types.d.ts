interface ISkill {
  name: string;
  icon: (props: IconProps) => JSX.Element;
  type: 'skill' | 'tool';
}
