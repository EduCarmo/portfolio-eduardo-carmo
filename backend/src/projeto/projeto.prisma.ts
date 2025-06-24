import { Projeto } from "@core"
import { Injectable } from "@nestjs/common"
import { PrismaProvider } from "src/db/prisma.provider"

@Injectable()
export class ProjetoPrisma {
	constructor(private readonly prisma: PrismaProvider) {}

	async obterTodos(): Promise<Projeto[]> {
		return await this.prisma.projetos.findMany({
			include: { tecnologias: true},
		}) as Projeto[]
	}

	async obterPorId(id: number): Promise<Projeto | null> {
		return await this.prisma.projetos.findUnique({
			where: {
				id,
			},
			include: { tecnologias: true },
		}) as Projeto
	}
}
