"use client"
import Sidebar from "@/components/user/dashboard/Sidebar"
import TopBar from "@/components/user/dashboard/TopBar"
import WelcomeSection from "@/components/user/command-ui/WelcomeSection"
import CommandBar from "@/components/user/command-ui/CommandBar"
import WelcomeSpotlight from "@/components/onboarding/WelcomeSpotlightNormal"

const DashboardPage = () => {
  return (
  <><WelcomeSpotlight name="Ari" /><div className="flex h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/banner-gradient-shape.svg')" }}>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <TopBar />
        <div className="flex flex-col items-center w-full px-4 pt-10 mt-20 space-y-6 max-w-6xl mx-auto">
          <WelcomeSection />
          <CommandBar />
        </div>

      </div>
    </div></>
  )
}

export default DashboardPage;
