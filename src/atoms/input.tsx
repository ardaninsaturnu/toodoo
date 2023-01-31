import { ReactNode, SyntheticEvent } from "react";
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
  onChange?: (e: SyntheticEvent) => void;
  required?: boolean
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
    checked,
    onChange,
    required
  } : PropTypes ) => {

  return(
    <label htmlFor={name} className={`${ type === 'checkbox' ? 'checkbox-wrapper' : 'input-label' }`}>
      {label}
      {
        type === "select" ? (
          <select
            onChange={onChange}
            className={ className }
            name={ name }
            value={ value }
            required={required}
            placeholder={ placeholder }>
            { children }
          </select>
        ) : type === 'checkbox' ? (
          <>
            <input
              onChange={onChange}
              className={ className }
              type={ type }
              name={ name }
              checked= { checked }
              required={required}
              placeholder={ placeholder }/>
          </>
        ) : (
          <input
            onChange={onChange}
            className={ className }
            type={ type }
            name={ name }
            value={value}
            required={required}
            placeholder={ placeholder }/>
        )
      }
    </label>
  )
}

export default Input;
