type ErrorScreenProps = {
  error: string;
}

function ErrorScreen ({error}: ErrorScreenProps): JSX.Element {
  return (
    <div>{error}</div>
  );
}

export default ErrorScreen;
