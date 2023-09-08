import './globals.css'
import Link from "next/link"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <head><title>hunman&apos;s blog</title></head>
      <body>
        <div className="max-w-4xl mx-auto py-10 px-4">
          <header>
            <div className="flex items-center justify-between border-stone-700 border-b-2">
              <nav className="flex flex-row items-center justify-between w-full font-bold text-stone-700 px-1">
                <div className=' text-6xl'>Hunman</div>
                <div className='flex flex-row space-x-6'>
                  <Link href="/">Home</Link>
                  <a href="https://www.linkedin.com/in/hunman/" target="_blank">About</a>
                </div>
              </nav>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
