const Header = ({
  children,
  ...rest
}: React.HTMLProps<HTMLTableHeaderCellElement>) => {
  return (
    <th
      className="textstyle-tableheader text-gray-60 px-4 py-tableCell text-left"
      {...rest}
    >
      {children}
    </th>
  );
};

export default Header;
