import Image from "next/image"
import { SignupCard } from "@/components/auth/signup-card"

export default function SignupPage() {
  return (
    <main className="min-h-dvh">
      <div className="grid min-h-dvh grid-cols-1 lg:grid-cols-[60%_40%]">
        {/* Left: full-screen image */}
        <section className="relative hidden lg:block">
          <Image
            src="/images/chibineko.png"
            alt="ChibiNeko"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-amber-200/10" />
        </section>

        {/* Right: signup area */}
        <section className="relative flex items-center justify-center bg-[radial-gradient(1200px_circle_at_30%_20%,#F7E6D5_0%,transparent_55%),radial-gradient(900px_circle_at_80%_70%,#D7E6E0_0%,transparent_60%),linear-gradient(to_bottom,#FBF7F2,#F6F2EA)] px-4 py-10">
          <div className="w-full max-w-sm">
            <SignupCard />
          </div>
        </section>
      </div>
    </main>
  )
}
