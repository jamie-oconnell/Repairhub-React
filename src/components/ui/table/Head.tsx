const Head = ({children, ...rest}:  React.HTMLProps<HTMLTableSectionElement>) => {
return <thead {...rest}>{children}</thead>;
};

export default Head;
