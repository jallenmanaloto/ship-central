import { publicProcedure, router } from './trpc';
import prisma from '@/utils/prisma';
import z from 'zod'
import dayjs, { Dayjs } from 'dayjs';
import { Prisma } from '@prisma/client';

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
  deleteVessel: publicProcedure.input(z.string()).mutation(async (opts) => {
    return await prisma.vessel.delete({
      where: {
        id: opts.input
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
  getPaginatedLcts: publicProcedure.input(
    z.object({
      lctName: z.string().nullable(),
      page: z.number(),
      limit: z.number()
    }))
    .query(async (opts) => {
      const { page, limit } = opts.input
      const offset = (page - 1) * limit

      if (opts.input.lctName === null) {
        const lcts = await prisma.lct.findMany({
          skip: offset,
          take: limit,
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
        const lctsCount = await prisma.lct.count()
        const totalPageCount = Math.ceil(lctsCount / limit)

        return {
          lcts: lcts,
          totalPage: totalPageCount,
          totalCount: lctsCount
        }
      } else {
        const lcts = await prisma.lct.findMany({
          skip: offset,
          take: limit,
          where: {
            name: {
              contains: opts.input.lctName
            }
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

        const lctsCount = await prisma.lct.count({
          where: {
            name: {
              contains: opts.input.lctName
            }
          }
        })

        const totalPageCount = Math.ceil(lctsCount / limit)

        return {
          lcts: lcts,
          totalPage: totalPageCount,
          totalCount: lctsCount
        }
      }

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
  getPaginatedLctTrips: publicProcedure.input(
    z.object({
      lctName: z.string().nullable(),
      page: z.number(),
      limit: z.number()
    }))
    .query(async (opts) => {
      const { page, limit } = opts.input
      const offset = (page - 1) * limit
      let lctProj;

      if (opts.input.lctName === null) {
        lctProj = await prisma.lctProjects.findMany({
          select: {
            id: true,
            projectId: true,
            lctId: true,
            lctName: true,
            project: {
              include: {
                lctTrips: true
              }
            },
          }
        })
      } else {
        lctProj = await prisma.lctProjects.findMany({
          where: {
            lctName: {
              contains: opts.input.lctName
            }
          },
          select: {
            id: true,
            projectId: true,
            lctId: true,
            lctName: true,
            project: {
              include:
              {
                lctTrips: true
              }
            },
          }
        })
      }

      const lctProjectCombination = new Map()
      const filteredLctProject = lctProj.filter((proj) => {
        const combinationKey = `${proj.projectId}-${proj.lctId}`
        if (!lctProjectCombination.has(combinationKey)) {
          lctProjectCombination.set(combinationKey, true)

          return true
        }

        return false
      })

      const lctProjCount = filteredLctProject.length
      const totalPageCount = Math.ceil(lctProjCount / limit)

      const startIndex = (page - 1) * limit
      const endIndex = startIndex + limit


      return {
        lctProj: filteredLctProject.slice(startIndex, endIndex),
        totalPage: totalPageCount,
        totalCount: lctProjCount
      }
    }),
  createLctTrip: publicProcedure.input(
    z.object({
      cargoLoad: z.number(),
      projectId: z.string(),
      lctId: z.string(),
    }))
    .mutation(async (opts) => {
      const project = await prisma.projects.findFirst({
        where: {
          id: opts.input.projectId
        }
      })

      const lct = await prisma.lct.findFirst({
        where: {
          id: opts.input.lctId
        }
      })

      const projectName = project?.vesselName ?? ''
      const lctName = lct?.name ?? ''
      const lctProjectRelation = await prisma.lctProjects.create({
        data: {
          projectId: opts.input.projectId,
          lctId: opts.input.lctId,
          lctName: lctName
        }
      })

      await prisma.lct.update({
        where: {
          id: opts.input.lctId
        },
        data: {
          projectId: lctProjectRelation.id
        }
      })

      return await prisma.lctTrips.create({
        data: {
          cargoLoad: opts.input.cargoLoad,
          projectId: opts.input.projectId,
          lctId: opts.input.lctId,
          tripToVessel: projectName
        }
      })
    }),
  updateLctTrip: publicProcedure.input(z.object({ tripId: z.string(), cargoLoad: z.number() })).mutation(async (opts) => {
    return await prisma.lctTrips.update({
      where: {
        id: opts.input.tripId
      },
      data: {
        cargoLoad: opts.input.cargoLoad
      }
    })
  }),

  // Projects Api
  createProject: publicProcedure.input(
    z.object({
      vesselId: z.string().nullable(),
      projectStartDate: z.string(),
      projectEndDate: z.string(),
      cargoRate: z.number()
    })
  )
    .mutation(async (opts) => {
      const { vesselId, projectStartDate, projectEndDate, cargoRate } = opts.input
      if (vesselId !== null) {
        const vessel = await prisma.vessel.findFirst({
          where: {
            id: vesselId
          }
        })

        return await prisma.projects.create({
          data: {
            vesselId: vesselId,
            vesselName: vessel?.name,
            projectStartDate: opts.input.projectStartDate,
            projectEndDate: opts.input.projectEndDate,
            cargoRate: cargoRate
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
  }),

  // Daily Loading Api
  createDailyLoading: publicProcedure.input(
    z.object({
      activityFrom: z.string(),
      activityTo: z.string(),
      activity: z.string(),
      projectId: z.string()
    }))
    .mutation(async (opts) => {
      const startHour = dayjs(opts.input.activityFrom)
      const endHour = dayjs(opts.input.activityTo)
      const diffHour = endHour.diff(startHour, 'minutes')
      const hour = Math.floor(diffHour / 60)
      const mins = diffHour % 60

      const project = await prisma.projects.findFirst({
        where: {
          id: opts.input.projectId,
        }
      })

      const totalCargo = project?.totalCargo ?? 0
      const vesselId = project?.vesselId ?? ''

      const totalHours = (diffHour / 60).toFixed(2)
      const hourMins = dayjs().hour(hour).minute(mins).format('HH:mm')
      const day = parseFloat(((diffHour / 60) / 24).toFixed(2))

      return await prisma.loadingReport.create({
        data: {
          activityFrom: opts.input.activityFrom,
          activityTo: opts.input.activityTo,
          activity: opts.input.activity,
          hourMins: hourMins,
          totalHours: parseFloat(totalHours),
          projectId: opts.input.projectId,
          days: day,
          vesselId: vesselId
        }
      })
    }),
  getPaginatedDailyLoading: publicProcedure.input(
    z.object({
      projectId: z.string().nullable(),
      page: z.number(),
      limit: z.number()
    }))
    .query(async (opts) => {
      const { page, limit, projectId } = opts.input
      if (projectId === null || projectId === undefined) {
        return {
          dailyLoading: [],
          totalPage: 1,
          totalCount: 0
        }
      } else {
        const offset = (page - 1) * limit
        const dailyLoadingCount = await prisma.loadingReport.count({
          where: {
            projectId: projectId as unknown as Prisma.StringFilter<"LoadingReport">
          }
        })

        const dailyLoading = await prisma.loadingReport.findMany({
          skip: offset,
          take: limit,
          where: {
            projectId: projectId as unknown as Prisma.StringFilter<"LoadingReport">
          },
          orderBy: [
            {
              activityFrom: 'desc'
            }
          ]
        })

        const totalPageCount = Math.ceil(dailyLoadingCount / limit)

        const groupedResults: any[] = [];
        dailyLoading.forEach((record) => {
          const activityFrom = dayjs(record.activityFrom).format('YYYY-MM-DD'); // Convert to ISO string for grouping
          const existingEntry = groupedResults.find((entry) => entry[activityFrom]);

          if (existingEntry) {
            existingEntry[activityFrom].push(record);
          } else {
            const newEntry = {
              [activityFrom]: [record],
            };
            groupedResults.push(newEntry);
          }
        });

        return { dailyLoading: groupedResults, totalPage: totalPageCount, totalCount: dailyLoadingCount }
      }
    }),
  updateDailyLoading: publicProcedure.input(
    z.object({
      activityFrom: z.string(),
      activityTo: z.string(),
      activity: z.string(),
      reportId: z.string()
    }))
    .mutation(async (opts) => {
      const { activityFrom, activityTo, activity, reportId } = opts.input
      return await prisma.loadingReport.update({
        where: {
          id: reportId
        },
        data: {
          activityFrom: activityFrom,
          activityTo: activityTo,
          activity: activity,
        }
      })
    }),

  // Analytics Api
  getAnalytic: publicProcedure.input(z.string()).query(async (opts) => {
    return await prisma.analytics.findFirst({
      where: {
        projectId: opts.input
      }
    })
  }),
  getActiveAnalytics: publicProcedure.query(async (opts) => {
    return await prisma.analytics.findMany({
      where: {
        monitored: true
      }
    })
  })
});

export type AppRouter = typeof appRouter;
