import Icon from "./Icon";

interface Props {
  title: string;
  description: string;
  icon: string;
}

const SettingsWidget = ({ icon, title, description }: Props) => {
  return (
    <div className={`bg-white p-6 h-24 w-full flex items-center border border-gray-10`}>
      <Icon icon={icon} className={`text-gray-60`}/>
      <div className="flex-1 ml-4">
        <div className="textstyle-body text-gray-100">{title}</div>
        <div className="textstyle-body text-gray-60">{description}</div>
      </div>
    </div>
  );
};

export default SettingsWidget;
