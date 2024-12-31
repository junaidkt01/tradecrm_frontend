import { useState } from "react";
import Breadcrumbs from "../../components/Buttons/Breadcrumbs/Breadcrumbs";
import SearchInput from "../../components/SeachInputs/SearchInput";
import SelectOptions from "../../components/SelectOptions/SelectOptions";
import { useIB } from "../../Hooks/useIB";
import IbAndSubIbTable from "../../components/IbAndSubIbTable/IbAndSubIbTable";

const IbAndSubIb = () => {

    const filter_by_status = {
        default_value: "Filter By Status",
        options: [
            { value: "Pending", label: "pending" },
            { value: "Approved", label: "approved" },
            { value: "Suspended", label: "suspended" },
        ]
    }

    const search_by = {
        default_value: "Search By",
        options: [
            { value: "name", label: "Name" },
            { value: "email", label: "Email" },
        ]
    }

    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (value: string) => {
        setSearchValue(value);
    };

    const { ibData, isError, isLoading } = useIB('/', { searchTerm: searchValue, page: 1, limit: 10 });

    return (
        <div className="ib-and-subib pages-wrapper" >
            <Breadcrumbs title="IB / IB & Sub IB" />
            <div className="table-control-btns" >
                <div className="search-and-refresh" >
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "13px" }} >
                    <SelectOptions data={filter_by_status} />
                    <SelectOptions data={search_by} />
                    <SearchInput onSearchChange={handleSearchChange} />
                </div>
            </div>
            {/* <IbAndSubIbTable /> */}
            <IbAndSubIbTable data={ibData} isLoading={isError || isLoading} />
        </div>
    )
}

export default IbAndSubIb;