import { Blog } from "@/types/blog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const BlogListCard = ({
  blog,
  onSelect,
}: {
  blog: Blog
  onSelect: (id: number) => void
}) => (
  <Card
    onClick={() => onSelect(blog.id)}
    className="cursor-pointer hover:shadow-md transition"
  >
    <CardContent className="p-4 space-y-2">
      <div className="flex justify-between text-xs text-muted-foreground">
        <Badge variant="secondary">{blog.category[0]}</Badge>
        <span>{new Date(blog.date).toLocaleDateString()}</span>
      </div>

      <h3 className="font-semibold leading-tight">{blog.title}</h3>

      <p className="text-sm text-gray-600 line-clamp-2">
        {blog.description}
      </p>
    </CardContent>
  </Card>
)
