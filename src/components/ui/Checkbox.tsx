interface Props {
  id?: string;
  indeterminate?: boolean;
  [x: string]: any;
}

const Checkbox = (props: Props) => {
  return <input type="checkbox" {...props}></input>;
};

export default Checkbox;
