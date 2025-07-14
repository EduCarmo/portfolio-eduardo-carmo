// backend/src/main.ts
import 'dotenv/config';
import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // Esta é a linha CRÍTICA que você precisa verificar:
    await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
    console.log(`Aplicação está rodando em: ${await app.getUrl()}`); // Mantenha esta linha para depuração!
}
bootstrap();