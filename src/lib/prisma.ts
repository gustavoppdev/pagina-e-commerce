import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

/**
 * Prisma Client Singleton
 *
 * Em desenvolvimento, o Hot Module Replacement (HMR) do Next.js pode
 * recarregar este arquivo diversas vezes. Se uma nova instância do
 * PrismaClient for criada a cada recarga, o número de conexões com o
 * banco pode crescer rapidamente e causar erros.
 *
 * Para evitar isso, armazenamos a instância em `globalThis`, um objeto
 * global disponível em qualquer ambiente JavaScript. Dessa forma,
 * reutilizamos a mesma conexão durante o desenvolvimento.
 *
 * Em produção, cada processo da aplicação cria sua própria instância,
 * então o cache em `globalThis` não é necessário.
 */

const globalForPrisma = globalThis as {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter: new PrismaPg({
      connectionString: process.env.DATEBASE_URL,
    }),
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
