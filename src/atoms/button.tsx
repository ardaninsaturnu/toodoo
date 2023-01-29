type PropTypes = {
  text: string,
  type: "submit" | "button" | "reset" | undefined;
}

const Button = ({ text, type } : PropTypes ) => {
  return(
    <>
      <button className="button" type={type}> { text } </button>
    </>
  )
}

export default Button;
