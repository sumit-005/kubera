"use client";
import React from "react";
import GroupHeader from "../components/header";
import { useParams } from "next/navigation";
import ExpenseDetailCard from "@/components/shared/expense-details-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getCurrency } from "@/utils/curreny";

const Group = () => {
  const params = useParams();
  const id = params.id;

  const settleUp = () => {
    console.log("Settle Up");
  };

  const balance = () => {
    console.log("Balance");
  };

  const viewDetails = () => {
    console.log("View Details");
  };

  const expenses = [
    {
      id: 8,
      name: "PDC printout",
      statusText: "you owe ₹500",
      image: "https://picsum.photos/400",
      status: "owe",
      amount: 500,
      date: "May, 06",
    },
    {
      id: 10,
      name: "Haldiram's",
      statusText: "you owe ₹300",
      image: "https://picsum.photos/200",
      status: "owe",
      amount: 500,
      date: "May, 06",
    },
    {
      id: 12,
      name: "Groceries",
      statusText: "You paid ₹500",
      image: "https://picsum.photos/400",
      status: "lent",
      amount: 500,
      date: "May, 06",
    },
    // add more random data, use the above objects as reference
  ];
  return (
    <>
      <GroupHeader />
      <ExpenseDetailCard
        settleUp={settleUp}
        viewDetails={viewDetails}
        balance={balance}
        totalOwe={4434}
        totalOwed={2353}
        groupDetails={{
          groupAvatar: "https://picsum.photos/400",
          groupName: "Munnar Trip 2024",
          members: [
            {
              name: "John Doe",
              amount: 500,
              currencyCode: "INR",
            },
            {
              name: "Jane Doe",
              amount: 300,
              currencyCode: "INR",
            },
          ],
          membersAmountList: [
            {
              name: "John Doe",
              amount: 500,
            },
            {
              name: "Jane Doe",
              amount: 300,
            },
          ],
        }}
      />
      {/* Group Expenses */}
      <p className="text-xs font-normal text-gray-400 mt-6">July, 2024</p>
      {expenses.map((expense) => (
        <div className="flex justify-between items-center my-4">
          <div className="flex justify-flex-start items-center">
            <Avatar className="rounded-full h-12 w-12 mr-2">
              <AvatarImage src={expense.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-sm font-normal text-foreground">
                {expense.name}
              </p>
              <p className="text-xs font-normal text-gray-400">
                {expense.statusText}
              </p>
            </div>
          </div>

          <Badge
            className={`ml-2 rounded-lg ${expense.status === "owe" ? "dark:bg-secondary" : "dark:bg-primary-foreground"}`}>
            {expense.status === "owe" ? (
              <>
                <span className="h-1 w-1 bg-white rounded-full inline-block mr-1"></span>
                <span className="text-cs font-medium text-white">Borrowed</span>
              </>
            ) : (
              <>
                <span className="h-1 w-1 bg-black rounded-full inline-block mr-1"></span>
                <span className="text-cs font-medium text-black">Lent</span>
              </>
            )}
          </Badge>
          <div className="flex flex-col text-right">
            <p className="text-[10px] font-light text-gray-light">
              {expense.date}
            </p>
            <p
              className={`text-sm font-medium ${expense.status === "owe" ? "text-secondary-foreground" : "text-primary-foreground"}`}>
              {getCurrency(expense.amount)}
            </p>
          </div>
        </div>
      ))}
      <p className="text-xs font-normal text-gray-400 mt-6">June, 2024</p>
      {expenses.map((expense) => (
        <div className="flex justify-between items-center my-4">
          <div className="flex justify-flex-start items-center">
            <Avatar className="rounded-full h-12 w-12 mr-2">
              <AvatarImage src={expense.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-sm font-normal text-foreground">
                {expense.name}
              </p>
              <p className="text-xs font-normal text-gray-400">
                {expense.statusText}
              </p>
            </div>
          </div>

          <Badge
            className={`ml-2 rounded-lg ${expense.status === "owe" ? "dark:bg-secondary" : "dark:bg-primary-foreground"}`}>
            {expense.status === "owe" ? (
              <>
                <span className="h-1 w-1 bg-white rounded-full inline-block mr-1"></span>
                <span className="text-cs font-medium text-white">Borrowed</span>
              </>
            ) : (
              <>
                <span className="h-1 w-1 bg-black rounded-full inline-block mr-1"></span>
                <span className="text-cs font-medium text-black">Lent</span>
              </>
            )}
          </Badge>
          <div className="flex flex-col text-right">
            <p className="text-[10px] font-light text-gray-light">
              {expense.date}
            </p>
            <p
              className={`text-sm font-medium ${expense.status === "owe" ? "text-secondary-foreground" : "text-primary-foreground"}`}>
              {getCurrency(expense.amount)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Group;
