interface Props {
  id?: string;
  indeterminate?: boolean;
  [x: string]: any;
}

const Checkbox = (props: Props) => {
  return (
    <label className="inline-block relative cursor-pointer w-4 h-4">
      <input
        className="absolute opacity-0 cursor-pointer h-0 w-0"
        type="checkbox"
        {...props}
      />
      <span className="absolute top-0 left-0 bg-transparent border border-gray-20 h-4 w-4 flex p-0.5 hover:border-oceanBlue">
        {props.checked && <div className="bg-oceanBlue flex-1"></div>}
      </span>
    </label>
  );
};

export default Checkbox;
