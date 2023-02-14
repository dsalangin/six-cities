import { useAppSelector } from '../../hooks';
import { getErrorMessage } from '../../store/offers-data/selectors';
import './error-message.css';

function ErrorMessage () {
  const error = useAppSelector(getErrorMessage)

  return (
    error ? <div className="error-message">{error}</div> : null
    );
}

export default ErrorMessage;
