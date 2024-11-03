import { Prisma } from "@prisma/client";

export type UserCreationData = {
  firstname: string;
  lastname: string;
  image: string;
  clerkId: string;
};

export type UserSelectPayload<T extends Prisma.UserSelect> =
  Prisma.UserGetPayload<{ select: T }>;
