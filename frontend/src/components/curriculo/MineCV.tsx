import Image from "next/image"

export default function MineCV() {
  return (
    <div className="flex flex-1 flex-col xl:flex-row items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
      
      <div className="relative min-w-72 h-64 order-2 xl:order-1 xl:self-end">
        <Image 
          src="/minha-foto.png" 
          alt="Foto de perfil" 
          fill 
          className="object-cover rounded-xl" 
        />
      </div>

      <div className="flex flex-col gap-5 p-6 order-1 xl:order-2 items-center xl:items-start text-center xl:text-left">
        <div className="flex flex-col items-center xl:items-start">
          <span className="bg-gradient-to-r from-red-500 via-white to-white bg-clip-text text-transparent text-2xl font-bold">
            Eduardo Carmo
          </span>
          <span>Desenvolvedor Fullstack</span>
        </div>
        <p className="text-sm">
          Formado em análise e desenvolvimento de sistemas, sou apaixonado por tecnologia
          e inovação. Há 3 anos atuo na área como desenvolvedor de software e trabalhei
          com arquitetura de software em projetos.
        </p>
      </div>
    </div>
  )
}
