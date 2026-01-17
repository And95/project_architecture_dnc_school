import './Button.css'
import Arrow from '../../assets/white-arrow.svg'
import LoadingSpinner from '../../assets/loading-spinner.gif'

const Button = ({ arrow, buttonStyle, loading, children, ...props }) => {
  return (
    <button className={`button ${buttonStyle}`} {...props}>
      {children} {arrow && <img src={Arrow} alt="Arrow" />} {loading && <img src={LoadingSpinner} alt="Loading" height="20px" />}
    </button>
  )
}

export default Button