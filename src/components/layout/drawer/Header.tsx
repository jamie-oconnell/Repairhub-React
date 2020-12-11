import Image from "../../ui/Image";
import logo from "../../../assets/imgs/logo.png";

interface Props {
  tenantName: string;
  hideText?: boolean;
}

const Header = ({ tenantName, hideText }: Props) => {
  return (
    <div
      className={`flex p-4 bg-gray-95 textstyle-body text-gray-5 h-head items-center`}
    >
       <Image src={logo} width={40} height={40} />
      <span className={`ml-4 ${hideText && "hidden"}`}>{tenantName}</span>
    </div>
  );
};

export default Header;
