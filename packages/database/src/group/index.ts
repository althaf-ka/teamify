import { prisma } from "../client";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { CreateGroupSchema } from "@repo/shared/schema";
import { AffiliateWithGroupAndUser, UserWithGroupAndChannels } from "./types";

export const findAffiliateById = async (
  id: string,
): Promise<AffiliateWithGroupAndUser | null> => {
  return prisma.affiliate.findUnique({
    where: { id },
    select: {
      Group: {
        select: {
          User: {
            select: {
              firstname: true,
              lastname: true,
              image: true,
              id: true,
              stripeId: true,
            },
          },
        },
      },
    },
  });
};

export const createGroup = async (
  userId: string,
  data: z.infer<typeof CreateGroupSchema>,
): Promise<UserWithGroupAndChannels> => {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      group: {
        create: {
          ...data,
          affiliate: {
            create: {},
          },
          member: {
            create: {
              userId: userId,
            },
          },
          channel: {
            create: [
              {
                id: uuidv4(),
                name: "general",
                icon: "general",
              },
              {
                id: uuidv4(),
                name: "announcements",
                icon: "announcement",
              },
            ],
          },
        },
      },
    },
    select: {
      id: true,
      group: {
        select: {
          id: true,
          channel: {
            select: {
              id: true,
            },
            take: 1,
            orderBy: {
              createdAt: "asc",
            },
          },
        },
      },
    },
  });
};
