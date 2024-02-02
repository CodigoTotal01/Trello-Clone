import { PrismaClient } from "@prisma/client"

declare global {
    var prisma: PrismaClient | undefined
}

//Para no unicializar inecesariamente la base de datos en produccion
export const db = (globalThis.prisma = new PrismaClient()) // PrismaClient is attached to the `global` object in development to prevent exhausting your database connection limit.

if (process.env.NODE_ENV === "production") globalThis.prisma = db

//React js use hot reload, so we need to close the db connection
