"use client"

import Image from "next/image"

type AboutSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  bioOpen: boolean
  setBioOpen: (open: boolean) => void
}

export function AboutSection({ isVisible, setSectionRef }: AboutSectionProps) {
  return (
    <section
      id="chi-siamo"
      ref={(element) => setSectionRef("chi-siamo", element)}
      style={{ background: "radial-gradient(ellipse at 20% 60%, #4A1030 0%, #250818 60%, #1A0510 100%)" }}
      className={`bg-card py-20 transition-all duration-700 sm:py-28 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-secondary">
            <Image
              src="/additional/chi_siamo_image.jpg"
              alt="Allieve della scuola di danza Il Sogno"
              fill
              className="object-cover"
            />
          </div>

          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-primary uppercase">Chi siamo</p>
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Una scuola dove la danza diventa crescita, disciplina e palcoscenico.
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-pretty text-foreground">
              <p>
                Il Sogno di Rita Castanò nasce da una lunga storia di passione, sacrificio e amore per la danza. Dal 2018 accompagniamo bambini,
                ragazzi e adulti in un percorso artistico completo, pensato per formare non solo il corpo, ma anche l&apos;espressività, la sicurezza
                e la personalità di ogni allievo.
              </p>
              <p>
                La scuola accoglie bambini a partire dai 3 anni, con percorsi adatti a ogni età e livello: dalla propedeutica alla danza classica,
                dal moderno al contemporaneo, fino alle discipline coreografiche e ai corsi di perfezionamento.
              </p>
              <p>
                Il nostro obiettivo è aiutare ogni studente a vivere la danza in modo completo: tecnica, emozione, presenza scenica, preparazione
                agli spettacoli, esami e concorsi.
              </p>
              <p>
                Qui la danza non è soltanto un corso. È un percorso fatto di impegno, passione e crescita artistica, dove ogni allievo può sentirsi
                guidato, valorizzato e pronto a portare il proprio sogno sul palco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
