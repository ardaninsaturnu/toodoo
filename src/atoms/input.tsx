import {ReactNode} from "react";
import '../style/atoms/input.scss';

type PropTypes = {
  label?: string
  type?: "text" | "checkbox" | "select" | "number" | "textarea" | "radio";
  name: string
  placeholder?: string
  children?: ReactNode
  className?: string
  value?: string
  checked?: boolean
}

const Input = (
  {
    label,
    type = "text",
    name,
    placeholder,
    children,
    className,
    value,
    checked
  } : PropTypes ) => {

  return(
    <label htmlFor={name} className="input-label">
      {label}
      {
        type === "select" ? (
          <select
            className={ className }
            name={ name }
            value={ value }
            placeholder={ placeholder }>
            { children }
          </select>
        ) : (
          <input
            className={ className }
            type={ type }
            name={ name }
            value={value}
            checked= { checked }
            placeholder={ placeholder }/>
        )
      }
    </label>
  )
}

export default Input;
