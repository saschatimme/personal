import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function Books() {
  return (
    <main className="space-y-3 max-w-lg mx-auto py-6">
      <Link href="/" className="flex space-x-1 items-center text-teal-200">
        <ChevronLeft /> <span>Home</span>
      </Link>
      <h1 className="font-medium">
        Some of my favourite books{" "}
        <span className="font-medium text-gray-400">(in order of discovery)</span>
      </h1>

      <ul>
        <li>
          A Mind at Play: How Claude Shannon Invented the Information Age How Claude Shannon
          Invented the Information Age
        </li>
        <li>Deep Work: Rules for Focused Success in a Distracted World</li>
        <li>The Everything Store: Jeff Bezos and the Age of Amazon</li>
      </ul>
    </main>
  )
}
