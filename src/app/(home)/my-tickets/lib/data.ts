import prisma from "../../../../../lib/prisma";

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

export const getDetailTicket = async (id: string) => {
  try {
    return await prisma.ticket.findFirst({
      where: {
        id: id,
      },
      include: {
        flight: {
          include: {
            plane: true,
          },
        },
        customer: true,
        seat: true,
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
