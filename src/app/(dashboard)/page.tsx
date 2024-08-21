"use client";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import DashboardHeader from "./components/header";
import ExpenseDetailCard from "@/components/shared/expense-details-card";
import { useEffect, useState } from "react";
import { Group } from "@/types/groups";
import useSupabaseBrowser from "@/utils/supabase-browser";
import AddGroup from "./components/add-group";
import { compressImage } from "@/utils/compressImage";

export default function Dashboard() {
  const [openGroup, setOpenGroup] = useState(false);
  const supabase = useSupabaseBrowser();
  const [groupForm, setGroupForm] = useState<any>({
    name: "",
    avatar: null,
  });

  const router = useRouter();

  const settleUp = () => {
    // console.log("Settle Up");
  };

  const balance = () => {
    // console.log("Balance");
  };

  const viewDetails = () => {
    // console.log("View Details");
  };

  const [groups, setGroups] = useState<Group[]>([]);

  const getTasks = async () => {
    const { data: groups, error } = await supabase.from("groups").select("*");
    if (error) {
      console.error("Error fetching data:", error.message);
    }
    if (groups) {
      setGroups(groups);
    }
  };
  const handleAddGroup = async () => {
    let fileuploadSuccess = false;
    const fileName = `${Date.now()}-${groupForm.avatar.name}`;
    if (groupForm.avatar) {
      compressImage(groupForm.avatar).then(async (result: any) => {
        await supabase.storage
          .from("avatars")
          .upload(fileName, groupForm.avatar);
        const { data } = await supabase
          .from("groups")
          .insert([
            {
              name: groupForm.name,
              avatar: `${
                process.env.NEXT_PUBLIC_SUPABASE_URL
              }/storage/v1/object/public/avatars/${fileName}`,
            },
          ])
          .select();
        if (data) {
          setOpenGroup(false);
          setGroupForm({ name: "", avatar: "" });
          getTasks();
        }
      });
    } else {
      const { data } = await supabase
        .from("groups")
        .insert([
          {
            name: groupForm.name,
          },
        ])
        .select();
      if (data) {
        setOpenGroup(false);
        setGroupForm({ name: "", avatar: "" });
        getTasks();
      }
    }
    // if (error) {
    //   console.error("Error inserting data:", error.message);
    // }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      {/* Header */}
      <DashboardHeader />
      {/* Balance Card */}
      <ExpenseDetailCard
        settleUp={settleUp}
        viewDetails={viewDetails}
        balance={balance}
        totalOwe={4434}
        totalOwed={2353}
      />

      {/* Groups */}

      <div className="flex justify-between items-center mt-5">
        <h2 className="text-lg">Groups</h2>
        <Button
          variant="outline"
          className="h-8 rounded-lg bg-transparent  text-primary dark:text-primary dark:bg-transparent border-primary dark:border-primary"
          onClick={() => setOpenGroup(true)}>
          Add +
        </Button>
      </div>

      <div className="flex flex-col gap-4 mt-4 mb-28">
        {groups?.map((item: Group) => (
          <div
            className="flex justify-start gap-4 items-center cursor-pointer"
            key={item.id}
            onClick={() => router.push(`/group/${item.id}`)}>
            <Avatar className="rounded-md h-16 w-16">
              <AvatarImage src={item.avatar} />
              <AvatarFallback>
                <p>
                  {item.name[0]}
                  {item.name.split(" ")[1] ? item.name.split(" ")[1][0] : ""}
                </p>
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-md mb-1">{item.name}</p>
              <p className="text-sm text-primary dark:text-primary-foreground">
                Settled Up
              </p>
            </div>
          </div>
        ))}
      </div>

      <AddGroup
        open={openGroup}
        setOpen={setOpenGroup}
        setGroupForm={setGroupForm}
        handleAddGroup={handleAddGroup}
        groupForm={groupForm}
      />

      {/* Filter Groups */}
    </>
  );
}
