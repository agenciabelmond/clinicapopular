export function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Contorno externo azul escuro */}
      <path
        d="M50 5C25 5 10 25 10 50C10 75 20 95 30 115C35 125 40 135 50 135C60 135 65 125 70 115C80 95 90 75 90 50C90 25 75 5 50 5Z"
        fill="#1a365d"
      />
      {/* Camada intermediária ciano */}
      <path
        d="M50 15C30 15 18 32 18 52C18 72 26 90 35 108C39 116 44 125 50 125C56 125 61 116 65 108C74 90 82 72 82 52C82 32 70 15 50 15Z"
        fill="#4fd1c5"
      />
      {/* Centro claro do dente */}
      <path
        d="M50 25C35 25 26 40 26 55C26 70 32 85 40 100C43 106 47 115 50 115C53 115 57 106 60 100C68 85 74 70 74 55C74 40 65 25 50 25Z"
        fill="#f7fafc"
      />
      {/* Gradiente interno */}
      <path
        d="M50 35C40 35 34 47 34 58C34 69 38 80 45 92C47 96 49 105 50 105C51 105 53 96 55 92C62 80 66 69 66 58C66 47 60 35 50 35Z"
        fill="#edf2f7"
      />
    </svg>
  )
}
