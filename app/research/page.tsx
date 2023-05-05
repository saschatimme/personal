import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function Research() {
  return (
    <main className="space-y-6 p-6">
      <Link href="/" className="flex space-x-1 items-center text-teal-200">
        <ChevronLeft /> <span>Home</span>
      </Link>

      <h4>
        <strong>Publications</strong>
      </h4>
      <ul className="space-y-2 list-disc list-inside">
        <li>
          <a
            className="text-teal-100 hover:text-teal-300 underline"
            href="https://arxiv.org/abs/2011.05000"
          >
            Certifying zeros of polynomial systems using interval arithmetic
          </a>{" "}
          (2022, with Paul Breiding and Kemal Rose), ACM Transactions on Mathematical
          Software 49 (1), 1-14
        </li>
        <li>
          <a
            className="text-teal-100 hover:text-teal-300 underline"
            href="https://arxiv.org/abs/2009.13408"
          >
            Catastrophe in Elastic Tensegrity Frameworks
          </a>{" "}
          (2021, with Alex Heaton), accepted for publication in{" "}
          <em> Arnold Mathematical Journal</em>.
        </li>
        <li>
          <a
            className="text-teal-100 hover:text-teal-300 underline"
            href="https://arxiv.org/abs/1902.02968"
          >
            Mixed Precision Path Tracking for Polynomial Homotopy Continuation
          </a>{" "}
          (2021),{" "}
          <em>Advances in Computational Mathematics volume 47, Article number: 75</em>
        </li>
        <li>
          <a
            className="text-teal-100 hover:text-teal-300 underline"
            href="https://arxiv.org/abs/1909.00566"
          >
            Estimating linear covariance models with numerical nonlinear algebra
          </a>{" "}
          (2020 with Bernd Sturmfels and Piotr Zwiernik, arXiv:1909.00566).{" "}
          <em>Algebraic Statistics 11-1 (2020), 31--52.</em>
        </li>
        <li>
          <a
            className="text-teal-100 hover:text-teal-300 underline"
            href="https://arxiv.org/abs/1909.06620"
          >
            96120: The degree of the linear orbit of a cubic surface
          </a>{" "}
          (2019 with Laura Brustenga and Madeleine Weinstein).{" "}
          <em>Le Matematiche 75 (2), 425-437.</em>
        </li>
        <li>
          <a
            className="text-teal-100 hover:text-teal-300 underline"
            href="https://rdcu.be/b51NP"
          >
            Polymake.jl: A new interface to polymake
          </a>
          (2020 with Marek Kaluba and Benjamin Lorenz).
          <em>
            Mathematical Software – ICMS 2020. Lecture Notes in Computer Science, 12097,
            377-385, 2020
          </em>
        </li>
        <li>
          <a
            className="text-teal-100 hover:text-teal-300 underline"
            href="https://link.springer.com/article/10.1007/s11075-020-00956-z"
          >
            Backward Error Measures for Roots of Polynomials
          </a>{" "}
          (2020 with Simon Telen and Marc Van Barel).
          <em>Numerical Algorithms.</em>
        </li>
        <li>
          <a
            className="text-teal-100 hover:text-teal-300 underline"
            href="https://www.ams.org/journals/notices/202001/rnoti-p30.pdf"
          >
            3264 Conics in a Second
          </a>{" "}
          (2020, with Paul Breiding and Bernd Sturmfels).{" "}
          <em>
            Notices of the American Mathematical Society <strong>67</strong> 30-37{" "}
          </em>
          .
        </li>
        <li>
          <a
            className="text-teal-100 hover:text-teal-300 underline"
            href="https://arxiv.org/abs/1711.10911"
          >
            {" "}
            HomotopyContinuation.jl: A package for homotopy continuation in Julia
          </a>
          (2018 with Paul Breiding).
          <em>
            Mathematical Software – ICMS 2018. Lecture Notes in Computer Science, 10931,
            458-465, 2018
          </em>
        </li>
      </ul>
      <div>
        <h4>
          <strong>Ph.D. Thesis</strong>
        </h4>
        <p className="mt-3">
          I wrote my Ph.D. thesis entitled <strong>Numerical Nolinear Algebra</strong> under
          the supervision of Michael Joswig and Bernd Sturmfels. It is available{" "}
          <a
            className="text-teal-100 hover:text-teal-300 underline"
            href="/thesis.pdf"
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </div>
    </main>
  )
}
