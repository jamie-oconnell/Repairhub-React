interface Props {
  src:  string;
  width?: number;
  height?: number;
  alt?: string;
  [x:string] : any
}

const Image = ({ src, width, height, alt,...props }: Props) => {
  return <img alt={alt} src={src} width={width} height={height} {...props}></img>;
};

export default Image;
