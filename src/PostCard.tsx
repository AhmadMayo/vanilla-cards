import Post from "./Post";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="p-card p-card--highlighted u-no-padding">
      <div className="p-card__inner u-no-padding--bottom">
        <h2 className="u-no-margin p-muted-heading">cloud and server</h2>
      </div>
      <hr />

      <div className="p-card__inner u-no-padding--bottom">
        <img className="p-card__image" src={post.featured_media} />
      </div>
      <div className="p-card__inner u-no-padding--top u-no-padding--bottom">
        <a href={post.link}>
          <h3 className="p-heading--4">{post.title.rendered}</h3>
        </a>
      </div>
      <div className="p-card__inner u-no-padding--top u-no-padding--bottom">
        <i>
          By&nbsp;
          <a href={post._embedded.author[0].link}>
            {post._embedded.author[0].name}
          </a>
          &nbsp; on {dateFormatter.format(new Date(post.modified_gmt))}
        </i>
      </div>
      <hr />
      <div className="p-card__inner u-no-padding--top">
        <span className="p-text--small capitalize">{post.type}</span>
      </div>
    </div>
  );
}
