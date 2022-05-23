// Some fields were omitted, because we don't need them.
export default interface Post {
  id: number;
  modified_gmt: string;
  link: string;
  title: {
    rendered: string;
  };
  featured_media: string;
  type: string;
  _embedded: {
    author: Author[];
  };
}

interface Author {
  name: string;
  link: string;
}
