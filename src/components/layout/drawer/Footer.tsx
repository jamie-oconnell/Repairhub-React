import Badge from "../../ui/Badge";
import Image from "../../ui/Image";
import profile from "../../../assets/imgs/profile.png";
import Button from "../../ui/Button";

interface Props {
  userName: string| undefined;
  hideText?: boolean;
  open?: boolean;
}

const Footer = ({ userName, hideText, open }: Props) => {
  return (
    <div
      className={`flex p-4 bg-gray-95 textstyle-body text-gray-5 ${
        open ? "h-head flex-row" : "h-36 flex-col-reverse"
      } items-center`}
    >
      <Image src={profile} width={40} height={40} />
      <span className={`ml-4 flex-1 ${hideText && "hidden"}`}>{userName}</span>
      <Button variant="icon-transparent" className={`${!open && "mb-5"}`}>
        <Badge icon="notifications" content={4} />
      </Button>
    </div>
  );
};

export default Footer;
