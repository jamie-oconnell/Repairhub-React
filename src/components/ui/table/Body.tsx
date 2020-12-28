const Body = ({
  children,
  ...rest
}: React.HTMLProps<HTMLTableSectionElement>) => {
  return (
    <tbody className="" {...rest}>
      {children}
    </tbody>
  );
};

export default Body;
