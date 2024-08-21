"use client";
import React from "react";
import FriendsHeader from "./components/header";
import { useParams } from "next/navigation";
import ExpenseDetailCard from "@/components/shared/expense-details-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { getCurrency } from "@/utils/curreny";

const Group = () => {
  const params = useParams();
  const id = params.id;

  const settleUp = () => {
    // console.log("Settle Up");
  };

  const balance = () => {
    // console.log("Balance");
  };

  const viewDetails = () => {
    // console.log("View Details");
  };

  const friends = [
    {
      id: 1,
      name: "Aarav Patel",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      status: "owe",
      amount: 150,
    },
    {
      id: 2,
      name: "Ananya Sharma",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      status: "paid",
      amount: 200,
    },
    {
      id: 3,
      name: "Vivaan Singh",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      status: "owe",
      amount: 300,
    },
    {
      id: 4,
      name: "Diya Gupta",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      status: "paid",
      amount: 400,
    },
    {
      id: 5,
      name: "Arjun Kumar",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      status: "owe",
      amount: 250,
    },
    {
      id: 6,
      name: "Isha Verma",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      status: "paid",
      amount: 350,
    },
    {
      id: 7,
      name: "Kabir Reddy",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      status: "owe",
      amount: 450,
    },
    {
      id: 8,
      name: "Nora Doe",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      status: "owe",
      amount: 500,
    },
    {
      id: 9,
      name: "Riya Mehta",
      image: "https://randomuser.me/api/portraits/women/9.jpg",
      status: "paid",
      amount: 600,
    },
    {
      id: 10,
      name: "Ayaan Joshi",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      status: "owe",
      amount: 700,
    },
  ];
  return (
    <>
      <FriendsHeader />
      <ExpenseDetailCard
        settleUp={settleUp}
        viewDetails={viewDetails}
        balance={balance}
        totalOwe={4434}
        totalOwed={2353}
      />
      <div className="flex justify-between items-center mt-5">
        <h2 className="text-lg">Friends</h2>
        <Button
          variant="link"
          className="h-8 px-0 rounded-lg bg-transparent text-primary dark:text-primary dark:bg-transparent border-primary dark:border-primary">
          All Friends
          <ChevronDown />
        </Button>
      </div>

      {/* Group Friends */}
      {friends.map((expense) => (
        <div className="flex justify-between items-center my-6">
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center gap-4">
              <Avatar className="rounded-full h-12 w-12 mr-2">
                <AvatarImage src={expense.image} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm font-normal text-foreground">
                {expense.name}
              </p>
            </div>
            <p
              className={`text-sm font-medium ${expense.status === "owe" ? "text-secondary dark:text-secondary-foreground" : "text-primary dark:text-primary-foreground"}`}>
              {expense.status === "owe" ? "-" : "+"}{" "}
              {getCurrency(expense.amount)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Group;
