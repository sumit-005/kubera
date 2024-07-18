"use client";
import React, { useState } from "react";
import { SlidersHorizontalIcon, SearchIcon } from "lucide-react";
import { BottomSheet } from "@/components/shared/bottom-sheet";

const GroupHeader = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const handleFilterButton = () => {
    // setOpenFilter(!openFilter);
  };
  const handleFilterOpen = (open: boolean) => {
    setOpenFilter(open);
  };
  return (
    <>
      <div className="flex justify-between items-center mb-8 cursor-pointer">
        <SlidersHorizontalIcon onClick={handleFilterButton} />
        <h1>Group</h1>
        <SearchIcon />
      </div>
      {openFilter && (
        <BottomSheet
          open={openFilter}
          setOpen={handleFilterOpen}
          title="Filters"
          children={<>Filter</>}
        />
      )}
    </>
  );
};

export default GroupHeader;
