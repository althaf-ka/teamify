import { Prisma, User } from "@prisma/client";
import { prisma } from "./client";

export const findUserByClerkId = <T extends Prisma.UserSelect>(
  clerkId: string,
  select: T,
): Promise<Prisma.UserGetPayload<{ select: T }> | null> => {
  return prisma.user.findUnique({
    where: { clerkId },
    ...(select && { select }),
  });
};

export const createUser = async (data: {
  firstname: string;
  lastname: string;
  image: string;
  clerkId: string;
}): Promise<User> => {
  return prisma.user.create({
    data: {
      ...data,
    },
  });
};
