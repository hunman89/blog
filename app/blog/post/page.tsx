import Link from 'next/link'

export default function Post() {
  return (
    <div>
      <div>Post</div>
      <div>
        Back to <Link href="/blog">Home</Link>
      </div>
    </div>
  )
}