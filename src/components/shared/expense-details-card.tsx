import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { getCurrency } from "@/utils/curreny";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export type ExpenseDetailCardProps = {
  totalOwed: number;
  totalOwe: number;
  settleUp: () => void;
  viewDetails: () => void;
  balance: () => void;
  groupDetails?: {
    groupName: string;
    groupAvatar: string;
    members: {
      name: string;
      amount: number;
      currencyCode: string;
    }[];
    membersAmountList: {
      name: string;
      amount: number;
    }[];
  };
};

const ExpenseDetailCard = ({
  totalOwed,
  totalOwe,
  settleUp,
  viewDetails,
  balance,
  groupDetails,
}: ExpenseDetailCardProps) => {
  return (
    <Card className="my-4 p-4 rounded-2xl bg-muted dark:bg-muted">
      <div className="flex">
        {groupDetails?.groupAvatar && (
          <Avatar className="rounded-xl h-20 w-20 mr-4">
            <AvatarImage src={groupDetails?.groupAvatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}
        <div className="w-full">
          <div className="flex justify-between items-center cursor-pointer ">
            <p className="text-xs font-light text-gray-400 ">Total Owed</p>
            <p className="text-xs font-light text-gray-400">Total Owe</p>
          </div>
          <div className="flex justify-between items-center my-2">
            <p className="text-lg font-light text-primary ">
              {" "}
              {getCurrency(totalOwed)}
            </p>
            <p className="text-lg font-light text-secondary-foreground">
              {getCurrency(totalOwe)}
            </p>
          </div>

          <Progress value={57} />
        </div>
      </div>

      <div className="flex justify-between items-center mt-8 flex-wrap gap-y-4">
        <Button
          className="h-8 rounded-xl bg-secondary text-white dark:text-white dark:bg-secondary"
          onClick={settleUp}>
          Settle Up
        </Button>
        <Button
          variant="outline"
          className="h-8 rounded-xl bg-transperent dark:bg-transparent text-secondary dark:text-secondary border-secondary dark:border-secondary"
          onClick={viewDetails}>
          View Details
        </Button>
        <Button
          variant="outline"
          className="h-8 rounded-xl bg-transperent dark:bg-transparent text-secondary dark:text-secondary border-secondary dark:border-secondary"
          onClick={balance}>
          Balance
        </Button>
      </div>
    </Card>
  );
};

export default ExpenseDetailCard;
