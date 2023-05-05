import Image from "next/image"

import Link from "next/link"
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  Microscope,
  QuoteIcon,
  TwitterIcon,
} from "lucide-react"

const Links = (props: { className?: string }) => (
  <div className={"flex flex-col space-y-2 " + props.className}>
    {/* Link to my github */}
    <a
      href="https://github.com/saschatimme"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-x-2 text-gray-100 hover:text-white"
    >
      <GithubIcon className="inline h-5 w-5" /> Github
    </a>
    {/* Link to my linkedin */}
    <a
      href="https://www.linkedin.com/in/saschatimme/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-x-2 text-gray-100 hover:text-white"
    >
      <LinkedinIcon className="inline h-5 w-5" /> LinkedIn
    </a>
    {/*Twitter */}
    <a
      href="https://twitter.com/sascha_timme"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-x-2 text-gray-100 hover:text-white"
    >
      <TwitterIcon className="inline h-5 w-5" /> Twitter
    </a>
    {/*Twitter */}
    <a
      href="mailto:mail@saschatimme.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-x-2 text-gray-100 hover:text-white"
    >
      <MailIcon className="inline h-5 w-5" /> Mail
    </a>

    <hr />

    <h4 className="font-medium mt-2 mb-1">Math</h4>

    <Link
      href="/research"
      className="flex items-center gap-x-2 text-gray-100 hover:text-white"
    >
      <Microscope className="inline h-5 w-5" /> My research
    </Link>

    <a
      href="https://www.juliahomotopycontinuation.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-x-2 text-gray-100 hover:text-white"
    >
      <Image src="/julia.svg" width={20} height={20} alt="julia" /> HomotopyContinuation.jl
    </a>

    <hr />
    <h4 className="font-medium mt-2 mb-1">Misc</h4>
    <Link
      href="/quotes"
      className="flex items-center gap-x-2 text-gray-100 hover:text-white"
    >
      <QuoteIcon className="inline h-5 w-5" /> Favourite quotes
    </Link>
  </div>
)

export default function Home() {
  return (
    <main className={"p-6 sm:py-12 flex flex-col items-center"}>
      <div className="flex gap-x-6 mx-">
        <div className="max-sm:hidden flex flex-col space-y-2">
          <Image
            src="/profile_headshot.jpg"
            alt="Picture of the author"
            width={300}
            height={300}
            className="rounded-xl"
          />
          <Links />
        </div>
        <div className="max-w-lg space-y-6">
          <p className="max-sm:hidden text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-blue-600">
            Sascha Timme
          </p>
          <div className="flex sm:hidden gap-x-3">
            <Image
              src="/profile_headshot.jpg"
              alt="Picture of the author"
              width={120}
              height={120}
              className="rounded-xl "
            />
            <p className="leading-tight text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-blue-600">
              Sascha <br /> Timme
            </p>
          </div>
          <p>
            I'm a mathematician turned software engineer with a passion for creating
            innovative solutions. My expertise lies in full stack development using
            Typescript, React, and PostgreSQL. Currently, I serve as the Head of Engineering
            at Elara, where I lead the development of modern and intuitive maintenance
            software.
          </p>
          <p>
            My Ph.D. in mathematics from TU Berlin focused on Numerical Nonlinear Algebra -
            the intersection of Numerical Analysis and Algebraic Geometry. My proudest
            accomplishment in this field is developing HomotopyContinuation.jl, a Julia
            package designed to solve systems of polynomial equations using numerical
            homotopy continuation methods. Together with my collaborator Paul Breiding,
            we're dedicated to making complex mathematics more accessible to everyone.
          </p>
          <p>
            Before pursuing my Ph.D., I contributed to the development of the Math 42 app,
            which provided step-by-step solutions for math problems and amassed over 2
            million users. My work on the app included developing the user interface and
            graphing calculator features.
          </p>
          <p>
            If you'd like to learn more about my professional background, areas of
            expertise, or current projects, please feel free to explore my website.
          </p>
          <p>Thanks for stopping by, and I hope to hear from you soon! 🌊</p>
          <hr className="sm:hidden" />
          <Links className="sm:hidden" />
        </div>
      </div>
    </main>
  )
}
