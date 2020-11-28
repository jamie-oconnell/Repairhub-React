import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import Items from "./Items";

interface Props {
  open: boolean;
}

const Drawer = ({ open }: Props) => {
  return (
    <div
      className={`flex flex-col fixed top-0 left-0 h-screen bg-gray-100 ${
        open ? "w-drawer" : "w-drawerSmall"
      }`}
    >
      <Header tenantName="Dharma Initiative" hideText={!open}></Header>
      <div className="flex-1 overflow-y-auto">
        <Menu items={Items} hideLabels={!open} />
      </div>
      <Footer userName="Jack Shepherd" hideText={!open}></Footer>
    </div>
  );
};

export default Drawer;
