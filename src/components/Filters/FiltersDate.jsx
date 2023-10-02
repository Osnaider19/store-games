import { Select, SelectItem } from "@tremor/react";
import { filterDate } from "./filters";
export const FiltersDate = ({ setDate }) => {
  return (
    <div className="max-w-sm mx-auto space-y-6">
      <Select onValueChange={(e) => setDate(e)} placeholder="Release date">
        {filterDate.map((filter, index) => (
          <SelectItem key={index} value={filter.filter} defaultValue={""}>
            {filter.from} - {filter.to}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
