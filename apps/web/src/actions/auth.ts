"use server";

import { currentUser } from "@clerk/nextjs/server";
import { findUserByClerkId, createUser } from "@repo/database/user";

export const onAuthenticatedUser = async () => {
  try {
    const clerk = await currentUser();
    if (!clerk) return { status: 404 };

    const user = await findUserByClerkId(clerk.id, {
      id: true,
      firstname: true,
      lastname: true,
    });

    if (user)
      return {
        status: 200,
        id: user.id,
        image: clerk.imageUrl,
        username: `${user.firstname} ${user.lastname}`,
      };
    return {
      status: 404,
    };
  } catch (error) {
    return {
      status: 400,
    };
  }
};

export const onSignUpUser = async (data: {
  firstname: string;
  lastname: string;
  image: string;
  clerkId: string;
}) => {
  try {
    const createdUser = await createUser(data);

    if (createdUser) {
      return {
        status: 200,
        message: "User successfully created",
        id: createdUser.id,
      };
    }

    return {
      status: 400,
      message: "User could not be created! Try again",
    };
  } catch (error) {
    return {
      status: 400,
      message: "Oops! something went wrong. Try again",
    };
  }
};

export const onSignInUser = async (clerkId: string) => {
  try {
    const loggedInUser = await findUserByClerkId(clerkId, {
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
    });

    if (loggedInUser) {
      if (loggedInUser.group.length > 0) {
        return {
          status: 207,
          id: loggedInUser.id,
          groupId: loggedInUser.group[0].id,
          channelId: loggedInUser.group[0].channel[0].id,
        };
      }

      return {
        status: 200,
        message: "User successfully logged in",
        id: loggedInUser.id,
      };
    }

    return {
      status: 400,
      message: "User could not be logged in! Try again",
    };
  } catch (error) {
    return {
      status: 400,
      message: "Oops! something went wrong. Try again",
    };
  }
};
