import { Link } from "react-router-dom";
import Icon from "../../ui/Icon";
import { useLocation } from "react-router-dom";

interface Props {
  items: { label: string; icon: string; link: string }[][];
  hideLabels?: boolean;
}

const Menu = ({ items, hideLabels }: Props) => {
  const location = useLocation();
  let currentPath = location.pathname;

  return (
    <div>
      {items.map((section) => {
        return (
          <div className="my-4">
            {section.map((item) => {
              return (
                <ul className="flex flex-col w-full">
                  <li className="px-4 py-1 h-12 flex items-center">
                    <Link
                      to={item.link}
                      className={`flex items-center h-full w-full px-2 text-gray-600 hover:bg-gray-90 ${
                        currentPath === item.link && "bg-gray-90 text-gray-5"
                      }`}
                    >
                      <span className="flex items-center justify-center text-gray-60">
                        <Icon icon={item.icon} />
                      </span>
                      <span
                        className={`ml-3 text-gray-60 textstyle-emphasisedbody ${
                          hideLabels && "hidden"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
