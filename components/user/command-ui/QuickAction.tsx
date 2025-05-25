"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface QuickActionProps {
  label: string;
  description?: string;
  color: string; // "blue", "rose", "green", etc.
}

const colorMap = {
  blue: {
    light: "bg-blue-100 text-blue-800",
    dark: "dark:bg-blue-900 dark:text-blue-200",
    gradient: "from-blue-300/10 to-blue-500/5 dark:from-blue-900/10 dark:to-blue-700/5",
  },
  rose: {
    light: "bg-rose-100 text-rose-800",
    dark: "dark:bg-rose-900 dark:text-rose-200",
    gradient: "from-rose-300/10 to-rose-500/5 dark:from-rose-900/10 dark:to-rose-700/5",
  },
  green: {
    light: "bg-green-100 text-green-800",
    dark: "dark:bg-green-900 dark:text-green-200",
    gradient: "from-green-300/10 to-green-500/5 dark:from-green-900/10 dark:to-green-700/5",
  },
  // Add more colors here as needed
};

const QuickAction: React.FC<QuickActionProps> = ({
  label,
  description = `Help with me ${label.toLowerCase()}`,
  color,
}) => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const colors = colorMap[color as keyof typeof colorMap];

  return (
    <div
      className={`
        rounded-3xl p-4 w-full transition duration-300 shadow-md hover:shadow-lg
        bg-gradient-to-br ${colors.gradient}
      `}
      data-aos="fade-up"
    >
      <div className="mb-1">
        <span
          className={`inline-block text-sm font-semibold rounded-md px-3 py-1 ${colors.light} ${colors.dark}`}
        >
          {label}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default QuickAction;
