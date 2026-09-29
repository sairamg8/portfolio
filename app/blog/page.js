import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "../components/homepage/blog/blog-card";

export const metadata = {
  title: "Blog",
  alternates: { canonical: "/blog" },
};

// Re-fetch the article list at most once an hour.
export const revalidate = 3600;

// Returns [] instead of throwing, so a dev.to outage can never break the build or the page.
async function getBlogs(username) {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${encodeURIComponent(username)}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function page() {
  // No dev.to account configured: there is no blog to show.
  if (!personalData.devUsername) notFound();

  const blogs = (await getBlogs(personalData.devUsername)).filter(
    (blog) => blog?.cover_image
  );

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <h1 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            Blog
          </h1>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      ) : (
        <p className="text-center text-[#d3d8e8]">
          Articles can&apos;t be loaded right now.{" "}
          <Link
            className="text-[#16f2b3]"
            href={`https://dev.to/${personalData.devUsername}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read them on dev.to
          </Link>
          .
        </p>
      )}
    </div>
  );
}

export default page;
