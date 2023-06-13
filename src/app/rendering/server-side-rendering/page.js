import styles from "../../page.module.css";

import LDSDK from "@/lib/ldServer";
import BlogPostHelper from "@/lib/blogpostHelper";
import BlogEntryCard from "@/components/BlogEntryCard";
import { Suspense } from "react";

// In the app directory, we can colocate our data fetching inside our
//           React components using Server Components. This allows us to send less
//           JavaScript to the client, while maintaining the rendered HTML from the
//           server. By setting the cache option to no-store, we can indicate that
//           the fetched data should never be cached. This is similar to
//           getServerSideProps in the pages directory.
//- GET /rendering/server-side-rendering 200 in 133ms
//  │
//  └──── GET https://launchdarkly.com/page-data/blog/category.. 200 in 47ms (cache: MISS)
//
const context = {
  kind: "server-context",
  key: "nextjs-app-component",
};

export default async function page() {
  const enableBlogPost = await LDSDK.getVariation(
    "simple-toggle",
    context,
    false
  );

  // mimic getServerSideProps by fetching every request, will show cache miss
  const cacheOpts = { cache: "no-store" };

  const blogPosts = await BlogPostHelper.getBlogPosts(
    enableBlogPost,
    cacheOpts
  );
  const customStyles =
    blogPosts.length == 1 ? styles.center : (styles.center, styles.grid);
  return (
    <>
      <h1 className={styles.center}>App Router: Server Side Rendering </h1>

      <main className={styles.main}>
        <div className={customStyles}>
          <Suspense fallback={"Loading..."}>
            {blogPosts.map(({ author, title, image }) => {
              return (
                <BlogEntryCard title={title} image={image} author={author} />
              );
            })}
          </Suspense>
        </div>
      </main>
    </>
  );
}
