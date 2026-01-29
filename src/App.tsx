import { useState } from "react"
import { BlogList } from "@/component/BlogList"
import { BlogDetail } from "@/component/BlogDetail"
import { CreateBlogForm } from "@/component/CreateBlogForm"

export default function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-12 gap-8">
          
          {/* LEFT COLUMN */}
          <aside className="col-span-12 md:col-span-4 space-y-6">
            <CreateBlogForm />
            <BlogList onSelect={setSelectedBlogId} />
          </aside>

          {/* RIGHT COLUMN */}
          <section className="col-span-12 md:col-span-8">
            <BlogDetail blogId={selectedBlogId} />
          </section>

        </div>
      </main>
    </div>
  )
}
