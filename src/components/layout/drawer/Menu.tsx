import { Link } from "react-router-dom";
import Icon from "../../ui/Icon";
import { useLocation } from "react-router-dom";
import ReactTooltip from "react-tooltip";

interface Props {
  items: { label: string; icon: string; link: string }[][];
  hideLabels?: boolean;
  open: boolean;
}

const Menu = ({ items, hideLabels, open }: Props) => {
  const location = useLocation();
  let currentPath = location.pathname;

  return (
    <div>
      {!open &&
      <ReactTooltip place="right" type="dark" effect="solid" offset={{right: 16}} className={`menu-tooltip`}/>}
      {items.map((section, index) => {
        return (
          <div className="my-4" key={index}>
            {section.map((item, index) => {
              return (
                <ul className="flex flex-col w-full" key={index}>
                  <li className="px-4 py-1 h-12 flex items-center">
                    <Link
                      to={item.link}
                      className={`flex items-center h-full w-full transition px-2 text-gray-600 hover:bg-gray-90 ${
                        currentPath === item.link && "bg-gray-90 text-gray-5"
                      }`}
                      data-tip={item.label}
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
