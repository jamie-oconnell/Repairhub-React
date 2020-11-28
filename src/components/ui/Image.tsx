interface Props {
  src:  string;
}

const Image = ({ src, ...props }: Props) => {
  return <img src={src} {...props}></img>;
};

export default Image;
