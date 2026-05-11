"use client";

import DatePicker from "react-datepicker";

// import 'react-datepicker/dist/react-datepicker.css';
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import AfnInput from "./AfnInput";

interface AfnDatePickerProps {
  placeholder?: string;
  selected: Date | null;
  onChange: (date: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
}

export default function AfnDatePicker(props: AfnDatePickerProps) {
  const { placeholder, selected, onChange, minDate, maxDate } = props;
  return (
    <DatePicker
      customInput={<AfnInput width={"full"} />}
      dateFormat={"dd-MM-yyyy"}
      selected={selected}
      onChange={onChange}
      previousMonthButtonLabel={<LuChevronLeft />}
      nextMonthButtonLabel={<LuChevronRight />}
      className="peer"
      placeholderText={placeholder ?? "Enter your date"}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      showPopperArrow={false}
      minDate={minDate}
      maxDate={maxDate}
    />
  );
}
