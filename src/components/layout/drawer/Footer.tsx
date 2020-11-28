import Badge from "../../ui/Badge";
import Image from "../../ui/Image";
const profile = require("../../../assets/imgs/profile.png");

interface Props {
  userName: string;
  hideText?: boolean;
}

const Footer = ({ userName, hideText }: Props) => {
  return (
    <div className="flex p-4 bg-gray-95 textstyle-body text-gray-5 h-head items-center">
      <Image src={String(profile)} />
      <span className={`${hideText && "hidden"}`}>{userName}</span>
      <Badge className={`${hideText && "hidden"}`} icon="notifications" content={4} />
    </div>
  );
};

export default Footer;
