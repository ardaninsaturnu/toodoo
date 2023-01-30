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
    <label htmlFor={name} className={`${ type === 'checkbox' ? 'checkbox-wrapper' : 'input-label' }`}>
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
        ) : type === 'checkbox' ? (
          <>
            <input
              className={ className }
              type={ type }
              name={ name }
              checked= { checked }
              placeholder={ placeholder }/>
          </>
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
