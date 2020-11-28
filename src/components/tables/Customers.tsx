import React, { useEffect } from "react";
import { usePagination, useTable, Column } from "react-table";
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
  fetchData?: Function;
  pagination?: boolean;
}

const Table: React.FC<TableProps> = (props: TableProps): React.ReactElement => {
  const { columns, data, fetchData, pagination } = props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: data || [],
      initialState: { pageIndex: 0 },
      manualPagination: true,
    },
    usePagination
  );

  useEffect(() => {
    if (pagination && fetchData) {
      fetchData({ pageIndex });
    }
  }, [pageIndex]);

  return (
      <TableUI  {...getTableProps()}>
        <TableHeadUI>
          {headerGroups.map((headerGroup) => (
            <TableRowUI
              {...headerGroup.getHeaderGroupProps()}
              key={String(headerGroup.id)}
            >
              {headerGroup.headers.map((column) => (
                <TableHeaderUI {...column.getHeaderProps()} key={String(column.id)}>
                  <span>{column.render("Header")}</span>
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
        </TableBodyUI>
      </TableUI>
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
