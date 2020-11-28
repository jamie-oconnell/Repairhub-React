import Icon from "./Icon";

interface Props {
  placeholder?: string;
  icon?: string;
  className?: string;
}

const Input = ({ placeholder, icon, className }: Props) => {
  return (
    <div
      className={`relative flex flex-wrap items-stretch focus:text-oceanBlue ${
        className && className
      }`}
    >
      <span className="z-10 h-full leading-snug font-normal text-center text-gray-60 absolute bg-transparent rounded text-base items-center  justify-center w-8 pl-3 py-2.5 flex">
        {icon && <Icon icon={icon}></Icon>}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="px-4 py-2.5 placeholder-gray-60 border border-gray-20 text-gray-100 relative bg-white outline-none focus:outline-none focus:shadow-outline focus:border-oceanBlue w-full pl-10 textstyle-body placeholder-opacity-100"
      />
    </div>
  );
};

export default Input;
