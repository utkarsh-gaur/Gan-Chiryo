import React from "react";
import { IconChevronRight, IconFolder } from "@tabler/icons-react";

const RecordsCard = ({ record, onNavigate }) => {
  return (
    <div className="flex flex-col rounded-xl border border-neutral-800 bg-[#13131a] p-4 shadow-sm">
      <div className="flex justify-between gap-x-3 p-4 md:p-5">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-blue-200">
          <IconFolder size={70} className="text-green-500" />
        </div>
      </div>
      <a
        href=""
        onClick={() => {
          onNavigate(record.recordName);
        }}
        className="text inline-flex cursor-pointer items-center justify-between rounded-b-xl border-t border-neutral-800 px-4 py-3 text-sm text-neutral-400 hover:bg-neutral-800 md:px-5"
      >
        {record.recordName}
        <IconChevronRight />
      </a>
    </div>
  );
};

export default RecordsCard;
