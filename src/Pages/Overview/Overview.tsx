import React, { useEffect } from "react";
import Layout from "../Layout";
import { FaPlus, FaCheck } from "react-icons/fa6";
import Chart from "./Chart";

const Overview = () => {
  return (
    <Layout>
      <div className="flex flex-col px-8 py-2 pb-6 space-y-6">
        {/* TICKET BOX GRID */}
        <div className="grid grid-cols-2  lg:grid-cols-4 w-full gap-x-2 gap-y-2">
          <TicketBox title="Unresolved" count={60} />
          <TicketBox title="Overdue" count={16} />
          <TicketBox title="Open" count={43} />
          <TicketBox title="On Hold" count={64} />
        </div>
        {/* SECOND SECTION WITH GRAPH */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 rounded-lg border-2 border-gray-200
        h-full md:h-96 bg-white gap-y-2 dark:bg-gray-800 dark:border-gray-950"
        >
          {/* GRAPH LINE */}
          <div className="flex flex-col col-span-2 py-8">
            {/* Title */}
            <div className="flex items-center justify-between px-8">
              <h1 className="font-bold text-lg dark:text-gray-50">
                Today's trends
              </h1>
            </div>
            {/* SUB TITLE */}
            <div className="flex items-center justify-between px-8 mb-4">
              <h1 className="text-xs font-semibold text-gray-300">
                as of 25 May 2019, 09:41 PM
              </h1>
              {/* Right Section */}
              <div className="flex flex-row justify-end items-center space-x-8">
                {/* Sort */}
                <div className="flex flex-row justify-center items-center space-x-2">
                  <div className="bg-primary w-5 h-[2px] rounded-xl" />
                  <h1 className="text-xs font-semibold text-gray-300 ">
                    Today
                  </h1>
                </div>
                {/* Filter */}
                <div className="flex flex-row items-center space-x-2">
                  <div className="bg-gray-300 w-5 h-[2px] rounded-xl" />
                  <h1 className="text-xs font-semibold text-gray-300">
                    Yesterday
                  </h1>
                </div>
              </div>
            </div>

            <Chart />
          </div>
          {/* INFO GRAPH */}
          <div className="flex flex-col  md:border-l-2 dark:border-gray-950">
            <GraphBox title="Resolved" count={"449"} />
            <GraphBox title="Received" count={"426"} />
            <GraphBox title="Average first response" count={"33m"} />
            <GraphBox title="Average response" count={"3h 8m"} />
            <GraphBox title="Resolution within" count={"94%"} />
          </div>
        </div>
        {/* THIRD SECTION WITH TICKETS AND TASK */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 
        h-full  gap-x-4 gap-y-2"
        >
          {/* UNRESOLVED TICKET */}
          <div
            className="flex flex-col rounded-lg border-2
           border-gray-200 bg-white p-8 pb-6 dark:bg-gray-800 dark:border-gray-950"
          >
            {/* Title */}
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-bold text-lg dark:text-gray-50">
                Unresolved tickets
              </h1>
              <h1 className="text-sm font-semibold text-primary cursor-pointer">
                View details
              </h1>
            </div>
            {/* SUB TITLE */}
            <div className="flex flex-row items-center mt-1 space-x-1">
              <h1 className="text-sm font-semibold text-gray-300">Group:</h1>
              <h1 className="text-sm font-semibold text-gray-600 dark:text-gray-100">
                Support
              </h1>
            </div>
            {/* CONTENT */}
            <div className=" h-full mt-6">
              <div className="flex flex-row items-center justify-between">
                <h1 className="font-semibold text-base dark:text-gray-50">
                  Waiting on Feature Request
                </h1>
                <h1 className="text-sm font-semibold text-gray-400 dark:text-gray-100">
                  4238
                </h1>
              </div>
              {/* Divider */}
              <div className="h-[1.5px] bg-gray-200 -mx-8 my-4 dark:bg-gray-950" />
              <div className="flex flex-row items-center justify-between">
                <h1 className="font-semibold text-base dark:text-gray-50">
                  Awaiting Customer Response
                </h1>
                <h1 className="text-sm font-semibold text-gray-400 dark:text-gray-100">
                  1005
                </h1>
              </div>
              {/* Divider */}
              <div className="h-[1.5px] bg-gray-200 -mx-8 my-4 dark:bg-gray-950" />
              <div className="flex flex-row items-center justify-between">
                <h1 className="font-semibold text-base dark:text-gray-50">
                  Awaiting Developer Fix
                </h1>
                <h1 className="text-sm font-semibold text-gray-400 dark:text-gray-100">
                  914
                </h1>
              </div>
              {/* Divider */}
              <div className="h-[1.5px] bg-gray-200 -mx-8 my-4 dark:bg-gray-950" />
              <div className="flex flex-row items-center justify-between">
                <h1 className="font-semibold text-base dark:text-gray-50">
                  Pending
                </h1>
                <h1 className="text-sm font-semibold text-gray-400 dark:text-gray-100">
                  281
                </h1>
              </div>
            </div>
          </div>
          {/* Tasks */}
          <div
            className="flex flex-col rounded-lg border-2 h-full
           border-gray-200 bg-white p-8 pb-6 dark:bg-gray-800 dark:border-gray-950"
          >
            {/* Title */}
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-bold text-lg dark:text-gray-50">Tasks</h1>
              <h1 className="text-sm font-semibold text-primary cursor-pointer">
                View details
              </h1>
            </div>
            {/* SUB TITLE */}
            <h1 className="text-sm font-semibold text-gray-300">Today</h1>
            {/* CONTENT */}
            <div className=" h-full mt-6">
              {/* CREATE NEW TASK */}
              <div className="flex flex-row items-center justify-between">
                <input
                  className="font-semibold text-base text-gray-300 outline-none
                  placeholder-gray-300 dark:bg-gray-800"
                  type="text"
                  placeholder="Create new task"
                />
                {/* ADD ICON */}
                <button
                  className="flex bg-gray-200 w-8 h-8 justify-center items-center 
                hover:bg-gray-300 rounded-lg"
                >
                  <FaPlus className="fill-gray-600" size={20} />
                </button>
              </div>
              {/* Divider */}
              <div className="h-[1.5px] bg-gray-200 -mx-8 my-3 dark:bg-gray-950" />

              <TaskItem
                title="Finish ticket update"
                tick={true}
                status="URGENT"
              />
              {/* Divider */}
              <div className="h-[1.5px] bg-gray-200 -mx-8 my-3 dark:bg-gray-950" />
              <TaskItem
                title="Create new ticket example"
                tick={false}
                status="NEW"
              />
            </div>
            {/* Divider */}
            <div className="h-[1.5px] bg-gray-200 -mx-8 my-3 dark:bg-gray-950" />
            <TaskItem
              title="Update ticket report"
              tick={false}
              status="DEFAULT"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const TaskItem = ({
  title,
  tick,
  status,
}: {
  title: string;
  tick: boolean;
  status: string;
}) => {
  const [tickState, setTickState] = React.useState(tick);
  useEffect(() => {
    setTickState(tick);
  }, [tick]);
  return (
    <div className="flex flex-row items-center justify-between">
      {/* Check Button */}
      <div className="flex flex-row items-center space-x-2">
        <button
          className={`flex w-6 h-6 justify-center items-center rounded-full
         ${tickState ? "bg-primary" : "border-2"}
         `}
          onClick={() => setTickState(!tickState)}
        >
          <FaCheck className="fill-white p-[2px]" size={20} />
        </button>
        <h1 className="font-semibold text-base dark:text-gray-50">{title}</h1>
      </div>

      <div
        className={`p-2 rounded-xl text-xs 
                font-semibold  tracking-wide
                ${
                  status === "NEW"
                    ? "bg-green-400 text-white dark:bg-green-500 dark:text-gray-100"
                    : status === "URGENT"
                    ? "bg-yellow-400 text-white dark:bg-yellow-500 dark:text-gray-100"
                    : "bg-gray-100 text-gray-400"
                }
                `}
      >
        {status}
      </div>
    </div>
  );
};

export const GraphBox = ({
  title,
  count,
}: {
  title: string;
  count: string;
}) => {
  return (
    <div className="flex flex-col h-full justify-center items-center p-2 border-b-2 dark:border-gray-950">
      <h1 className="font-semibold text-gray-400 text-base dark:text-gray-100">
        {title}
      </h1>
      <h1 className="font-bold text-xl dark:text-gray-50">{count}</h1>
    </div>
  );
};

export const TicketBox = ({
  title,
  count,
}: {
  title: string;
  count: number;
}) => {
  return (
    <div
      className="group w-full h-32 bg-white rounded-lg border-2
     border-gray-200 justify-center items-center flex flex-col space-y-2
     hover:border-primary  transition-all duration-200 cursor-pointer dark:hover:border-primary dark:bg-gray-800 dark:border-gray-950"
    >
      <h1
        className="font-semibold text-gray-400 text-lg
      group-hover:text-primary dark:text-gray-100"
      >
        {title}
      </h1>
      <h1 className="font-bold text-3xl group-hover:text-primary dark:text-gray-50">
        {count}
      </h1>
    </div>
  );
};

export default Overview;
