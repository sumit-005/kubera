import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import DashboardHeader from "./components/header";

export default async function Dashboard() {
  return (
    <>
      {/* Header */}
      <DashboardHeader />
      {/* Balance Card */}
      <Card className="my-4 p-4 rounded-2xl bg-muted dark:bg-muted">
        <div className="flex justify-between items-center">
          <p className="text-xs font-light text-gray-400 ">Total Owed</p>
          <p className="text-xs font-light text-gray-400">Total Owe</p>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-light text-primary ">+₹15,092.86 </p>
          <p className="text-lg font-light text-secondary-foreground">
            -₹5,580.54
          </p>
        </div>
        <Progress value={57} />
        <div className="flex justify-between items-center mt-8 flex-wrap gap-y-4">
          <Button className="h-8 rounded-xl bg-secondary text-white dark:text-white dark:bg-secondary">
            Settle Up
          </Button>
          <Button
            variant="outline"
            className="h-8 rounded-xl bg-transperent dark:bg-transparent text-secondary dark:text-secondary border-secondary dark:border-secondary">
            View Details
          </Button>
          <Button
            variant="outline"
            className="h-8 rounded-xl bg-transperent dark:bg-transparent text-secondary dark:text-secondary border-secondary dark:border-secondary">
            Balance
          </Button>
        </div>
      </Card>

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
        <div className="flex justify-start gap-4 items-center">
          <Avatar className="rounded-md h-16 w-16">
            <AvatarImage src="https://picsum.photos/200" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-md mb-1">Munnar Trip 2024</p>
            <p className="text-sm text-primary dark:text-primary-foreground">
              Settled Up
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <Avatar className="rounded-md h-16 w-16">
            <AvatarImage src="https://picsum.photos/300" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-md mb-1">Goa Trip 2024</p>
            <p className="text-sm text-primary dark:text-primary-foreground">
              Settled Up
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <Avatar className="rounded-md h-16 w-16">
            <AvatarImage src="https://picsum.photos/400" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-md mb-1">Sharavati Apartment</p>
            <p className="text-sm text-secondary dark:text-secondary-foreground">
              you owe ₹500
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <Avatar className="rounded-md h-16 w-16">
            <AvatarImage src="https://picsum.photos/300" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-md mb-1">Munnar Trip 2024</p>
            <p className="text-sm text-primary dark:text-primary-foreground">
              Settled Up
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <Avatar className="rounded-md h-16 w-16">
            <AvatarImage src="https://picsum.photos/100" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-md mb-1">Munnar Trip 2024</p>
            <p className="text-sm text-secondary dark:text-secondary-foreground">
              you owe ₹300
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <Avatar className="rounded-md h-16 w-16">
            <AvatarImage src="https://picsum.photos/200" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-md mb-1">Munnar Trip 2024</p>
            <p className="text-sm text-primary dark:text-primary-foreground">
              Settled Up
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <Avatar className="rounded-md h-16 w-16">
            <AvatarImage src="https://picsum.photos/300" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-md mb-1">Goa Trip 2024</p>
            <p className="text-sm text-primary dark:text-primary-foreground">
              Settled Up
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <Avatar className="rounded-md h-16 w-16">
            <AvatarImage src="https://picsum.photos/400" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-md mb-1">Sharavati Apartment</p>
            <p className="text-sm text-secondary dark:text-secondary-foreground">
              you owe ₹500
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <Avatar className="rounded-md h-16 w-16">
            <AvatarImage src="https://picsum.photos/300" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-md mb-1">Munnar Trip 2024</p>
            <p className="text-sm text-primary dark:text-primary-foreground">
              Settled Up
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <Avatar className="rounded-md h-16 w-16">
            <AvatarImage src="https://picsum.photos/100" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-md mb-1">Munnar Trip 2024</p>
            <p className="text-sm text-secondary dark:text-secondary-foreground">
              you owe ₹300
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <Avatar className="rounded-md h-16 w-16">
            <AvatarImage src="https://picsum.photos/200" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-md mb-1">Munnar Trip 2024</p>
            <p className="text-sm text-primary dark:text-primary-foreground">
              Settled Up
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <Avatar className="rounded-md h-16 w-16">
            <AvatarImage src="https://picsum.photos/300" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-md mb-1">Goa Trip 2024</p>
            <p className="text-sm text-primary dark:text-primary-foreground">
              Settled Up
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <Avatar className="rounded-md h-16 w-16">
            <AvatarImage src="https://picsum.photos/400" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-md mb-1">Sharavati Apartment</p>
            <p className="text-sm text-secondary dark:text-secondary-foreground">
              you owe ₹500
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <Avatar className="rounded-md h-16 w-16">
            <AvatarImage src="https://picsum.photos/300" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-md mb-1">Munnar Trip 2024</p>
            <p className="text-sm text-primary dark:text-primary-foreground">
              Settled Up
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <Avatar className="rounded-md h-16 w-16">
            <AvatarImage src="https://picsum.photos/100" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-md mb-1">Munnar Trip 2024</p>
            <p className="text-sm text-secondary dark:text-secondary-foreground">
              you owe ₹300
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <Avatar className="rounded-md h-16 w-16">
            <AvatarImage src="https://picsum.photos/200" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-md mb-1">Munnar Trip 2024</p>
            <p className="text-sm text-primary dark:text-primary-foreground">
              Settled Up
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <Avatar className="rounded-md h-16 w-16">
            <AvatarImage src="https://picsum.photos/300" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-md mb-1">Goa Trip 2024</p>
            <p className="text-sm text-primary dark:text-primary-foreground">
              Settled Up
            </p>
          </div>
        </div>
      </div>

      {/* Filter Groups */}
    </>
  );
}
