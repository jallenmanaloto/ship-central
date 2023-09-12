import { publicProcedure, router } from './trpc';
import prisma from '@/utils/prisma';
import z from 'zod'

export const appRouter = router({
  // Vessels API
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
  createVessel: publicProcedure.input(z.object({ name: z.string(), totalCargoLoad: z.string() })).mutation(async (opts) => {
    await prisma.vessel.create({
      data: {
        name: opts.input.name,
        totalCargoLoad: parseInt(opts.input.totalCargoLoad)
      }
    })
  }),
  //LCTs Api
  getLcts: publicProcedure.input(z.object({ lctName: z.string().nullable() })).query(async (opts?) => {
    if (opts?.input?.lctName !== null) {
      const lct = await prisma.lct.findFirst({
        where: {
          name: { contains: opts?.input?.lctName }
        },
        select: {
          id: true,
          name: true,
          cargoCapacity: true,
          projectId: true,
          project: {
            include: {
              project: true
            }
          }
        }
      })
      const lctArray = lct ? [lct] : []

      return lctArray
    }

    return await prisma.lct.findMany({
      select: {
        id: true,
        name: true,
        cargoCapacity: true,
        projectId: true,
        project: {
          include: {
            project: true
          }
        }
      }
    })
  })
});

export type AppRouter = typeof appRouter;
