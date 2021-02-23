import React from "react";
import PageHeader from "../components/layout/PageHeader";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";
import CustomersTable from "../components/tables/Table";
import useRouter from "../hooks/router";
import Checkbox from "../components/ui/table/Checkbox";
import { Link } from "react-router-dom";
import { useGetCustomersTableLazyQuery } from "../generated/graphql";
import Pagination from "../components/ui/Pagination";
import { useDebounce } from "react-use";
import NoCustomers from "../components/ui/no-results/NoCustomers";
import Filters from "../components/ui/Filters";


interface Props {}

const Customers = (props: Props) => {
  const router = useRouter();
  const [getCustomers, { loading, data }] = useGetCustomersTableLazyQuery();
  const [selectedRows, setSelectedRows] = React.useState({});
  const [searchText, setSearchText] = React.useState("");
  const [allRowsSelected, setAllRowsSelected] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [after, setAfter] = React.useState<string | undefined>();
  const [before, setBefore] = React.useState<string | undefined>();
  //const [catalog, setCatalog] = React.useState<string[] | undefined>();

  //Filter values
  const [filters, setFilters] = React.useState({});

  const tableData = data?.customers.edges.map((edge) => {
    return {
      ...edge?.node,
    };
  });
  const selectedLength = Object.keys(selectedRows).length;
  const pageData = data?.customers.pageInfo;

  useDebounce(
    () => {
      setSearchQuery(searchText);
    },
    250,
    [searchText]
  );

  const clearSelected = () => {
    setAllRowsSelected(false);
    setSelectedRows({});
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
        sortDescFirst: true
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
        <div className="flex-1">
          <span className="textstyle-header">
            {selectedLength === 0 ? "Customers" : `${selectedLength} Customers`}
          </span>
          {selectedLength !== 0 && (
            <>
              <Button
                className="ml-8"
                variant="text"
                onClick={() => setAllRowsSelected(true)}
              >{`Select All (${data?.customers.totalCount})`}</Button>
              <Button className="ml-8" variant="text" onClick={clearSelected}>
                Deselect All
              </Button>
            </>
          )}
        </div>

        {selectedLength === 0 ? (
          <Button variant="secondary">Import Customers</Button>
        ) : (
          <Button variant="secondary">Delete</Button>
        )}
        {selectedLength === 0 ? (
          <Button
            onClick={(e) => router.push("/customers/create")}
            variant="primary"
            className="ml-2"
          >
            Create Customer
          </Button>
        ) : (
          <Button variant="primary" className="ml-2">
            Export
          </Button>
        )}
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
          <Filters
            pageName="Customers"
            setFilters={setFilters}
          />
        </div>
        <Pagination
          pageSize={data?.customers.edges.length}
          total={data?.customers.totalCount}
          canNextPage={pageData?.hasNextPage}
          canPreviousPage={pageData?.hasPreviousPage}
          onPageForward={() => {
            setAfter(pageData?.endCursor);
          }}
          onPageBack={() => {
            setBefore(pageData?.startCursor);
          }}
        />
      </PageHeader>
      <div className="w-full px-8 py-8 flex justify-center">
        <div className="container">
          <CustomersTable
            columns={columns}
            data={tableData}
            onFetchData={getCustomers}
            search={searchQuery}
            filters={filters}
            after={after}
            before={before}
            loading={loading}
            noResults={<NoCustomers />}
            selectedRows={selectedRows}
            onSelectedRowsChange={setSelectedRows}
            allRowsSelected={allRowsSelected}
          />
        </div>
      </div>
    </>
  );
};

export default Customers;
