import React from "react";

interface Props {
  content: string;
  direction?: string;
}

const directionArray = [
  "bottom",
  "top",
  "left",
  "right"
];

const pointsArray = [
  "0,256 128,128 256,256",
  "0,0 128,128 256,0",
  "0,0 128,128 0,256",
  "256,0 128,128 256,256"
];

const bodyStyle = [
  "absolute bg-gray-95 text-white text-xs rounded m-1 py-3 px-4 right-0",
  "absolute bg-gray-95 text-white text-xs rounded m-1 py-3 px-4 right-0",
  "absolute bg-gray-95 text-white text-xs rounded m-1 py-3 px-4 left-0",
  "absolute bg-gray-95 text-white text-xs rounded m-1 py-3 px-4 right-0"
];

const arrowStyle = [
  "absolute text-gray-95 h-4 left-1/2 -ml-2 -top-4 text-center",
  "absolute text-gray-95 h-4 left-1/2 -ml-2 top-full text-center",
  "absolute text-gray-95 h-4 -right-4 top-1/2 -mt-2 text-center",
  "absolute text-gray-95 h-4 -left-4 top-1/2 -mt-2 text-center"
];

const Tooltip = ({ content, direction = "top" }: Props) => {
  const directionNum = directionArray.indexOf(direction);
  const [selfStyle, setSelfStyle] = React.useState([{}]);
  const id = "tooltip" + Date.now() + Math.random();
  React.useEffect(() => {
    const width = document.getElementById(id)?.clientWidth;
    const height = document.getElementById(id)?.clientHeight;
    const tempStyle = [
      {},
      {top: height ? ( - 50 - height ) + 'px' : 0},
      {top: height ? ( - height ) + 'px' : 0, left: width ? ( - 16 - width ) + 'px' : 0},
      {top: height ? ( - height ) + 'px' : 0, right: width ? ( - 16 - width ) + 'px' : 0}
    ];
    setSelfStyle(tempStyle);
  }, [])
  return (
    <div className="relative flex mx-2 h-0 z-50">
      <div id={id} className={bodyStyle[directionNum]} style={selfStyle[directionNum]}>
        {content}
        <svg className={arrowStyle[directionNum]} x="0px" y="0px" viewBox="0 0 256 256" >
          <polygon className="fill-current" points={pointsArray[directionNum]}/>
        </svg>
      </div>
    </div>
  );
};

export default Tooltip;
