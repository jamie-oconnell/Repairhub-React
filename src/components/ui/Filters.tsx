import React from "react"
import Checkbox from "./Checkbox"
import Button from "./Button"
import TextInput from "./TextInput"
import Icon from "./Icon";

type Props = {
  isClosed?: boolean;
  isCancelled?: boolean;
  isOpen?: boolean;
  setIsClosed?: Function;
  setIsCancelled?: Function;
  setIsOpen?: Function;
}

const Filters: React.FC<Props> = (props: Props) => { 
  const {
    isClosed,
    setIsClosed,
    isCancelled,
    setIsCancelled,
    isOpen,
    setIsOpen
  } = props;
  const [show, setShow] = React.useState(false);
  const [statusCount, setStatusCount] = React.useState(0);
  const itemStyle = "flex items-center px-2 py-3 w-52";

  const resetStatus = () => {
    if(setIsClosed) setIsClosed(false);
    if(setIsCancelled) setIsCancelled(false);
    if(setIsOpen) setIsOpen(false);
  }

  React.useEffect(() => {
    setStatusCount(Number(isClosed) + Number(isCancelled) + Number(isOpen));
  }, [setStatusCount, isClosed, isCancelled, isOpen]);

  return (
    <div className="relative inline-block text-left">
      <Button className={statusCount > 0 ? "ml-2 flex items-center border-blue-600 text-blue-600 w-28" : "ml-2 flex items-center w-28"} variant="secondary" onClick={() => setShow(!show)}>
        Filters {statusCount > 0 && <p className="mx-2 w-4 bg-blue-600 text-white textstyle-label">{statusCount}</p>}
      </Button>
      {show &&
        <div className="origin-top-left absolute left-2 mt-2 w-auto shadow-sm bg-white ring-1 ring-black ring-opacity-5 textstyle-emphasisedbody">
          <div className="flex">
            <div className="w-56 p-2">
              <p className="px-2 py-2">Filters</p>
            </div>
            <div className="w-56 p-2">
              <TextInput
                className="w-52"
                icon="search"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-56 p-2">
              <div className={itemStyle}>
                <Icon icon="discount" className="text-gray-60" />
                <span className="px-2">Brand</span>
              </div>
              <div className={"relative text-blue-600 " + itemStyle}>
                <Icon icon="status" />
                <span className="px-2">Status</span>
                <div className="flex items-center absolute right-0">
                  {statusCount > 0 && <p>{statusCount}</p>}
                  <Icon icon="arrowRight"/>
                </div>
              </div>
              <div className={itemStyle}>
                <Icon icon="delete" className="text-gray-60" />
                <span className="px-2">Color</span>
              </div>
            </div>
            <div className="w-56 p-2">
              <div className={itemStyle}>
                <Checkbox checked={isClosed} onClick={() => {if(setIsClosed) setIsClosed(!isClosed)}} />
                <span className="px-2">Closed</span>
              </div>
              <div className={itemStyle}>
                <Checkbox checked={isCancelled} onClick={() => {if(setIsCancelled) setIsCancelled(!isCancelled)}} />
                <span className="px-2">Cancelled</span>
              </div>
              <div className={itemStyle}>
                <Checkbox checked={isOpen} onClick={() => {if(setIsOpen) setIsOpen(!isOpen)}} />
                <span className="px-2">Open</span>
              </div>
              <Button className="mt-24 text-blue-600" variant="icon-secondary" onClick={resetStatus} disabled={statusCount > 0 ? false : true}>
                Reset Status
              </Button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Filters