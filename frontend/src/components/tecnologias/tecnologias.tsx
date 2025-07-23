import { Tecnologia } from "@core"
import Image from "next/image"

export interface TecnologiasProps {
	listas: Tecnologia[]
	tamanhoMenor?: boolean
}

export default function Tecnologias(props: TecnologiasProps) {
	return props.listas ? (
		<div className="flex justify-center gap-4 flex-wrap w-4/5">
			{props.listas.map((tecnologias) => (
				<div key={tecnologias.id} className="flex flex-col items-center gap-1">
					<span
						className={`
							relative w-11 h-11 rounded-xl overflow-hidden
							${!props.tamanhoMenor && "sm:h-16 sm:w-16 "}
						`}
					>
						<Image
							src={tecnologias.imagem}
							alt={tecnologias.nome}
							fill
							className="object-contain"
						/>
					</span>
					<span className="text-[10px] text-zinc-400">{tecnologias.nome}</span>
				</div>
			))}
		</div>
	) : null
}
