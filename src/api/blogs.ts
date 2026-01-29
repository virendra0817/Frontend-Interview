import { http } from "./http"
import { Blog } from "@/types/blog"

export const getBlogs = async (): Promise<Blog[]> => {
  const { data } = await http.get("/blogs")
  return data
}

export const getBlogById = async (id: number): Promise<Blog> => {
  const { data } = await http.get(`/blogs/${id}`)
  return data
}

export const createBlog = async (
  blog: Omit<Blog, "id">
): Promise<Blog> => {
  const { data } = await http.post("/blogs", blog)
  return data
}
