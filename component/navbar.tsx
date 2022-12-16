import Link from "next/link";

export default function NavBar() {
    return <>
        <nav>
            <Link href="/blog/post">post</Link>
            <Link href="/blog/about">about</Link>
        </nav>
    </>
}