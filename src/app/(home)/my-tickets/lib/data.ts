import prisma from "../../../../../lib/prisma";

export const getMyTickets = async (id: string) => {
  try {
    return await prisma.ticket.findMany({
      where: {
        customerId: id,
      },
      select: {
        id: true,
        flight: {
          select: {
            plane: true,
            departureDate: true,
            departureCityCode: true,
            destinationCityCode: true,
            arrivalDate: true,
          },
        },
        seat: {
          select: {
            type: true,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const countTicket = async (id: string) => {
  try {
    return await prisma.ticket.count({
      where: {
        customerId: id,
      },
    });
  } catch (error) {
    console.log(error);
    return [];
  }
};
