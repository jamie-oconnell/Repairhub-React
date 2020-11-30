import React, { useEffect } from "react";
import {
  usePagination,
  useTable,
  Column,
  useSortBy,
  useRowSelect,
} from "react-table";
import Checkbox from "../ui/Checkbox";
import {
  Table as TableUI,
  Body as TableBodyUI,
  Head as TableHeadUI,
  Header as TableHeaderUI,
  Cell as TableCellUI,
  Row as TableRowUI,
} from "../ui/table/";

interface TableProps {
  columns: Column<object>[];
  data: any[] | null | undefined;
  fetchData: Function;
  pagination?: boolean;
  loading?: boolean;
  pageCount: number;
}

const Table: React.FC<TableProps> = (props: TableProps): React.ReactElement => {
  const {
    columns,
    data,
    fetchData,
    loading,
    pagination,
    pageCount: controlledPageCount,
  } = props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    setPageSize,
    nextPage,
    previousPage,
    selectedFlatRows,
    state: { pageIndex, pageSize, sortBy, selectedRowIds },
  } = useTable(
    {
      columns,
      data: data || [],
      manualSortBy: true,
      autoResetPage: false,
      autoResetSortBy: false,
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    useSortBy,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "_selector",
          disableResizing: true,
          disableGroupBy: true,
          minWidth: 45,
          width: 45,
          maxWidth: 45,
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <Checkbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    },
    usePagination,
    useRowSelect
  );

  useEffect(() => {
    fetchData({ pageIndex, pageSize, sortBy });
  }, [sortBy, fetchData, pageIndex, pageSize]);

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
          {page.map((row) => {
            prepareRow(row);
            return (
              <TableRowUI {...row.getRowProps()} key={String(row.id)}>
                {row.cells.map((cell) => {
                  return (
                    <TableCellUI
                      {...cell.getCellProps()}
                      key={String(cell.column?.id)}
                    >
                      <span>{cell.render("Cell")}</span>
                    </TableCellUI>
                  );
                })}
              </TableRowUI>
            );
          })}
          <TableRowUI>
            {loading ? (
              // Use our custom loading state to show a loading indicator
              <TableCellUI>Loading...</TableCellUI>
            ) : (
              <TableCellUI>
                Showing {page.length} of ~{controlledPageCount * pageSize}{" "}
                results
              </TableCellUI>
            )}
          </TableRowUI>
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
    // {pagination && (
    //   <div className="pagination">
    //     <button onClick={() => previousPage()}>
    //       LEFT
    //     </button>

    //     <button onClick={() => nextPage()}>
    //       RIGHT
    //     </button>
    //   </div>
    // )}
  );
};

Table.defaultProps = {
  data: [],
};

export default Table;
