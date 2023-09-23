import { publicProcedure, router } from './trpc';
import prisma from '@/utils/prisma';
import z from 'zod'
import dayjs, { Dayjs } from 'dayjs';

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
  updateVessel: publicProcedure.input(z.object({ id: z.string(), name: z.string(), totalCargoLoad: z.string() })).mutation(async (opts) => {
    await prisma.vessel.update({
      where: {
        id: opts.input.id
      },
      data: {
        id: opts.input.id,
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
  }),
  createLct: publicProcedure.input(z.object({ name: z.string(), cargoCapacity: z.string() })).mutation(async (opts) => {
    await prisma.lct.create({
      data: {
        name: opts.input.name,
        cargoCapacity: parseInt(opts.input.cargoCapacity)
      }
    })
  }),
  updateLct: publicProcedure.input(z.object({ id: z.string(), name: z.string(), cargoCapacity: z.string() })).mutation(async (opts) => {
    await prisma.lct.update({
      where: {
        id: opts.input.id,
      },
      data: {
        id: opts.input.id,
        name: opts.input.name,
        cargoCapacity: parseInt(opts.input.cargoCapacity)
      }
    })
  }),
  //Projects Api
  createProject: publicProcedure.input(z.object({ vesselId: z.string().nullable(), projectStartDate: z.string(), projectEndDate: z.string() })).mutation(async (opts) => {

    if (opts.input.vesselId !== null) {
      await prisma.projects.create({
        data: {
          vesselId: opts.input.vesselId,
          vesselName: 'SAMPLE',
          projectStartDate: opts.input.projectStartDate,
          projectEndDate: opts.input.projectEndDate
        }
      })
    }
  }),
  getProjects: publicProcedure.input(
    z.object({
      vesselId: z.string().nullable(),
      projectStartDate: z.any().nullable(),
      projectEndDate: z.any().nullable()
    })
  )
    .query(async (opts) => {
      if (opts.input.vesselId === null
        && opts.input.projectStartDate === null
        && opts.input.projectEndDate === null
      ) {

        return await prisma.projects.findMany()

      } else if (opts.input.vesselId !== null
        && opts.input.projectStartDate === null
        && opts.input.projectEndDate === null
      ) {

        return await prisma.projects.findMany({
          where: {
            vesselId: opts.input.vesselId
          }
        })
      } else if (opts.input.vesselId !== null) {

        return await prisma.projects.findMany({
          where: {
            vesselId: opts.input.vesselId,
            projectStartDate: opts.input.projectStartDate,
            projectEndDate: opts.input.projectEndDate
          }
        })
      }
    })
});

export type AppRouter = typeof appRouter;
