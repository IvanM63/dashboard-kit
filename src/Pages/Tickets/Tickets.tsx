import React from "react";
import Layout from "../Layout";

import { FaSortAmountUp } from "react-icons/fa";
import { FaFilter, FaSort, FaPlus } from "react-icons/fa6";
import Tables from "./Tables";
import MyButton from "../../components/MyButton";

const Tickets = () => {
  return (
    <Layout>
      <div className="flex flex-col px-8 py-2 ">
        <div
          className="rounded-lg border-2 border-gray-200 
        h-full  bg-white dark:bg-gray-800 dark:border-gray-950"
        >
          {/* Title */}
          <div className="flex flex-row items-center justify-between p-8">
            <h1 className="font-semibold text-lg dark:text-gray-50">
              All tickets
            </h1>
            {/* Right Section */}
            <div className="flex flex-row justify-end items-center space-x-8">
              {/* Button add ticker */}
              <MyButton
                title="Create Ticket"
                color="bg-primary"
                icon={<FaPlus />}
              />

              {/* Sort */}
              <div className="flex flex-row items-center space-x-2">
                <FaSortAmountUp className="text-gray-400 " />
                <h1 className="text-sm font-semibold dark:text-gray-100">
                  Sort
                </h1>
              </div>
              {/* Filter */}
              <div className="flex flex-row items-center space-x-2">
                <FaFilter className="text-gray-400" />
                <h1 className="text-sm font-semibold dark:text-gray-100">
                  Filter
                </h1>
              </div>
            </div>
          </div>
          {/* Table Section */}
          <Tables />
        </div>
      </div>
    </Layout>
  );
};

export default Tickets;
