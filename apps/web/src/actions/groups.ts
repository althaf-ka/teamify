"use server";

import { createGroup, findAffiliateById } from "@repo/database/group";
import { CreateGroupSchema } from "@repo/shared/schema";
import { z } from "zod";

export const onGetAffiliateInfo = async (id: string) => {
  try {
    const affiliateInfo = await findAffiliateById(id);

    if (affiliateInfo) {
      return { status: 200, user: affiliateInfo };
    }

    return { status: 404 };
  } catch (error) {
    return { status: 400 };
  }
};

export const onCreateNewGroup = async (
  userId: string,
  data: z.infer<typeof CreateGroupSchema>,
) => {
  try {
    const created = await createGroup(userId, data);

    if (created) {
      return {
        status: 200,
        data: created,
        message: "Group created successfully",
      };
    }
  } catch (error) {
    return {
      status: 400,
      message: "Oops! group creation failed, try again later",
    };
  }
};
