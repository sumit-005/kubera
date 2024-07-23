"use client";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import DashboardHeader from "./components/header";
import ExpenseDetailCard from "@/components/shared/expense-details-card";

export default function Dashboard() {
  const data = [
    {
      id: 1,
      name: "Munnar Trip 2024",
      status: "Settled Up",
      image: "https://picsum.photos/200",
    },
    {
      id: 2,
      name: "Goa Trip 2024",
      status: "Settled Up",
      image: "https://picsum.photos/300",
    },
    {
      id: 3,
      name: "Sharavati Apartment",
      status: "you owe ₹500",
      image: "https://picsum.photos/400",
    },
    {
      id: 4,
      name: "Munnar Trip 2024",
      status: "Settled Up",
      image: "https://picsum.photos/300",
    },
    {
      id: 5,
      name: "Munnar Trip 2024",
      status: "you owe ₹300",
      image: "https://picsum.photos/100",
    },
    {
      id: 6,
      name: "Munnar Trip 2024",
      status: "Settled Up",
      image: "https://picsum.photos/200",
    },
    {
      id: 7,
      name: "Goa Trip 2024",
      status: "Settled Up",
      image: "https://picsum.photos/300",
    },
    {
      id: 8,
      name: "Sharavati Apartment",
      status: "you owe ₹500",
      image: "https://picsum.photos/400",
    },
    {
      id: 9,
      name: "Munnar Trip 2024",
      status: "Settled Up",
      image: "https://picsum.photos/300",
    },
    {
      id: 10,
      name: "Munnar Trip 2024",
      status: "you owe ₹300",
      image: "https://picsum.photos/200",
    },
    {
      id: 11,
      name: "Munnar Trip 2024",
      status: "Settled Up",
      image: "https://picsum.photos/300",
    },
    {
      id: 12,
      name: "Goa Trip 2024",
      status: "Settled Up",
      image: "https://picsum.photos/400",
    },
  ];

  const router = useRouter();

  const settleUp = () => {
    console.log("Settle Up");
  };

  const balance = () => {
    console.log("Balance");
  };

  const viewDetails = () => {
    console.log("View Details");
  };

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
          className="h-8 rounded-lg bg-transparent  text-primary dark:text-primary dark:bg-transparent border-primary dark:border-primary">
          Add +
        </Button>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {data.map((item) => (
          <div
            className="flex justify-start gap-4 items-center cursor-pointer"
            key={item.id}
            onClick={() => router.push(`/group/${item.id}`)}>
            <Avatar className="rounded-md h-16 w-16">
              <AvatarImage src={item.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-md mb-1">{item.name}</p>
              <p className="text-sm text-primary dark:text-primary-foreground">
                {item.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Groups */}
    </>
  );
}
