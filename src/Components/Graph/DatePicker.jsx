import React, { useContext } from "react";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import Context from "../../Context/Context";

// DatePicker Component
const DatePicker = () => {
  const { setTimeStamp, timeStamp } = useContext(Context);

  return (
    <div>
      {/* DateRangePicker for selecting date range */}
      <DateRangePicker
        onChange={(item) => setTimeStamp([item.selection])}
        months={1}
        minDate={addDays(new Date(), -300)}
        maxDate={addDays(new Date(), 900)}
        direction="vertical"
        scroll={{ enabled: true }}
        ranges={timeStamp}
      />
    </div>
  );
};

export default DatePicker;