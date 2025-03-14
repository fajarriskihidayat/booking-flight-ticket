"use server";

import prisma from "../../../../lib/prisma";

export const getCityFilter = async () => {
  try {
    const data = await prisma.flight.groupBy({
      by: ["departureCity", "destinationCity"],
      where: {
        departureDate: {
          gt: new Date(),
        },
      },
      _count: {
        departureCity: true,
        destinationCity: true,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAirplanes = async () => {
  try {
    const data = await prisma.airplane.findMany({
      // munculin data pesawat yang ada penerbangannya saja
      where: {
        flight: {
          every: {
            id: undefined,
          },
        },
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getFlightById = async (id: string) => {
  try {
    const data = await prisma.flight.findFirst({
      where: {
        id: id,
      },
      include: {
        seats: {
          orderBy: {
            seatNumber: "asc",
          },
        },
        plane: true,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
