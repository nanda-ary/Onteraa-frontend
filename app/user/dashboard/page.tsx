import { cookies } from "next/headers";
import Sidebar from "@/components/user/dashboard/Sidebar";
import TopBar from "@/components/user/dashboard/TopBar";
import WelcomeSection from "@/components/user/command-ui/WelcomeSection";
import CommandBar from "@/components/user/command-ui/CommandBar";
import WelcomeSpotlight from "@/components/onboarding/WelcomeSpotlightNormal";



export default async function DashboardPage() {
  const cookieStore = cookies(); // ✅ synchronous
  const token = (await cookieStore).get(process.env.JWT_COOKIE_NAME || "onteraa_token")?.value;

  if (!token) {
    return <div>Unauthorized</div>;
  }
  
  return (
    <>
      <WelcomeSpotlight name="Ari" />
      <div
        className="flex h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner-gradient-shape.svg')" }}
      >
        <Sidebar />
        <div className="flex flex-col flex-1">
          <TopBar />
          <div className="flex flex-col items-center w-full px-4 pt-10 mt-20 space-y-6 max-w-6xl mx-auto">
            <WelcomeSection />
            <CommandBar token={token} />
          </div>
        </div>
      </div>
    </>
  );
}
