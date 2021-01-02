import React from "react";
import PageHeader from "../components/layout/PageHeader";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";
import CustomersTable from "../components/tables/Table";
import useRouter from "../hooks/router";
import Checkbox from "../components/ui/Checkbox";
import { Link } from "react-router-dom";
import { useGetCustomersTableLazyQuery } from "../generated/graphql";
import Pagination from "../components/ui/Pagination";
import { useDebounce } from "react-use";

interface Props {}

const Customers = (props: Props) => {
  const router = useRouter();
  const [getCustomers, { loading, data }] = useGetCustomersTableLazyQuery({fetchPolicy: "network-only"});
  const [controlledPageIndex, setControlledPage] = React.useState(0);
  const [searchText, setSearchText] = React.useState("");
  const [searchQuery, setSearchQuery] = React.useState("");
  const tableData = data?.customers.edges.map((edge) => {
    return {
      name: `${edge?.node.firstName} ${edge?.node.lastName}`,
      ...edge?.node,
    };
  });

  useDebounce(
    () => {
      setSearchQuery(searchText);
    },
    250,
    [searchText]
  );

  const useControlledState = (state: any) => {
    return React.useMemo(
      () => ({
        ...state,
        pageIndex: controlledPageIndex,
      }),
      [state]
    );
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Customer Name",
        accessor: "name", // accessor is the "key" in the data
        Cell: ({ row, cell }: any) => (
          <>
            <Checkbox {...row.getToggleRowSelectedProps()} />
            <Link
              to={`/customers/view/${row.original.id}`}
              className="ml-4 text-oceanBlue"
            >
              {cell.value}
            </Link>
          </>
        ),
      },
      {
        Header: "Phone",
        accessor: "phoneNumber",
        disableSortBy: true,
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
            value={searchText}
            onChange={({ currentTarget }) => {
              setSearchText(currentTarget.value);
            }}
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
            pageCount={10}
            columns={columns}
            data={tableData}
            onFetchData={getCustomers}
            useControlledState={useControlledState}
            search={searchQuery}
          />
        </div>
      </div>
    </>
  );
};

export default Customers;
