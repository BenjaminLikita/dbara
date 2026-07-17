import { blogPosts } from "@/lib/dbara";
import { cn } from "@/lib/utils";

export function BlogSection() {
  const featured = blogPosts.find((post) => post.featured)!;
  const listPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section id="blog" className="pb-30 text-center">
      <h2 className="mx-auto my-4.5 mb-15 max-w-170 text-[2rem] md:text-4xl font-semibold">
        Discover The Latest Cyber Security Blog Articles
      </h2>

      {/* <div className="grid gap-12.5 text-left lg:grid-cols-[1.1fr_0.9fr]"> */}
      <div className="grid gap-12.5 text-left lg:grid-cols-[1.1fr_0.9fr] w-[95%] md:w-[80%] lg:w-[70%] mx-auto">
        <article className="featured-post">
          <div className="relative mb-5">
            <img
              src={featured.image}
              alt="Digital shield graphic over a circuit board, representing cyber security"
              className="block h-65 w-full rounded-lg object-cover"
            />
            <span className="absolute bottom-5 left-6 inline-block rounded-full bg-[#dbf0ed] px-3 py-1 text-[0.7rem] font-medium text-accent-teal">
              Tips & Tricks
            </span>
          </div>
          <h3 className="mb-3 text-[1.6rem] font-semibold hover:text-accent-teal">
            {featured.title}
          </h3>
          <p className="post-meta mb-3.5 text-xs text-[#aab9c8]">
            by <span className="text-accent-teal">{featured.author}</span>{" "}
            &nbsp;•&nbsp; <span>{featured.date}</span>
          </p>
          <p className="text-sm text-text-muted">{featured.excerpt}</p>
        </article>

        <div className="flex flex-col gap-9">
          {listPosts.map((post) => (
            <article key={post.title} className={cn("space-y-2")}>
              <h3 className="text-sm font-medium">{post.title}</h3>
              <p className="post-meta text-xs text-[#aab9c8]">
                by <span className="text-accent-teal">{featured.author}</span>{" "}
                &nbsp;•&nbsp; <span>{featured.date}</span>
              </p>
              <p className="text-xs text-text-muted font-medium">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
