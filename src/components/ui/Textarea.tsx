interface Props {
  placeholder?: string;
  icon?: string;
  className?: string;
  id?: string;
}

const Textarea = (props: Props) => {
  return (
    <textarea className="px-4 py-2.5 placeholder-gray-60 border border-gray-20 text-gray-100 relative bg-white outline-none focus:outline-none focus:shadow-outline focus:border-oceanBlue w-full textstyle-body placeholder-opacity-100 resize-none caret-oceanBlue"></textarea>
  );
};

export default Textarea;
