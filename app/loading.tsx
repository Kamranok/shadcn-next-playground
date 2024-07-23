import SkeletonCard from "@/components/SkeletonCard"

export default function Loading() {
  return (
    <main className="container gap-6 pb-8 pt-6 md:py-10">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {"abcdefghi".split("").map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  )
}
