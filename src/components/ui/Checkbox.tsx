interface Props {
  id?: string;
  indeterminate?: boolean;
  [x: string]: any;
}

const Checkbox = (props: Props) => {
  // return (
  //   // <span className="bg-white border border-gray-20 w-4 h-4 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500 p-0">
  //   //   <input type="checkbox" className="opacity-0 absolute" />
  //   //   <svg
  //   //     className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
  //   //     viewBox="0 0 16 16"
  //   //   >
  //   //     <rect width="10" height="10" />
  //   //   </svg>
  //   // </span>
  // );

  return <input type="checkbox" {...props}></input>;
};

export default Checkbox;
