const Error = ({ error }) => {
  return (
    <div className="page-message page-message--error xs-mb2">
      <svg
        className="page-message__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 38 38"
        aria-hidden="true"
      >
        <title>Error</title>
        <path d="M19 16.878l-6.364-6.363-2.12 2.12L16.878 19l-6.365 6.364 2.12 2.12L19 21.122l6.364 6.365 2.12-2.12L21.122 19l6.365-6.364-2.12-2.12L19 16.877z" />
      </svg>
      <div>{error}</div>
    </div>
  );
};
export default Error;