import { publicProcedure, router } from './trpc';
import prisma from '@/utils/prisma';
import z from 'zod'

export const appRouter = router({
  getVessels: publicProcedure.input(z.object({ vesselName: z.string().nullable() })).query(async (opts?) => {
    if (opts?.input?.vesselName !== null) {
      const vessel = await prisma.vessel.findFirst({ where: { name: opts?.input.vesselName } })
      const vesselArray = vessel ? [vessel] : []

      return vesselArray
    }
    return await prisma.vessel.findMany();
  }),
  getVesselNames: publicProcedure.query(async () => {
    const vessels = await prisma.vessel.findMany();
    const vesselNames = vessels.map(vessel => vessel.name)

    return vesselNames;
  }),
  getLcts: publicProcedure.input(z.object({ lctName: z.string().nullable() })).query(async (opts?) => {
    // if (opts?.input?.lctName !== null) {
    //   const lct = await prisma.lct.findFirst({ where: { name: { contains: opts?.input?.lctName } }, include: { projects: true } })
    //   const lctArray = lct ? [lct] : []

    //   return lctArray
    // }

    return await prisma.lct.findMany({ select: { id: true, name: true, cargoCapacity: true, projectId: true, project: { include: { project: true } } } })
  })
});

export type AppRouter = typeof appRouter;
