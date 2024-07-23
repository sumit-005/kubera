import React from "react";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { SlidersHorizontalIcon, SearchIcon } from "lucide-react";

const Profile = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8 cursor-pointer">
        <SlidersHorizontalIcon />
        <h1>Profile</h1>
        <SearchIcon />
      </div>
      <div className="flex justify-start items-center gap-6">
        <p className="text-lg">Theme</p>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Profile;
