import { MdArrowDropDown } from "react-icons/md";
const CourseTable = ({
  header = [],
  content = [],
  border = false,
  fixed = false,
}) => {
  return (
    <div
      className={`mb-12 w-full rounded-md ${
        border ? "border" : "border-none"
      } border-solid border-body-300`}
    >
      <table
        className={`w-full table ${
          fixed ? "table-fixed" : "table-auto"
        } border-collapse overflow-auto scrollbar-hide`}
      >
        <thead
          className={`w-full ${
            border ? "border-b" : "border-none"
          } border-solid border-body-300 text-sm bg-[#5d5892]/10 `}
        >
          <tr className="text-left ">
            {header.map((cellHead, cellIndex) => (
              <>
                <th
                  className={`py-3 text-[#4D4D4D] ${
                    cellIndex == 0 ? "px-4" : " text-center"
                  }`}
                  key={cellIndex}
                >
                  {cellHead}
                </th>
              </>
            ))}
          </tr>
        </thead>
        <tbody className="text-base">
          {content.map((tableRow, key) => (
            <tr className="text-left border-b-1 border-solid w-3/4" key={key}>
              {tableRow.map((cell, cellIndex) => {
                return (
                  <>
                    <td
                      key={cellIndex}
                      className={` pt-5 text-xs ${
                        cellIndex == 0
                          ? "px-6 text-blue-500"
                          : "px-1 text-center"
                      }
                                     font-medium xs:text-sm`}
                      title={cell}
                    >
                      {cell}
                    </td>
                  </>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
