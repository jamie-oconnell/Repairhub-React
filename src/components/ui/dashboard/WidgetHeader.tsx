interface Props {
  name: string;
  subHeading: string;
}

const WidgetHeader = ({ name, subHeading }: Props) => {
  return (
    <>
      <div className="textstyle-body text-gray-100">{name}</div>
      <div className="textstyle-body text-gray-60">{subHeading}</div>
    </>
  );
};

export default WidgetHeader;
