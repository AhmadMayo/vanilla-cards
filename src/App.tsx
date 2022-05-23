import { useEffect, useState } from "react";
import type Post from "./Post";
import PostCard from "./PostCard";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json ",
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((response) => {
        if (response.status < 200 || response.status > 299) {
          throw new Error("response error");
        }

        return response.json();
      })
      .then((result: Post[]) => setPosts(result))
      .catch((error: Error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="l-application">
      <main className="l-main">
        <div className="row">
          {isLoading && (
            <div className="u-align--center">
              <i className="p-icon--spinner u-animation--spin"></i>
            </div>
          )}
          {error != null && (
            <div className="p-notification--negative">
              <div className="p-notification__content">
                <h2 className="p-notification__title">Error</h2>
                <p className="p-notification__message">
                  Error while fetching data.
                </p>
              </div>
            </div>
          )}
          {posts.map((post) => (
            <div className="col-small-1 col-medium-2 col-4">
              <PostCard key={post.id} post={post} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
