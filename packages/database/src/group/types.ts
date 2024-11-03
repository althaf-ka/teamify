import { Prisma } from "@prisma/client";

const affiliateWithGroupAndUser =
  Prisma.validator<Prisma.AffiliateDefaultArgs>()({
    include: {
      Group: {
        include: {
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

export type AffiliateWithGroupAndUser = Prisma.AffiliateGetPayload<
  typeof affiliateWithGroupAndUser
>;

const userWithGroupAndChannels = Prisma.validator<Prisma.UserDefaultArgs>()({
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

export type UserWithGroupAndChannels = Prisma.UserGetPayload<
  typeof userWithGroupAndChannels
>;
