import { Tecnologia } from "@core"

export interface TecnologiasTrabalhadasProps {
	listas: Tecnologia[]
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
	return props.listas ? (
		<div className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border border-zinc-800 rounded-2xl">
			<div className="flex justify-center gap-x-3 flex-wrap">
				{props.listas.map((tecnologia) => (
					<div key={tecnologia.id}>
                        <span className="text-red-500 font-bold">#</span>
						<span>{tecnologia.nome}</span>
					</div>
				))}
			</div>
		</div>
	) : null
}
