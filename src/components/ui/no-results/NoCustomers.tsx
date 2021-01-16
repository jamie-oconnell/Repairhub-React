import Icon from "../Icon";

interface Props {}

const NoCustomers = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
      <Icon icon="customers" size={80} className="text-gray-20" />
      <div className="textstyle-emphasisedbody text-gray-100">
        There are no customers found
      </div>
      <div className="textstyle-body text-gray-60">
        There are no results that match your search. Try adjusting your search.
      </div>
    </div>
  );
};

export default NoCustomers;
