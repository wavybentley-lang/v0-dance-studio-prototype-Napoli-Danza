"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type AboutSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  bioOpen: boolean
  setBioOpen: (open: boolean) => void
}

export function AboutSection({ isVisible, setSectionRef }: AboutSectionProps) {
  const imageRef = useRef<HTMLDivElement>(null)
  const [imageScale, setImageScale] = useState(false)

  useEffect(() => {
    if (!imageRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setImageScale(true); observer.disconnect() } },
      { threshold: 0.3 },
    )
    observer.observe(imageRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="chi-siamo"
      ref={(element) => setSectionRef("chi-siamo", element)}
      style={{ background: "radial-gradient(ellipse at 20% 60%, #161616 0%, #111111 60%, #0A0A0A 100%)" }}
      className={`bg-card py-20 transition-all duration-700 sm:py-28 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            ref={imageRef}
            className={`relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-secondary transition-transform duration-1000 ${imageScale ? "scale-105" : "scale-100"}`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <Image src="/owner.jpg" alt="Napoli Danza owner" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-primary uppercase">Chi siamo</p>
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">Una scuola dove la danza diventa passione, disciplina e crescita.</h2>
            <div className="space-y-5 text-lg leading-relaxed text-pretty text-foreground">
              <p>Napoli Danza A.S.D. accompagna bambini, ragazzi e adulti in un percorso formativo pensato per sviluppare tecnica, espressivit&agrave; e fiducia in s&eacute; stessi attraverso l&apos;arte del movimento.</p>
              <p>La nostra scuola accoglie allievi di ogni et&agrave; e livello, offrendo un ambiente stimolante e professionale in cui apprendere, migliorare e vivere la danza come esperienza artistica e personale.</p>
              <p>Attraverso lezioni, spettacoli, eventi e momenti di condivisione, ogni studente ha l&apos;opportunit&agrave; di crescere non solo come ballerino, ma anche come persona, sviluppando disciplina, determinazione e spirito di squadra.</p>
              <p>Il nostro obiettivo &egrave; valorizzare il talento di ogni allievo, accompagnandolo passo dopo passo in un percorso fatto di impegno, emozione e soddisfazione.</p>
              <p>Per noi la danza non &egrave; soltanto una disciplina. &Egrave; un linguaggio capace di ispirare, un luogo in cui esprimersi liberamente e una passione da coltivare ogni giorno.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
