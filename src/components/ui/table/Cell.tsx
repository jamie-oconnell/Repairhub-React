const Cell = ({ children, ...rest }: React.HTMLProps<HTMLTableCellElement>) => {
  return (
    <td className="px-4 py-tableCell text-gray-100" {...rest}>
      {children}
    </td>
  );
};

export default Cell;
