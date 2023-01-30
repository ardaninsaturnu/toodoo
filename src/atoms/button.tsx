import {ReactComponentElement} from "react";
import "../style/atoms/button.scss";
import {Loader} from "react-feather";

type PropTypes = {
  text: string,
  type: "submit" | "button" | "reset" | undefined;
  icon?: ReactComponentElement<any>
  className?: string
  loading?: boolean
}

const Button = ({ text, type, icon, className, loading } : PropTypes ) => {
  return(
    <>
      <button className={`button ${ className }`} type={type}>{ loading ? <Loader/> : <>{ icon } { text }</>} </button>
    </>
  )
}

export default Button;
