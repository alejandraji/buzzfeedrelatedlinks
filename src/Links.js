const Links = ({ links, deleteLink }) => {
  const linkItems = links.map((link) => {
    return (
      <li key={link.id} className="bold xs-my1 xs-flex xs-flex-justify-space-between xs-col-12">
        <div className="xs-border xs-mr1 xs-p1">{link.title}</div>
        <div className="xs-border xs-flex xs-flex-align-center xs-p1" onClick={() => deleteLink(link)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 38 38"
            class="svg-4 svg-black"
            aria-hidden="true"
          >
            <title>Trash</title>
            <path d="M32.9 7H26V6c0-3.3-2.7-6-6-6h-2c-3.3 0-6 2.7-6 6v1H5c-1.1 0-2 .9-2 2s.9 2 2 2h1l1.1 27h23.8l1.3-27h.7c1.1 0 2-.9 2-2s-.8-2-2-2zM15 6c0-1.7 1.3-3 3-3h2c1.7 0 3 1.3 3 3v1h-8V6zm12 29H11l-1-24h18l-1 24zm-12.5-4.4l-.8-15c0-.9.6-1.6 1.5-1.6.8 0 1.5.6 1.5 1.4l.8 15c0 .9-.6 1.6-1.5 1.6-.8 0-1.5-.6-1.5-1.4zm6-.2l.8-15c0-.8.7-1.4 1.5-1.4.9 0 1.5.7 1.5 1.6l-.8 15c0 .8-.7 1.4-1.5 1.4s-1.5-.7-1.5-1.6z" />
          </svg>
        </div>
      </li>
    );
  });

  return (
    <div>
      <ul className="list-unstyled">{linkItems}</ul>
    </div>
  );
};
export default Links;