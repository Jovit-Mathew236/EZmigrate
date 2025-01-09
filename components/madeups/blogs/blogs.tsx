"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
// import Link from "next/link";
import { useState, useMemo } from "react";

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

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Calculate pagination values
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Get current posts
  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage]);

  // Generate page numbers
  const pageNumbers = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }, [totalPages]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white pt-28 pb-10">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light">Blog Posts</h2>
          <div className="relative">
            <input
              type="search"
              placeholder="Search the blog"
              className="bg-transparent border border-white/20 rounded-full px-4 py-2 pr-10 text-sm w-[200px] md:w-[300px]"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {currentPosts.map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <span>{post.readTime}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-light leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400">By {post.author}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 left-0 w-full flex justify-center items-center space-x-2">
          <button
            className={`p-2 border border-white/20 rounded-full ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-white/10"
            }`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
          </button>

          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-full
                ${
                  currentPage === page
                    ? "bg-white text-black"
                    : "hover:bg-white/10"
                }`}
            >
              {page}
            </button>
          ))}

          <button
            className={`p-2 border border-white/20 rounded-full ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-white/10"
            }`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
