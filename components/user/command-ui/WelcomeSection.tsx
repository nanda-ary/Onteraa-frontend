"use client";

import React from "react";
import QuickAction from "@/components/user/command-ui/QuickAction";

const quickActions = [
  { label: "Content Help", description: "Help with me create a Presentation", color: "blue" },
  { label: "Suggestions", description: "Help with me ideas", color: "rose" },
  { label: "Job Application", description: "Help with me apply for job application", color: "green" },
];


const WelcomeSection: React.FC = () => (
  <main className="flex-1 flex items-center justify-center px-6 py-10">
    <div className="max-w-3xl text-left">
      <h1 className="text-4xl font-semibold leading-tight text-foreground mb-8">
        Hey! Ari<br />
        What can I help with?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {quickActions.map((action, i) => (
          <QuickAction key={i} {...action} />
        ))}
      </div>
    </div>
    
  </main>
);

export default WelcomeSection;
