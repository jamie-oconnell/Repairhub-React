import iconPath from "../../assets/iconsLib";

interface Props {
  size: number;
  icon: string;
  viewBox: string;
  className?: string;
}

const Icon = ({ size, icon, className, viewBox }: Props) => {
  return (
    <svg
      className={`fill-current ${className}`}
      style={{ display: "inline-block", verticalAlign: "middle" }}
      viewBox={viewBox}
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {iconPath[icon].map((path, index) => {
        return (
          <path
            key={index}
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
          ></path>
        );
      })}
    </svg>
  );
};

Icon.defaultProps = {
  size: 24,
  viewBox: "0 0 24 24",
  style: {},
  className: "",
};

export default Icon;
