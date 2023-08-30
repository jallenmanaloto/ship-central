import { publicProcedure, router } from './trpc';

export const appRouter = router({
  getSomething: publicProcedure.query(async () => {
    return 'Example Api Response';
  }),
});

export type AppRouter = typeof appRouter;
