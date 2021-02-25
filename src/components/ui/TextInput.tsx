import Icon from "./Icon";

interface Props {
  placeholder?: string;
  icon?: string;
  className?: string;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  isError?: boolean;
}

const TextInput = ({
  placeholder,
  icon,
  id,
  value,
  onChange,
  type,
  className,
  isError,
}: Props) => {
  return (
    <div
      className={`relative flex flex-wrap items-stretch focus:text-oceanBlue ${
        className && className
      }`}
    >
      {icon && (
        <span className="z-10 h-full leading-snug font-normal text-center text-gray-60 absolute bg-transparent rounded text-base items-center  justify-center w-8 pl-3 py-2.5 flex">
          <Icon icon={icon}></Icon>
        </span>
      )}
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type ? type : "text"}
        placeholder={placeholder}
        className={`px-4 py-2.5 placeholder-gray-60 border border-gray-20 text-gray-100 relative bg-white outline-none focus:outline-none focus:border-oceanBlue w-full textstyle-body placeholder-opacity-100 caret-oceanBlue transition ${
          icon && "pl-10"
        }  ${isError && 'border-danger'}`}
      />
    </div>
  );
};

export default TextInput;
