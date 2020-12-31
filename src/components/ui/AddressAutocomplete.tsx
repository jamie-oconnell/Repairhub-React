import { useState } from "react";
import AsyncSelect from "react-select/async";
import _ from "lodash";

interface Props {}

type MapboxResponce = {
  attribution?: string;
  features?: MapboxFeature[];
  query?: string[];
  type?: string;
};

type MapboxFeature = {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: {};
  text: string;
  place_name: string;
  center: number[];
};

interface FilteredResult {
  value: string;
  label: string;
}

type SelectInputAction = {
  action: "set-value" | "input-change" | "input-blur" | "menu-close";
};

const AddressAutocomplete = (props: Props) => {
  const [value, setValue] = useState("");

  const formatResults = (results: MapboxResponce) => {
    const filtered: FilteredResult[] = [];
    results.features?.forEach((result: MapboxFeature) => {
      filtered.push({ value: result.place_name, label: result.place_name });
    });

    return filtered;
  };

  const fetchAddresses = (query: string, callback: Function) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}&types=address`
    )
      .then((response) => response.json())
      .then((json) => {
        const items = formatResults(json);
        callback(items);
      });
  };

  const debouncedFetchAddresses = _.debounce(fetchAddresses, 250);

  const performSearch = (input: string, callback: Function) => {
    if (input === "") {
      return callback([]);
    }
    debouncedFetchAddresses(input, callback);
  };

  const handleInputChange = (inputValue: string, action: SelectInputAction) => {
    if (action.action !== "input-blur" && action.action !== "menu-close") {
      setValue(inputValue);
    }
  };

  const handleOnChange = (a: any, b: any) => {
    console.log(a);
    console.log(b);
  };

  return (
    <AsyncSelect
      cacheOptions
      loadOptions={performSearch}
      inputValue={value}
      onInputChange={handleInputChange}
      onChange={handleOnChange}
    />
  );
};

export default AddressAutocomplete;
