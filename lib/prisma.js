// prisma.js
// Prisma Client generator.
import { PrismaClient } from '@prisma/client';

// create a new global object to store the prisma client.
const globalForPrisma = {
  prisma: new PrismaClient(),
};

// if the prisma client exists in the global object, use that. If not, generate a new client.
// this is the constant that is imported in /api/submission.js
export const prisma = globalForPrisma.prisma || new PrismaClient();
