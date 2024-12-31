import { useState } from "react";
import "./SelectOptions.css";

const SelectOptions = ({ data }: { data: { default_value: string; options: { value: string; label: string; }[] } }) => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <select
            className="select-options"
            value={selectedOption}
            onChange={handleChange}
        >
            <option value="" disabled>
                {data.default_value}
            </option>
            {
                data.options.map((item, i) => <option key={i} value={item.value}>{item.label}</option>)
            }
        </select>
    );
};

export default SelectOptions;
