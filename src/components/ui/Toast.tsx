import React from "react";

interface Props {
  content: string;
  isShow?: Boolean;
}

const Toast = ({ content, isShow = true }: Props) => {
  const [show, setShow] = React.useState(isShow);
  const id = "toast" + Date.now() + Math.random();
  const [selfStyle, setSelfStyle] = React.useState({});
  React.useEffect(() => {
    const width = document.getElementById(id)?.clientWidth;
    const tempStyle = {right: width ? `calc(50% - ${ width/2 + 'px' })` : 0}
    setSelfStyle(tempStyle);
  },[]);
  return (
    <div className="relative">
      {(show && isShow) &&
        <div id={id} className="alert-toast fixed top-0 m-8 w-5/6 md:w-full max-w-sm" style={selfStyle}>
          <div className="flex items-start justify-between w-full p-4 bg-gray-95 shadow-lg text-white">
            {content}
            <label title="Close">
              <svg className="fill-current text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" onClick={() => setShow(false)}>
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </label>
          </div>
        </div>
      }
    </div>
  );
};

export default Toast;
