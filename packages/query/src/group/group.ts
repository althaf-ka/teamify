import { ApiResponse } from "@repo/shared/types";
import { useMutation } from "@tanstack/react-query";

type createGroupType = {
  name: string;
  category: string;
};

export const useGroupMutations = () => {
  const createGroupMutation = (
    createGroupFn: (data: createGroupType) => Promise<any>,
  ) =>
    useMutation({
      mutationFn: createGroupFn,
    });

  return { createGroupMutation };
};
