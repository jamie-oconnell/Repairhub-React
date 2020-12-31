import React from "react";
import PageHeader from "../components/layout/PageHeader";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";
import CustomersTable from "../components/tables/Customers";
import useRouter from "../hooks/router";
import Checkbox from "../components/ui/Checkbox";
import { Link } from "react-router-dom";
import { useCustomersQuery } from "../generated/graphql";
import Pagination from "../components/ui/Pagination";

interface Props {}

const Customers = (props: Props) => {
  const router = useRouter();
  const customers = useCustomersQuery();
  const data = React.useMemo(
    () => [
      {
        id: 1,
        first_name: "Phillipp",
        last_name: "Stathers",
        name: "Phillipp Stathers",
        phone: "386-802-8147",
        email: "pstathers0@barnesandnoble.com",
        ticket_status: "Closed",
        last_ticket_created: "7/22/2020",
      },
      {
        id: 2,
        first_name: "Kessiah",
        last_name: "Arnholtz",
        name: "Kessiah Arnholtz",
        phone: "180-934-6307",
        email: "karnholtz1@shutterfly.com",
        ticket_status: "Overdue",
        last_ticket_created: "1/12/2020",
      },
      {
        id: 3,
        first_name: "Foster",
        last_name: "McCaughen",
        name: "Foster McCaughen",
        phone: "378-643-0169",
        email: "fmccaughen2@engadget.com",
        ticket_status: "Open",
        last_ticket_created: "5/15/2020",
      },
      {
        id: 4,
        first_name: "Alvira",
        last_name: "Linden",
        name: "Alvira Linden",
        phone: "980-478-9100",
        email: "alinden3@craigslist.org",
        ticket_status: "Open",
        last_ticket_created: "10/13/2020",
      },
      {
        id: 5,
        first_name: "Ulrica",
        last_name: "Sieghard",
        name: "Ulrica Sieghard",
        phone: "979-461-3939",
        email: "usieghard4@reuters.com",
        ticket_status: "Overdue",
        last_ticket_created: "7/2/2020",
      },
      {
        id: 6,
        first_name: "Joeann",
        last_name: "Thyng",
        name: "Joeann Thyng",
        phone: "155-332-5760",
        email: "jthyng5@gnu.org",
        ticket_status: "Open",
        last_ticket_created: "1/16/2020",
      },
      {
        id: 7,
        first_name: "Ignacius",
        last_name: "VanBrugh",
        name: "Ignacius VanBrugh",
        phone: "158-526-3037",
        email: "ivanbrugh6@cloudflare.com",
        ticket_status: "Overdue",
        last_ticket_created: "3/26/2020",
      },
      {
        id: 8,
        first_name: "Austin",
        last_name: "Dunston",
        name: "Austin Dunston",
        phone: "180-608-0992",
        email: "adunston7@netlog.com",
        ticket_status: "Open",
        last_ticket_created: "12/12/2019",
      },
      {
        id: 9,
        first_name: "Joice",
        last_name: "Conradie",
        name: "Joice Conradie",
        phone: "239-285-1247",
        email: "jconradie8@so-net.ne.jp",
        ticket_status: "Open",
        last_ticket_created: "1/9/2020",
      },
      {
        id: 10,
        first_name: "Gaby",
        last_name: "Ortner",
        name: "Gaby Ortner",
        phone: "304-584-7243",
        email: "gortner9@hp.com",
        ticket_status: "Closed",
        last_ticket_created: "1/23/2020",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Customer Name",
        accessor: "name", // accessor is the "key" in the data
        Cell: ({ row, cell }: any) => (
          <>
            <Checkbox {...row.getToggleRowSelectedProps()} />
            <Link to={`/customers/view/${row.original.id}`} className="ml-4 text-oceanBlue">
              {cell.value}
            </Link>
          </>
        ),
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Ticket Status",
        accessor: "ticket_status",
      },
      {
        Header: "Last Ticket Created",
        accessor: "last_ticket_created",
      },
    ],
    []
  );
  return (
    <>
      <PageHeader>
        <span className="textstyle-header flex-1">Customers</span>
        <Button variant="secondary">Import Customers</Button>
        <Button
          onClick={(e) => router.push("/customers/create")}
          variant="primary"
          className="ml-2"
        >
          Create Customer
        </Button>
      </PageHeader>
      <PageHeader>
        <div className="flex-1 flex">
          <TextInput
            className="w-searchBar"
            icon="search"
            placeholder="Search customer"
          ></TextInput>
          <Button className="ml-2" variant="secondary">
            Filters
          </Button>
        </div>
        <Pagination
          firstValue={1}
          lastValue={20}
          total={1240}
          canNextPage={true}
          canPreviousPage={false}
        />
      </PageHeader>
      <div className="w-full px-8 py-8 flex justify-center">
        <div className="container">
          <CustomersTable
            fetchData={() => console.log("fetch data")}
            pageCount={10}
            columns={columns}
            data={data}
          />
        </div>
      </div>
    </>
  );
};

export default Customers;
