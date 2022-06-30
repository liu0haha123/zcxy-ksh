import React from "react";

type Props = {
    name:string
}
const Icon: React.FC<Props> = (props) => {
  return (
    <svg className="icon">
      <use xlinkHref={"#icon-" + props.name} />
    </svg>
  );
};


export default Icon