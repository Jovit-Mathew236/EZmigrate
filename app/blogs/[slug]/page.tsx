import { getBlogPost } from "@/types/blog-data";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

export default async function BlogPost(props: { params: Params }) {
  const params = await props.params;
  const { slug } = params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-black pt-28 pb-10">
      <div className="container mx-auto px-5">
        <div className="w-full mx-auto">
          <div className="mb-6">
            <h2 className="text-3xl font-light mb-4">Blog Post</h2>
            <h1 className="text-4xl md:text-5xl font-light mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 py-5">
              <Image
                src="/images/logo.webp"
                alt={post.alt}
                width={500}
                height={500}
                className="object-cover w-16 h-16 rounded-full border border-stone-500"
              />
              <p className="text-2xl font-light">EZmigrate</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row md:items-center gap-0 md:space-x-4 font-normal">
                <span>Published in Blog on {post.date}.</span>
                {/* <span>•</span> */}
                <span>Last Updated on {post.date}.</span>
                {/* <span>•</span> */}
                <span>By {post.author}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="relative w-screen -ml-5 mb-8 md:ml-0 md:w-full aspect-video overflow-hidden">
            <Image
              src={post.image}
              alt={post.alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div
            className="prose prose-invert max-w-none
            prose-h2:text-xl prose-h2:font-light prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-lg prose-p:font-light prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline
            prose-strong:font-medium
            prose-ul:list-disc prose-ul:ml-4
            prose-ol:list-decimal prose-ol:ml-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
}
