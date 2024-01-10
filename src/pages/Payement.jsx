import React, { useState } from "react";
import CourseTable from "../components/Tables/Table";
import { CiSearch } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { TbArrowsSort } from "react-icons/tb";
import { GoDownload } from "react-icons/go";
const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(13);
  const totalItems = 234;

  const tableData = Array.from({ length: itemsPerPage }, (_, i) => {
    return [
      <>
        <div className="">#281209</div>
      </>,
      <>
        <p>7 July 2023</p>
      </>,
      <>
        <p>₹1,278.23</p>
      </>,
      <>
        <p>₹22</p>
      </>,
    ];
  });

  const titleStats = [
    "Impressions",
    "Total Audience",
    "Engagements",
    "Engaged audience",
  ];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="px-12 mt-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="font-medium text-[#1A181E] text-xl">Overview</p>
          <div className="border-1 rounded px-2 py-1">
            <div className="flex gap-2">
              <div>Last Month</div>
              <div className="flex justify-center items-center">
                <RiArrowDropDownLine />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full h-28">
          <div className=" w-[480px] flex flex-col justify-between  bg-[#FFFFFF]  p-5">
            <div className="font-normal text-xl">Online Orders</div>
            <div className="font-medium text-3xl ">231</div>
          </div>
          <div className="w-[480px] flex flex-col justify-between  bg-[#FFFFFF] p-5 font-normal text-xl">
            <div className="font-normal text-xl">Amount Recieved</div>
            <div className="font-medium text-3xl">₹23,92,312.19</div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex gap-1 mb-4">
          <p className="font-medium text-xl">Transactions</p>
          <div className="font-medium text-xl">|</div>
          <p className="font-medium text-xl">This Month</p>
        </div>
        <div className="bg-[#FFFFFF]">
          <div className="flex justify-between py-4 px-4 items-center">
            <div className="flex items-center w-[248px] border-1 border-solid border-[#D9D9D9]">
              <div className="px-2 w-1/12">
                <CiSearch color="#5d5892" />
              </div>

              <input
                className="h-10 w-11/12 p-2 text-xs rounded-sm outline-none "
                type="text"
                placeholder="Search by Order Id..."
              />
            </div>
            <div className="flex gap-2">
              <div className="border-1 rounded h-5 p-4 flex justify-center items-center">
                <div className="flex gap-2">
                  <div className="cursor-pointer">Sort</div>
                  <div className="flex justify-center items-center">
                    <TbArrowsSort />
                  </div>
                </div>
              </div>
              <div className="border-1 rounded h-5 py-4 px-2 flex justify-center items-center ">
                <div className="flex justify-center items-center">
                  <GoDownload />
                </div>
              </div>
            </div>
          </div>
          <CourseTable
            header={[
              "OrderId",
              "Order date",
              "Order amount",
              "Transaction fees",
            ]}
            content={tableData}
            fixed={true}
          />
          <div className="flex items-center justify-center bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <div className="flex gap-6 items-center">
                    <a
                      href="#"
                      className="border-1 border-solid w-24 flex justify-center items-center"
                    >
                      <span className="text-[#4D4D4D] font-medium text-[16px] ">
                        Previous
                      </span>
                      <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </a>

                    <a href="#">1</a>
                    <span>...</span>
                    <a
                      href="#"
                      aria-current="page"
                      className="relative z-10 inline-flex items-center bg-[#146EB4] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-0 rounded"
                    >
                      10
                    </a>
                    <a href="#">11</a>

                    <a href="#">12</a>
                    <a href="#">13</a>
                    <a href="#">14</a>
                    <a href="#">15</a>
                    <a href="#">16</a>
                    <a href="#">17</a>
                    <a href="#">18</a>
                    <a
                      href="#"
                      className="border-1 border-solid w-24 flex justify-center items-center"
                    >
                      <span className="text-[#4D4D4D] font-medium text-[16px] ">
                        Next
                      </span>
                      <ChevronRightIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
