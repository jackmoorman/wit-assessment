import { PrismaClient } from '@prisma/client';

const globalForPrisma = {
  prisma: new PrismaClient(),
};

export const prisma = globalForPrisma.prisma || new PrismaClient();
