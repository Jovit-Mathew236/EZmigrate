import BlogPostsSection from "@/components/madeups/Home/modules/blog-posts-section";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children} <BlogPostsSection />
    </>
  );
}
