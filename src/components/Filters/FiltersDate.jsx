// import React from "react";
// import { useFetch } from "../../hooks/useFech";
// import { API_KEY, URL } from "../../config/config";
// import "./style.css";
// // import { BsCheck2 } from "react-icons/bs";
// // import * as Select from "@radix-ui/react-select";
// export const FiltersDate = ({ updateDate }) => {
//   const { data } = useFetch(`${URL}/games?key=${API_KEY}`);
//   return (
//     <>
//      <select
//         name="filters__date"
//         onChange={(e) => updateDate(e.target.value)}
//         id="countries"
//         className="bg-[#121212] border border-[#ffffff50] text-white text-lg rounded-lg block w-full py-1 cursor-pointer md:w-[200px]"
//       >
//         <option>Release date</option>
//         {data?.filters?.years?.map((year) => (
//           <option
//             key={year.count}
//             name="filters__date"
//             value={year.filter}
//             className="py-2 hover:bg-slate-900"
//           >
//             {year.decade} - {year.to}
//           </option>
//         ))}
//       </select>

//     </>
//   );
// };

import React from "react";
import * as Select from "@radix-ui/react-select";
import "./style.css";
import { BsCheck2 } from "react-icons/bs";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useFetch } from "../../hooks/useFech";
import { API_KEY, URL } from "../../config/config";

export const FiltersDate = ({ updateDate }) => {
  const { data } = useFetch(`${URL}/games?key=${API_KEY}`);
  return (
    <Select.Root
      onValueChange={(e) => {updateDate(e)}}
    >
      <Select.Trigger className="SelectTrigger" aria-label="Food">
        <Select.Value placeholder="Select a fruit…" />
        <Select.Icon className="SelectIcon">
          <MdKeyboardArrowUp />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <MdOutlineKeyboardArrowDown />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              <SelectItem value="">Release date</SelectItem>
              {data?.filters?.years?.map((year) => (
                <SelectItem value={year.filter} key={year.filter}>
                  {year.decade} - {year.to}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <MdKeyboardArrowUp />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item className={"SelectItem"} {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <BsCheck2 />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);
