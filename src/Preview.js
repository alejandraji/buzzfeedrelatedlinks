
const Preview = ({ state, handleEdit }) => {
  const linkItems = state.links.map((link) => {
    return (
      <li class="bfp-related-links__list-item">
        <a href={link.url} class="bfp-related-links__link">
          {link.title}
        </a>
        <span class="bfp-related-links__meta">
          <span class="bfp-related-links__author">{link.author}</span>{" "}
          <span aria-hidden="true">&middot;</span> {link.published}
        </span>
      </li>
    );
  });

  return (
    <div className="xs-p1">
      <aside class="bfp-related-links">
        <h2 class="bfp-related-links__title">{state.title}</h2>
        <ul class="bfp-related-links__list">{linkItems}</ul>
      </aside>
      <button type="button" className="button" onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
};

export default Preview;