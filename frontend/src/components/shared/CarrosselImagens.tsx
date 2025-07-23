import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

export interface CarrousselImagensProps {
	imagens: string[]
}

export default function CarrousselImagens(props: CarrousselImagensProps) {
	return (
		<Carousel opts={{ loop: true }} className="w-7/10 md:w-11/12 xl:w-full">
			<CarouselContent>
				{props.imagens.map((imagem) => (
					<CarouselItem key={imagem} className="relative h-96 w-full">
						<Image src={imagem} alt="imagem" fill className="object-cover" />
					</CarouselItem>
				))}
			</CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
		</Carousel>
	)
}
