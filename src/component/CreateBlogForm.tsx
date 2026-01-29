import { useState } from "react"
import { useCreateBlog } from "@/hooks/useBlogs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export const CreateBlogForm = () => {
  const { mutate, isPending } = useCreateBlog()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    mutate({
      title,
      description,
      content,
      category: ["TECH"],
      coverImage: "",
      date: new Date().toISOString(),
    })

    // clear form
    setTitle("")
    setDescription("")
    setContent("")
  }

  return (
    <form onSubmit={submitHandler} className="space-y-3">
      <Input
        placeholder="Blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <Textarea
        placeholder="Short description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <Textarea
        placeholder="Blog content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <Button type="submit" disabled={isPending}>
        {isPending ? "Adding..." : "Add Blog"}
      </Button>
    </form>
  )
}
