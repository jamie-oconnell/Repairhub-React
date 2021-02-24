import React from "react"
import Button from "./Button"
import TextInput from "./TextInput"
import { CustomerFilterInput, CreatedAtInput } from "../../generated/graphql";

type Props = {
  pageName: String;
  setFilters: Function;
}

const Filters: React.FC<Props> = (props: Props) => { 
  const {
    pageName, setFilters
  } = props;
  const [show, setShow] = React.useState(false);
  const [fromDate, setFromDate] = React.useState<string>("");
  const [toDate, setToDate] = React.useState<string>("");
  const itemStyle = "flex items-center px-2 py-3 w-52 ring-1 ring-black ring-opacity-5 shadow-sm";

  const resetFilters = () => {
    setFromDate("");
    setToDate("");
    
  }

  React.useEffect(() => {
    const createdAt : CreatedAtInput = {
      gte: fromDate ? fromDate : undefined,
      lte: toDate ? toDate : undefined
    };
    const filtersValue : CustomerFilterInput = {
      field: "createdAt",
      createdAt,
    };
    setFilters(filtersValue);
  }, [fromDate, toDate, setFilters]);

  return (
    <div className="relative inline-block text-left">
      <Button className="ml-2 flex items-center" variant="secondary" onClick={() => setShow(!show)}>
        Filters
      </Button>
      {show &&
        <div className="origin-top-left absolute left-2 mt-2 w-auto shadow-sm bg-white ring-1 ring-black ring-opacity-5 textstyle-emphasisedbody">
          <div className="flex">
            <div className="w-56 p-2">
              <p className="px-2 py-2">{pageName} Filters</p>
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
            <p className="px-4">CreatedAt</p>
          </div>
          <div className="flex">
            <div className="w-56 p-2">
              <div className={itemStyle}>
                <span className="px-2">From</span>
                <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} max={toDate}/>
              </div>
            </div>
            <div className="w-56 p-2">
              <div className={itemStyle}>
                <span className="px-2">To</span>
                <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} min={fromDate}/>
              </div>
              <Button className="mt-24 text-blue-600" variant="icon-secondary" onClick={resetFilters} disabled={!!fromDate || !!toDate ? false : true}>
                Reset Filters
              </Button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Filters