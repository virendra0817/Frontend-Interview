import { useBlog } from "@/hooks/useBlogs"
import { Badge } from "@/components/ui/badge"
import { LoadingSkeleton } from "./LoadingSkeleton"

export const BlogDetail = ({ blogId }: { blogId: number | null }) => {
  const { data, isLoading } = useBlog(blogId)

  if (!blogId) return <p>Select a blog to read</p>
  if (isLoading) return <LoadingSkeleton />

  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      <img
        src={data!.coverImage}
        alt={data!.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-6 space-y-6">
        <div className="flex gap-2">
          {data!.category.map(cat => (
            <Badge key={cat}>{cat}</Badge>
          ))}
        </div>

        <h1 className="text-3xl font-bold">{data!.title}</h1>

        <p className="text-muted-foreground">
          {new Date(data!.date).toLocaleDateString()}
        </p>

        <p className="text-gray-700">{data!.description}</p>

        <div className="text-gray-800 leading-relaxed">
          {data!.content}
        </div>
      </div>
    </div>
  )
}
