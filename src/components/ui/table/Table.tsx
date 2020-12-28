const Table = ({ children }: React.HTMLProps<HTMLTableElement>) => {
  return (
    <table className="bg-white w-full border border-gray-10 textstyle-body">
      {children}
    </table>
  );
};

export default Table;
