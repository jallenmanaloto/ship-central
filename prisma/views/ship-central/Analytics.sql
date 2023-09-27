SELECT
  uuid() AS `id`,
  `project`.`id` AS `projectId`,
  `project`.`monitored` AS `monitored`,
  `project`.`totalCargo` AS `totalCargo`,
  round(
    (`project`.`totalCargo` / `project`.`cargoRate`),
    2
  ) AS `laytime`,
  round(
    (
      (`project`.`totalCargo` / `project`.`cargoRate`) - (
        SELECT
          sum(`ship-central`.`LoadingReport`.`days`) AS `totalDays`
        FROM
          `ship-central`.`LoadingReport`
        WHERE
          (
            `ship-central`.`LoadingReport`.`projectId` = `project`.`id`
          )
      )
    ),
    2
  ) AS `layTimeAsOf`,
  round(
    (
      (`project`.`totalCargo` / `project`.`cargoRate`) - (
        (`project`.`totalCargo` / `project`.`cargoRate`) - (
          SELECT
            sum(`ship-central`.`LoadingReport`.`days`) AS `totalDays`
          FROM
            `ship-central`.`LoadingReport`
          WHERE
            (
              `ship-central`.`LoadingReport`.`projectId` = `project`.`id`
            )
        )
      )
    ),
    2
  ) AS `layTimeConsumed`,
  round(
    (
      SELECT
        sum(`ship-central`.`LctTrips`.`cargoLoad`)
      FROM
        `ship-central`.`LctTrips`
      WHERE
        (
          `ship-central`.`LctTrips`.`projectId` = `project`.`id`
        )
    ),
    2
  ) AS `totalLoadedCargo`,
  round(
    (
      (
        (
          (`project`.`totalCargo` / `project`.`cargoRate`) - (
            (`project`.`totalCargo` / `project`.`cargoRate`) - (
              SELECT
                sum(`ship-central`.`LoadingReport`.`days`) AS `totalDays`
              FROM
                `ship-central`.`LoadingReport`
              WHERE
                (
                  `ship-central`.`LoadingReport`.`projectId` = `project`.`id`
                )
            )
          )
        ) * `project`.`totalCargo`
      ) / (
        SELECT
          sum(`ship-central`.`LctTrips`.`cargoLoad`)
        FROM
          `ship-central`.`LctTrips`
        WHERE
          (
            `ship-central`.`LctTrips`.`projectId` = `project`.`id`
          )
      )
    ),
    2
  ) AS `estTotalTimeFinish`,
  round(
    (
      (`project`.`totalCargo` / `project`.`cargoRate`) - (
        (
          (
            (`project`.`totalCargo` / `project`.`cargoRate`) - (
              (`project`.`totalCargo` / `project`.`cargoRate`) - (
                SELECT
                  sum(`ship-central`.`LoadingReport`.`days`) AS `totalDays`
                FROM
                  `ship-central`.`LoadingReport`
                WHERE
                  (
                    `ship-central`.`LoadingReport`.`projectId` = `project`.`id`
                  )
              )
            )
          ) * `project`.`totalCargo`
        ) / (
          SELECT
            sum(`ship-central`.`LctTrips`.`cargoLoad`)
          FROM
            `ship-central`.`LctTrips`
          WHERE
            (
              `ship-central`.`LctTrips`.`projectId` = `project`.`id`
            )
        )
      )
    ),
    2
  ) AS `estDespatch`,
  round(
    (
      (
        (
          (
            (
              (`project`.`totalCargo` / `project`.`cargoRate`) - (
                (`project`.`totalCargo` / `project`.`cargoRate`) - (
                  SELECT
                    sum(`ship-central`.`LoadingReport`.`days`) AS `totalDays`
                  FROM
                    `ship-central`.`LoadingReport`
                  WHERE
                    (
                      `ship-central`.`LoadingReport`.`projectId` = `project`.`id`
                    )
                )
              )
            ) * `project`.`totalCargo`
          ) / (
            SELECT
              sum(`ship-central`.`LctTrips`.`cargoLoad`)
            FROM
              `ship-central`.`LctTrips`
            WHERE
              (
                `ship-central`.`LctTrips`.`projectId` = `project`.`id`
              )
          )
        ) - (`project`.`totalCargo` / `project`.`cargoRate`)
      ) - (
        (`project`.`totalCargo` / `project`.`cargoRate`) - (
          SELECT
            sum(`ship-central`.`LoadingReport`.`days`) AS `totalDays`
          FROM
            `ship-central`.`LoadingReport`
          WHERE
            (
              `ship-central`.`LoadingReport`.`projectId` = `project`.`id`
            )
        )
      )
    ),
    2
  ) AS `estTimeToFinishLoading`,
  round(
    (
      `project`.`totalCargo` - (
        SELECT
          sum(`ship-central`.`LctTrips`.`cargoLoad`)
        FROM
          `ship-central`.`LctTrips`
        WHERE
          (
            `ship-central`.`LctTrips`.`projectId` = `project`.`id`
          )
      )
    ),
    2
  ) AS `totalCargoToBeLoaded`
FROM
  (
    (
      `ship-central`.`LoadingReport` `loadingReport`
      LEFT JOIN `ship-central`.`Projects` `project` ON((`project`.`id` = `loadingReport`.`projectId`))
    )
    LEFT JOIN `ship-central`.`LctTrips` `trips` ON((`trips`.`projectId` = `project`.`id`))
  )
GROUP BY
  `project`.`id`,
  `project`.`monitored`,
  `project`.`totalCargo`