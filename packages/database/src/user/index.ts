import { Prisma, User } from "@prisma/client";
import { prisma } from "../client";
import { UserCreationData, UserSelectPayload } from "./types";

export const findUserByClerkId = <T extends Prisma.UserSelect>(
  clerkId: string,
  select: T,
): Promise<UserSelectPayload<T> | null> => {
  return prisma.user.findUnique({
    where: { clerkId },
    ...(select && { select }),
  });
};

export const createUser = async (data: UserCreationData): Promise<User> => {
  return prisma.user.create({
    data: {
      ...data,
    },
  });
};
