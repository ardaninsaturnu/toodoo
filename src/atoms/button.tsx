import {ReactComponentElement} from "react";
import "../style/atoms/button.scss";

type PropTypes = {
  text: string,
  type: "submit" | "button" | "reset" | undefined;
  icon?: ReactComponentElement<any>
  className?: string
}

const Button = ({ text, type, icon, className } : PropTypes ) => {
  return(
    <>
      <button className={`button ${ className }`} type={type}> { icon } { text } </button>
    </>
  )
}

export default Button;
