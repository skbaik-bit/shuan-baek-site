"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { profile } from "@/lib/profile";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
        <div className="absolute top-24 -right-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.75))]" />
      </div>


        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-16 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto h-[280px] w-[280px] md:h-[380px] md:w-[380px]"
            >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-emerald-400 blur-2xl opacity-30" />

            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/20 bg-white/5 shadow-2xl">
                <Image
                src="/avatar.png"
                alt="Shaun Baek"
                fill
                className="object-cover"
                priority
                />
            </div>
            </motion.div>    

        {/* <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
        >
          <Sparkles className="h-4 w-4" />
          <span>Networking · One-page profile</span>
        </motion.div> */}
        <div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl"
        >
          {profile.name}
          <span className="block bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
            {profile.tagline}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          {profile.bio.join(" ")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href={profile.socials[0].href}
            className="group inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black shadow-lg shadow-white/10 transition hover:-translate-y-0.5"
          >
            Let’s connect
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="flex flex-wrap gap-2">
            {profile.socials.slice(1).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}
