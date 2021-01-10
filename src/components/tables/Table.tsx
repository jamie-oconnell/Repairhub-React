import React from "react";
import {
  useTable,
  Column,
  useSortBy,
  useRowSelect,
  UseTableOptions,
  TableState,
} from "react-table";
import {
  Table as TableUI,
  Body as TableBodyUI,
  Head as TableHeadUI,
  Header as TableHeaderUI,
  Cell as TableCellUI,
  Row as TableRowUI,
} from "../ui/table";
import Icon from "../ui/Icon";
//@ts-ignore
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

interface TableProps {
  columns: Column<object>[];
  data: any[] | null | undefined;
  onFetchData: Function;
  useControlledState: any;
  pagination?: boolean;
  loading?: boolean;
  pageCount: number;
  search: string;
  pageData?: PageData
  after: string | undefined;
  before: string | undefined;
}

type PageData = {
    endCursor: string;
    startCursor: string;
    hasNextPage: string;
    hasPreviousPage: string;
}

const Table: React.FC<TableProps> = (props: TableProps): React.ReactElement => {
  const { columns, data, onFetchData, useControlledState, search, after, before } = props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    selectedFlatRows,
    state: { selectedRowIds, sortBy, pageIndex, pageSize=5 },
  } = useTable(
    {
      columns,
      data: data || [],
      manualSortBy: true,
      autoResetSortBy: false,
      disableMultiSort: true,
      useControlledState,
    },
    useSortBy,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for options
        ...columns,
        {
          id: "_options",
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: () => {
            return (
              <Menu
                menuButton={
                  <MenuButton>
                    <Icon icon="more" />
                  </MenuButton>
                }
              >
                <MenuItem>New Ticket</MenuItem>
                <MenuItem>New Device</MenuItem>
                <MenuItem>Delete</MenuItem>
              </Menu>
            );
          },
        },
      ]);
    },
    useRowSelect
  );

  // Update data on table state change
  React.useEffect(() => {
    let sortDirection = "ASC";
    if (sortBy.length > 0 && sortBy[0].desc === true) {
      sortDirection = "DESC";
    }
    onFetchData({ variables: { pageIndex, pageSize, sortDirection, search, after, before} });
  }, [onFetchData, pageIndex, pageSize, sortBy, search, after, before]);


  return (
    <>
      <TableUI {...getTableProps()}>
        <TableHeadUI>
          {headerGroups.map((headerGroup) => (
            <TableRowUI
              {...headerGroup.getHeaderGroupProps()}
              key={String(headerGroup.id)}
            >
              {headerGroup.headers.map((column) => (
                <TableHeaderUI
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={String(column.id)}
                >
                  <span>{column.render("Header")}</span>
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </TableHeaderUI>
              ))}
            </TableRowUI>
          ))}
        </TableHeadUI>
        <TableBodyUI {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRowUI {...row.getRowProps()} isSelected={row.isSelected}>
                {row.cells.map((cell) => {
                  return (
                    <TableCellUI
                      {...cell.getCellProps()}
                      key={String(cell.column?.id)}
                    >
                      <span className="flex items-center">
                        {cell.render("Cell")}
                      </span>
                    </TableCellUI>
                  );
                })}
              </TableRowUI>
            );
          })}
        </TableBodyUI>
      </TableUI>
      <pre>
        <code>
          {JSON.stringify(
            {
              selectedRowIds: selectedRowIds,
              "selectedFlatRows[].original": selectedFlatRows.map(
                (d) => d.original
              ),
            },
            null,
            2
          )}
        </code>
      </pre>
    </>
  );
};

Table.defaultProps = {
  data: [],
};

export default Table;
