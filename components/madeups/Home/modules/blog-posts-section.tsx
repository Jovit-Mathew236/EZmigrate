import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Top Study Abroad Destinations for 2024",
    image: "/images/blog1.png",
    readTime: "13 mins read",
    date: "November 28, 2024",
    author: "Anjaly Chandran",
    alt: "Study Abroad 2024",
  },
  {
    title: "Why Studying Abroad is a Game-Changer",
    image: "/images/blog2.png",
    readTime: "25 mins read",
    date: "November 28, 2024",
    author: "John",
    alt: "Why Study Abroad",
  },
  {
    title: "Affordable Countries for Quality Education",
    image: "/images/blog3.png",
    readTime: "5 mins read",
    date: "November 28, 2024",
    author: "Evan",
    alt: "Affordable Education",
  },
];

const BlogPostsSection = () => {
  return (
    <div className="relative z-10 bg-black text-white py-10 md:py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-light mb-10 md:mb-16">
          Blog Posts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-400">
                  <span className="font-light text-xs">{post.readTime}</span>
                  <span className="font-light text-xs">{post.date}</span>
                </div>
                <h3 className="text-xl font-light">{post.title}</h3>
                <p className="text-sm text-gray-400">By {post.author}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-16">
          <Link
            href="/blogs"
            className="inline-flex font-light w-full md:w-auto justify-center items-center border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300"
          >
            Explore all posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostsSection;
