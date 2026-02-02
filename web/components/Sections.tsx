"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/profile";

function Card({
  title,
  desc,
  tags,
  link,
}: {
  title: string;
  desc: string;
  tags?: string[];
  link?: string;
}) {
  const inner = (
    <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        {link ? (
          <span className="text-xs text-white/50 opacity-0 transition group-hover:opacity-100">
            open →
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>
      {tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noreferrer" className="block h-full">
      {inner}
    </a>
  ) : (
    inner
  );
}

export default function Sections() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-20">
      {/* highlights */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        {profile.highlights.map((h) => (
          <Card key={h.title} title={h.title} desc={h.desc} />
        ))}
      </motion.div>

      {/* projects */}
      <div className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              What I’m building
            </h2>
            <p className="mt-2 text-sm text-white/65">
              최근 관심 프로젝트/주제들 — 네트워킹 때 이걸로 대화 시작하기 좋게!
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {profile.projects.map((p) => (
            <Card
              key={p.title}
              title={p.title}
              desc={p.desc}
              tags={p.tags}
              link={p.link !== "#" ? p.link : undefined}
            />
          ))}
        </motion.div>
      </div>

      {/* footer */}
      <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-6 text-white/75">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm">짧게 커피챗/콜도 좋아요.</p>
            <p className="mt-1 text-xs text-white/55">
              메일/링크드인으로 편하게 연락 주세요.
            </p>
          </div>
          <a
            href={profile.socials[0].href}
            className="rounded-2xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
