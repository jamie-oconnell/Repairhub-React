import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import Items from "./Items";
import {useAuthState} from "../../../context/auth"


interface Props {
  open: boolean;
  setOpen: Function;
}

const Drawer = ({ open, setOpen }: Props) => {
  const {user} = useAuthState();

  return (
    <div
      className={`flex flex-col fixed top-0 left-0 h-screen bg-gray-100 ${
        open ? "w-drawer" : "w-drawerSmall"
      }`}
    >
      <Header tenantName="Dharma Initiative" hideText={!open} open={open} setOpen={setOpen}></Header>
      <div className="flex-1 overflow-y-auto">
        <Menu items={Items} hideLabels={!open}  open={open}/>
      </div>
      <Footer userName={user?.username} hideText={!open} open={open} ></Footer>
    </div>
  );
};

export default Drawer;
