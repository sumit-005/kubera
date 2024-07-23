"use client";
import React from "react";
import {
  PlusIcon,
  UserIcon,
  LayoutGrid,
  Users,
  SquareActivity,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const BottomBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    // border
    <div className="fixed bottom-0 left-0 right-0 bg-background dark:bg-muted border-2 border-muted dark:border-transparent dark:border-0 py-4 flex justify-around items-center rounded-t-2xl lg:hidden">
      <div
        className={`cursor-pointer flex flex-col items-center ${isActive("/") ? "text-primary" : "text-gray-light"}`}
        onClick={() => router.push("/")}>
        <LayoutGrid
          className={` ${isActive("/") ? "text-primary" : "text-gray-light"}`}
        />
        <p className="text-xs">Home</p>
      </div>
      <div
        className={`cursor-pointer flex flex-col items-center  mr-6 ${isActive("/friends") ? "text-primary" : "text-gray-light"}`}
        onClick={() => router.push("/friends")}>
        <Users
          className={`${isActive("/friends") ? "text-primary" : "text-gray-light"}`}
        />
        <p className="text-xs">Friends</p>
      </div>
      <div
        className="cursor-pointer fixed bottom-[40px] left-1/2 transform -translate-x-1/2"
        onClick={() => router.push("/add")}>
        <PlusIcon className="text-white bg-primary rounded-full p-4 h-16 w-16" />
      </div>
      <div
        className={`cursor-pointer flex flex-col items-center  ml-6 ${isActive("/activity") ? "text-primary" : "text-gray-light"}`}
        onClick={() => router.push("/activity")}>
        <SquareActivity
          className={`${isActive("/activity") ? "text-primary" : "text-gray-light"}`}
        />
        <p className="text-xs">Activity</p>
      </div>
      <div
        className={`cursor-pointer flex flex-col items-center ${isActive("/profile") ? "text-primary" : "text-gray-light"}`}
        onClick={() => router.push("/profile")}>
        <UserIcon
          className={` ${isActive("/profile") ? "text-primary" : "text-gray-light"}`}
        />
        <p className="text-xs">Profile</p>
      </div>
    </div>
  );
};

export default BottomBar;
