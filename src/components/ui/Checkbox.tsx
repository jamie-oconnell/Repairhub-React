  import React from 'react';
  interface Props {
    id?: string;
    indeterminate?: boolean;
    [x: string]: any;
  }
  
  const Checkbox = ({indeterminate, checked = false, ...rest}: Props) => {
    const [initChecked, setInitChecked] = React.useState(false);
    return (
      <label className="inline-block relative cursor-pointer w-4 h-4">
        <input
          className="absolute opacity-0 cursor-pointer h-0 w-0"
          type="checkbox"
          onClick={() => setInitChecked(!initChecked)}
          {...rest}
        />
        <span className="absolute top-0 left-0 bg-transparent border border-gray-20 h-4 w-4 flex p-0.5 hover:border-oceanBlue">
          {checked && <div className="bg-oceanBlue flex-1"></div>}
          {!checked && initChecked && <div className="bg-oceanBlue flex-1"></div>}
        </span>
      </label>
    );
  };
  
  export default Checkbox;
  