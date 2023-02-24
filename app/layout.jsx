// TODO: click profile name (edutjie) to go to profile page with only its posts
import './globals.css'
import Link from 'next/link'
import { Poppins } from "@next/font/google"

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${poppins.className}`}>
        <nav>
          <Link href="/">
            <img src="./logo-ristek.png" className="ristek-logo" />
            <h4 className="project-title">RISTEK MedSOS</h4>
          </Link>
          <Link href="/profile">
            <img src="./anonymous.png" className="profile-pic" />
            <p className="profile-name">Anonymous</p>
          </Link>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
