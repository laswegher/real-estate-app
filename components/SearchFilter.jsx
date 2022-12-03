import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { filterData, getFilterValues } from '../constant/filter_data';

const SearchFilter = () => {
  const [filters, setFilters] = useState(filterData);

  const router = useRouter();

  const handleChange = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query });
  };

  return (
    <div className="my-4">
      <form className="flex items-center justify-center gap-4 flex-wrap">
        {filters.map((filter) => {
          return (
            <select
              key={filter.queryName}
              name={filter.queryName}
              onChange={(e) =>
                handleChange({ [filter.queryName]: e.target.value })
              }
              className="p-2 w-fit border rounded-md"
            >
              {filter?.items?.map((item) => {
                return (
                  <option
                    key={item.value}
                    value={item.value}
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          );
        })}
      </form>
    </div>
  );
};

export default SearchFilter;
