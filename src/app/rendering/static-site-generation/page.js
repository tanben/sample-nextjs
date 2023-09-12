import styles from "../../page.module.css";
import LDSDK from "@/lib/ldServer";
import BlogPostHelper from "@/lib/blogpostHelper";
import BlogEntryCard from "@/components/BlogEntryCard";
import { Suspense } from "react";

// In the app directory, data fetching with fetch() will default to
//         cache: 'force-cache', which will cache the request data until manually
//         invalidated. This is similar to getStaticProps in the pages directory.
//
//   GET /rendering/static-site-generation 200 in 73ms
//    │
//    └──── GET https://launchdarkly.com/page-data/blog/category.. 200 in 2ms (cache: HIT)
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

  const blogPosts = await BlogPostHelper.getBlogPosts(enableBlogPost);
  const customStyles =
    blogPosts.length == 1 ? styles.center : (styles.center, styles.grid);
  return (
    <>
      <h1 className={styles.center}>App Router: Static Generation </h1>

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
