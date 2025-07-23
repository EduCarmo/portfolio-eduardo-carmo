"use client"
import { Id } from "@core"
import useLocalStorage from "./useLocalStorage"
import Mensagem from "@/model/Mensagem"

export default function useChat() {
	const [chatId] = useLocalStorage<string>("chatId", Id.gerar())
    const [mensagens, setMensagens] = useLocalStorage<Mensagem[]>("mesagens", [])

    function adicionarMensagem(texto: string) {
        const novaMensagem: Mensagem = {
            id: Id.gerar(),
            texto,
            autor: "Você",
            lado: "direito",
            icone: null,
        }

        setMensagens([...mensagens, novaMensagem])
    }

	return {
		chatId,
        mensagens,
        adicionarMensagem
	}
}
