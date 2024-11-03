import { User } from "lucide-react";
import { redirect } from "next/navigation";
import { BASIC_PLAN_AMOUNT } from "@repo/shared/constants";
import { onAuthenticatedUser } from "@/actions/auth";
import { onGetAffiliateInfo } from "@/actions/groups";
import CreateGroup from "@/components/forms/create-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const GroupCreatePage = async ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  const user = await onAuthenticatedUser();

  const affiliate = await onGetAffiliateInfo(searchParams.affiliate);

  if (!user?.id) redirect("/sign-in");

  return (
    <>
      <div className="flex flex-col px-7">
        <h5 className="text-themeTextWhite text-base font-bold">
          Payment Method
        </h5>
        <p className="text-themeTextGray pt-2 leading-tight">
          Free for 14 days, then ₹{BASIC_PLAN_AMOUNT}/month. Cancel anytime. All
          features included. Unlimited everything. No hidden fees.
        </p>
        {affiliate.status === 200 && (
          <div className="text-themeTextGray mt-5 flex w-full items-center justify-center gap-x-2 text-sm italic">
            You were referred by
            <Avatar>
              <AvatarImage
                alt="User"
                src={affiliate.user?.Group?.User.image ?? ""}
              />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            {affiliate.user?.Group?.User.firstname}{" "}
            {affiliate.user?.Group?.User.lastname}
          </div>
        )}
      </div>
      <CreateGroup
        affiliate={affiliate.status === 200}
        stripeId={affiliate.user?.Group?.User.stripeId || ""}
        userId={user.id}
      />
    </>
  );
};

export default GroupCreatePage;
