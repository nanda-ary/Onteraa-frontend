import { cookies } from "next/headers";
import WelcomeSection from "@/components/user/command-ui/WelcomeSection";
import CommandBar from "@/components/user/command-ui/CommandBar";
import TopBar from "@/components/user/dashboard/TopBar";
import SidebarChat from "@/components/user/command-ui/SideBarChatHistory";
export default async function AskAiPage() {
      const cookieStore = cookies();
      const token = (await cookieStore).get(process.env.JWT_COOKIE_NAME || "onteraa_token")?.value;
    
      if (!token) {
        return <div>Unauthorized</div>;
      }
      
  return (
          <div className="flex h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner-gradient-shape.svg')" }}>
      <SidebarChat />
      <div className="flex flex-col flex-1">
   
           <TopBar />
          <div className="flex flex-col items-center w-full px-4 pt-10 mt-20 space-y-6 max-w-6xl mx-auto">
            <WelcomeSection />
            <CommandBar token={token} />
          </div>
      </div>
      
    </div>



  )
}
