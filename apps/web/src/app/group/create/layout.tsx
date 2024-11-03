import { BASIC_PLAN_AMOUNT } from "@repo/shared/constants";
import BackdropGradient from "@/components/global/backdrop-gradient";
import GlassCard from "@/components/global/glass-card";
import GradientText from "@/components/global/gradientText";
import { TEAMIFY_CONSTANTS } from "@/constants";

interface CreateGroupLayoutProps {
  children: React.ReactNode;
}

const CreateGroupLayout = ({ children }: CreateGroupLayoutProps) => {
  return (
    <div className="container grid min-h-screen grid-cols-1 content-center py-16 lg:grid-cols-2 lg:py-0">
      <div className="flex items-center md:pl-7">
        <BackdropGradient className="h-2/6 w-8/12 opacity-50">
          <h5 className="text-themeTextWhite text-2xl font-bold">Teamify.</h5>
          <GradientText className="py-1 text-4xl font-semibold" element="H2">
            Create Your Group
          </GradientText>
          <p className="text-themeTextGray">
            Free for 14 days, then ₹{BASIC_PLAN_AMOUNT}/month. Cancel
            anytime.All features. Unlimited everything. No hidden fees.
          </p>
          <div className="mt-16 flex flex-col gap-3 pl-5">
            {TEAMIFY_CONSTANTS.createGroupPlaceholder.map((placeholder) => (
              <div className="flex gap-3" key={placeholder.id}>
                {placeholder.icon}
                <p className="text-themeTextGray">{placeholder.label}</p>
              </div>
            ))}
          </div>
        </BackdropGradient>
      </div>
      <div>
        <BackdropGradient
          className="h-3/6 w-6/12 opacity-40"
          container="lg:items-center"
        >
          <GlassCard className="xs:w-full mt-16 py-7 lg:w-10/12 xl:w-8/12">
            {children}
          </GlassCard>
        </BackdropGradient>
      </div>
    </div>
  );
};

export default CreateGroupLayout;
