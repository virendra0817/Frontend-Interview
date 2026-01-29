import { useBlogs } from "@/hooks/useBlogs"
import { BlogListCard } from "@/component/BlogListCard"
import { LoadingSkeleton } from "@/component/LoadingSkeleton"

export const BlogList = ({ onSelect }: { onSelect: (id: number) => void }) => {
  const { data, isLoading, isError } = useBlogs()

  if (isLoading) return <LoadingSkeleton />
  if (isError) return <p>Failed to load blogs</p>

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Latest Articles</h2>
      {data?.map(blog => (
        <BlogListCard key={blog.id} blog={blog} onSelect={onSelect} />
      ))}
    </div>
  )
}
