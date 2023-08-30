import { publicProcedure, router } from './trpc';
import prisma from '@/utils/prisma';

export const appRouter = router({
  getSomething: publicProcedure.query(async () => {
    const something = await prisma.vessel.findMany();

    return something;
  })
});

export type AppRouter = typeof appRouter;
