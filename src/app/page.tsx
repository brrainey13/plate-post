import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/d6fa6663-8332-4019-8bb9-5ffb218df637-f0urtj.png",
  "https://utfs.io/f/39181734-227e-4fc3-97a4-0c4bee107093-6mktrr.png",
  "https://utfs.io/f/e7aa5788-3871-4195-ad40-d74643f76a57-df4cqj.png",
  "https://utfs.io/f/5d859223-7aba-4d09-9024-da79252189f2-yoym18.png",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany()

  console.log(posts)


  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48 gap-4">
            {post.name}
          </div>
        ))}
        {[...mockImages,...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 gap-4">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
