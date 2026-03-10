import Image from "next/image"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#1a365d]">
      {/* Header com Logo - Fundo Azul */}
<header className="w-full py-3 flex justify-center bg-[#0f2744]">
  <Image
    src="/logomenu.png"
    alt="Dentistas Consultório Popular"
    width={260}
    height={95}
    priority
    className="h-auto w-auto max-w-[260px]"
  />
</header>
      {/* Conteúdo Principal */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-white/90 text-base md:text-lg mb-6 max-w-xl">
          Conecte-se agora com a equipe da Dentistas Consultório Popular e continue seu agendamento com segurança.
        </p>
        
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-3xl mb-10 text-balance">
          Clique no botão abaixo para prosseguir seu atendimento
        </h1>

        <WhatsAppButton />
      </section>

      {/* Footer - Fundo Azul */}
      <footer className="w-full py-4 px-6 flex items-center justify-center bg-[#0f2744]">
        <div className="flex items-center gap-3">
          <Image
            src="/denterodape.png"
            alt="Dentistas Popular"
            width={32}
            height={40}
            className="h-auto w-auto max-h-[40px]"
          />
          <p className="text-white/80 text-sm">
            Dentistas Popular ® Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
