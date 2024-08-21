import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ChevronLeft, ImagePlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AddGroupProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  setGroupForm: React.Dispatch<
    React.SetStateAction<{ name: string; avatar: File }>
  >;
  groupForm: { name: string; avatar: File };
  handleAddGroup: () => void;
};

const AddGroup = ({
  open,
  setOpen,
  setGroupForm,
  handleAddGroup,
  groupForm,
}: AddGroupProps) => {
  return (
    <Drawer open={open} onOpenChange={setOpen} dismissible={false}>
      <DrawerContent className="h-full ">
        <div className="mx-auto w-full h-screen max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Create a Group</DrawerTitle>
            <span className="absolute left-4 top-9">
              <DrawerClose asChild>
                <ChevronLeft />
              </DrawerClose>
            </span>
          </DrawerHeader>
          <div className="px-4 py-8">
            <div className="flex items-center justify-start gap-4">
              <div className="rounded-xl border-dashed border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <input
                  type="file"
                  id="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files) {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setGroupForm((prev) => ({
                          ...prev,
                          avatar: file,
                        }));
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                <label htmlFor="file">
                  {groupForm.avatar ? (
                    <img
                      src={URL.createObjectURL(groupForm.avatar)}
                      alt="avatar"
                      className="h-16 w-16"
                    />
                  ) : (
                    <ImagePlus className="h-10 w-10 m-2" />
                  )}
                </label>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="groupName">Group Name</Label>
                <Input
                  type="groupName"
                  id="groupName"
                  className="text-md mt-1 bg-white dark:bg-background"
                  onChange={(e) =>
                    setGroupForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button
              onClick={() => {
                handleAddGroup();
              }}>
              Submit
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default AddGroup;
