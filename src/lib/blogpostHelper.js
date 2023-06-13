const blogPostDataUrl =
  "https://launchdarkly.com/page-data/blog/category/best-practices/page-data.json";

async function getBlogPosts(enableBlogPost = true, cacheOpts = {}) {
  if (!enableBlogPost) {
    return [
      {
        author: "",
        title: 'Enable flagKey "simple-toggle" to fetch blog posts.',
        image: "/launchdarkly.svg",
      },
    ];
  }

  const res = await fetch(blogPostDataUrl, cacheOpts);
  const json = await res.json();

  return json.result.data.categoryPosts.nodes.map(({ data }) => {
    const { author, featured_image, title } = data;
    const name = author.document.data.author_name.text;
    const blog_title = title.text;
    const blog_image = featured_image.url;
    return {
      author: name,
      title: blog_title,
      image: blog_image,
    };
  });
}

export default { getBlogPosts };
