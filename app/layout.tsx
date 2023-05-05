import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sascha Timme",
  description: "Software Engineer and Mathematician",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} bg-gradient-to-tr from-gray-900 to-black min-h-full`}
      >
        {children}
      </body>
    </html>
  )
}
