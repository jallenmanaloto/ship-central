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
  getPaginatedVessels: publicProcedure.input(
    z.object({
      page: z.number(),
      limit: z.number(),
      vesselName: z.string().nullable()
    }))
    .query(async (opts) => {
      const { page, limit } = opts.input

      if (opts?.input.vesselName === null) {
        const offset = (page - 1) * limit
        const vesselsCount = await prisma.vessel.count()
        const totalPageCount = Math.ceil(vesselsCount / limit)
        const vessels = await prisma.vessel.findMany({
          skip: offset,
          take: limit
        })

        return {
          vessels: vessels,
          totalPage: totalPageCount,
          totalCount: vesselsCount
        }
      } else {
        const offset = (page - 1) * limit
        const vesselsCount = await prisma.vessel.count({
          where: {
            name: opts?.input?.vesselName
          }
        })
        const totalPageCount = Math.ceil(vesselsCount / limit)
        const vessels = await prisma.vessel.findMany({
          skip: offset,
          take: limit,
          where: {
            name: opts?.input?.vesselName
          }
        })
        return {
          vessels: vessels,
          totalPage: totalPageCount,
          totalCount: vesselsCount
        }
      }


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

  // LCTs Api
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

  // Projects Api
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
    }))
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
    }),
  getPaginatedProjects: publicProcedure.input
    (z.object({
      vesselId: z.string().nullable(),
      projectStartDate: z.string().nullable(),
      projectEndDate: z.string().nullable(),
      page: z.number(),
      limit: z.number(),
    })
    ).query(async (opts) => {
      const { page, limit } = opts.input
      const offset = (page - 1) * limit

      if (opts.input.vesselId === null
        && opts.input.projectStartDate === null
        && opts.input.projectEndDate === null
      ) {
        const projectCount = await prisma.projects.count()
        const projects = await prisma.projects.findMany({
          skip: offset,
          take: limit
        })
        const totalPageCount = Math.ceil(projectCount / limit)

        return {
          projects: projects,
          totalCount: projectCount,
          totalPage: totalPageCount
        }
      } else if (opts.input.vesselId !== null
        && opts.input.projectStartDate === null
        && opts.input.projectEndDate === null
      ) {

        const projects = await prisma.projects.findMany({
          skip: offset,
          take: limit,
          where: {
            vesselId: opts.input.vesselId
          }
        })

        const projectCount = await prisma.projects.count({
          where: {
            vesselId: opts.input.vesselId
          }
        })

        const totalPageCount = Math.ceil(projectCount / limit)

        return {
          projects: projects,
          totalCount: projectCount,
          totalPage: totalPageCount
        }
      } else if (opts.input.vesselId !== null) {

        const projects = await prisma.projects.findMany({
          skip: offset,
          take: limit,
          where: {
            vesselId: opts.input.vesselId,
            projectStartDate: opts.input.projectStartDate,
            projectEndDate: opts.input.projectEndDate
          }
        })

        const projectCount = await prisma.projects.count({
          where: {
            vesselId: opts.input.vesselId,
            projectStartDate: opts.input.projectStartDate,
            projectEndDate: opts.input.projectEndDate
          }
        })

        const totalPageCount = Math.ceil(projectCount / limit)

        return {
          projects: projects,
          totalCount: projectCount,
          totalPage: totalPageCount
        }
      }
    }),
  getProjectDates: publicProcedure.input(z.string().nullable()).query(async (opts) => {
    if (opts.input !== null) {
      const projects = await prisma.projects.findMany({
        where: {
          vesselId: opts.input
        }
      })

      const projectDates = projects.map(project => {
        return {
          display: `${dayjs(project.projectStartDate).format('MMM D, YYYY')} - ${dayjs(project.projectEndDate).format('MMM D, YYYY')}`,
          vals: `${dayjs(project.projectStartDate).toISOString()} - ${dayjs(project.projectEndDate).toISOString()}`
        }
      })

      return projectDates;
    }

    return []
  }),
  updateMonitoring: publicProcedure.input(z.object({ id: z.string(), monitored: z.boolean() })).mutation(async (opts) => {
    const project = await prisma.projects.findFirst({
      where: {
        id: opts.input.id
      }
    })

    if (project) {
      await prisma.projects.update({
        where: {
          id: project.id,
        },
        data: {
          monitored: opts.input.monitored
        }
      })

      return {
        status: 201,
        message: 'Project updated successfully',
        body: JSON.stringify(project)
      }
    }
  })
});

export type AppRouter = typeof appRouter;
