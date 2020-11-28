interface Props {
  tenantName: string;
  hideText?: boolean;
}

const Header = ({ tenantName, hideText }: Props) => {
  return (
    <div
      className={`flex p-4 bg-gray-95 textstyle-body text-gray-5 h-head items-center`}
    >
      <span className={`${hideText && "hidden"}`}>{tenantName}</span>
    </div>
  );
};

export default Header;
