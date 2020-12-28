import React, { useEffect } from "react";
import { useTable, Column, useSortBy, useRowSelect } from "react-table";
import {
  Table as TableUI,
  Body as TableBodyUI,
  Head as TableHeadUI,
  Header as TableHeaderUI,
  Cell as TableCellUI,
  Row as TableRowUI,
} from "../ui/table/";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
//@ts-ignore
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

interface TableProps {
  columns: Column<object>[];
  data: any[] | null | undefined;
  fetchData: Function;
  pagination?: boolean;
  loading?: boolean;
  pageCount: number;
}

const Table: React.FC<TableProps> = (props: TableProps): React.ReactElement => {
  const { columns, data, fetchData, loading } = props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    selectedFlatRows,
    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data: data || [],
      manualSortBy: true,
      autoResetSortBy: false,
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

  // useEffect(() => {
  //   fetchData({ pageIndex, pageSize, sortBy });
  // }, [sortBy, fetchData, pageIndex, pageSize]);

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

          {/* <TableRowUI>
            {loading ? (
              // Use our custom loading state to show a loading indicator
              <TableCellUI>Loading...</TableCellUI>
            ) : (
              <TableCellUI>
                Showing {page.length} of ~{controlledPageCount * pageSize}{" "}
                results
              </TableCellUI>
            )}
          </TableRowUI> */}
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
