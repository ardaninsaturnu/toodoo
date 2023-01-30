import {ReactComponentElement} from "react";

type PropTypes = {
  text: string,
  type: "submit" | "button" | "reset" | undefined;
  icon?: ReactComponentElement<any>
}

const Button = ({ text, type, icon } : PropTypes ) => {
  return(
    <>
      <button className="button" type={type}> { icon } { text } </button>
    </>
  )
}

export default Button;
