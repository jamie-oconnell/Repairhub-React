import Image from "../../ui/Image";
import logo from "../../../assets/imgs/logo.png";
import Icon from "../../ui/Icon";
import Button from "../../ui/Button";

interface Props {
  tenantName: string;
  hideText?: boolean;
  open?: boolean;
  setOpen : Function
}

const Header = ({ tenantName, hideText, open, setOpen }: Props) => {
  return (
    <div
      className={`flex p-4 bg-gray-95 textstyle-body text-gray-5 ${open ? "h-head flex-row" : "h-32 flex-col"} items-center`}
    >
      <Image src={logo} width={40} height={40} />
      <span className={`ml-4 flex-1 ${hideText && "hidden"}`}>
        {tenantName}
      </span>
      <Button variant="icon-transparent" className={`${!open && "mt-4"}`} onClick={() => {setOpen(!open)}}>
        {open ? <Icon icon="menuOpen" /> : <Icon icon="menuOpen" />}
      </Button>
    </div>
  );
};

export default Header;
