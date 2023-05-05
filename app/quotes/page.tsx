import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function Quotes() {
  return (
    <main className="space-y-3 max-w-lg mx-auto py-6">
      <Link href="/" className="flex space-x-1 items-center text-teal-200">
        <ChevronLeft /> <span>Home</span>
      </Link>
      <h1 className="font-medium">
        Some of my favourite quotes{" "}
        <span className="font-medium text-gray-400">(in order of discovery)</span>
      </h1>

      <div className="text-gray-200 border-l-2 border-gray-200 pl-3">
        Email from Steve to Himself
        <br />
        [No Subject]
        <br />
        From: Steve Jobs
        <br />
        To: Steve Jobs
        <br />
        Subject:
        <br />
        Date: September 2, 2010, 11:08 p.m.
        <br />
        I grow little of the food I eat, and of the little I do grow I did not breed or
        perfect the seeds.
        <br />
        I do not make any of my own clothing.
        <br />
        I speak a language I did not invent or refine.
        <br />
        I did not discover the mathematics I use.
        <br />
        I am protected by freedoms and laws I did not conceive of or legislate, and do not
        enforce or adjudicate.
        <br />
        I am moved by music I did not create myself.
        <br />
        When I needed medical attention, I was helpless to help myself survive.
        <br />
        I did not invent the transistor, the microprocessor, object oriented programming, or
        most of the technology I work with.
        <br />
        I love and admire my species, living and dead, and am totally dependent on them for
        my life and well being.
        <br />
        Sent from my iPad
      </div>

      <hr className="!my-6" />

      <div className="text-gray-200 border-l-2 border-gray-200 pl-3">
        <p className="mb-2">
          It is not the critic who counts; not the man who points out how the strong man
          stumbles, or where the doer of deeds could have done them better. The credit
          belongs to the man who is actually in the arena, whose face is marred by dust and
          sweat and blood; who strives valiantly; who errs, who comes short again and again,
          because there is no effort without error and shortcoming; but who does actually
          strive to do the deeds; who knows great enthusiasms, the great devotions; who
          spends himself in a worthy cause; who at the best knows in the end the triumph of
          high achievement, and who at the worst, if he fails, at least fails while daring
          greatly, so that his place shall never be with those cold and timid souls who
          neither know victory nor defeat.
        </p>
        <br /> -- Theodore Roosevelt
      </div>

      <hr className="!my-6" />

      <div className="text-gray-200 border-l-2 border-gray-200 pl-3">
        <p className="mb-2">
          Remembering that I'll be dead soon is the most important tool I've ever
          encountered to help me make the big choices in life.
        </p>
        <p className="mb-2">
          Almost everything--all external expectations, all pride, all fear of embarrassment
          or failure--these things just fall away in the face of death, leaving only what is
          truly important.{" "}
        </p>
        <p className="mb-2">
          Remembering that you are going to die is the best way I know to avoid the trap of
          thinking you have something to lose. You are already naked. There is no reason not
          to follow your heart.{" "}
        </p>
        <p className="mb-2">
          No one wants to die. Even people who want to go to heaven don't want to die to get
          there. And yet, death is the destination we all share. No one has ever escaped it,
          and that is how it should be, because death is very likely the single best
          invention of life. It's life's change agent. It clears out the old to make way for
          the new.
        </p>
        -- Steve Jobs
      </div>
    </main>
  )
}
