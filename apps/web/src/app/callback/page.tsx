import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

function CallBackPage() {
  return <AuthenticateWithRedirectCallback />;
}

export default CallBackPage;
