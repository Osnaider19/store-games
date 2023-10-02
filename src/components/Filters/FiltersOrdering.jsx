import { ordering } from "./filters";
import { Select, SelectItem } from "@tremor/react";
export const FiltersOrdering = ({ setOrdering }) => {
  return (
    <div className="max-w-sm mx-auto space-y-6">
      <Select
        onValueChange={(e) => setOrdering(e)}
        placeholder="Ordering by popularity"
      >
        {ordering.map((order, index) => (
          <SelectItem key={index} value={order.value} defaultValue={""}>
            {order.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
