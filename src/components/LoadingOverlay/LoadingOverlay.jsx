import './LoadingOverlay.css'
import LoadingSpinner from '../../assets/loading-spinner.gif'

const LoadingOverlay = () => {
  return (
    <div className="d-flex al-center jc-center loading-overlay-container">
        <img
            src={LoadingSpinner}
            alt="Like"
            height="80px"
        />
    </div>
  )
}

export default LoadingOverlay