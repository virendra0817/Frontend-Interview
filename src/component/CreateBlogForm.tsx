import { useCreateBlog } from "@/hooks/useBlogs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export const CreateBlogForm = () => {
  const { mutate, isPending } = useCreateBlog()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutate({
      title: "New Blog",
      category: ["FINANCE"],
      description: "Short description",
      date: new Date().toISOString(),
      coverImage: "",
      content: "Blog content",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input placeholder="Title" />
      <Textarea placeholder="Description" />
      <Button type="submit" disabled={isPending}>
        Create Blog
      </Button>
    </form>
  )
}
