import Link from 'next/link'

export default function About() {
  return (
    <div>
      <div>About</div>
      <div>
        Back to <Link href="/blog">Home</Link>
      </div>
    </div>
  )
}