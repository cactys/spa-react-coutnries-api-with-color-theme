import { useEffect } from 'react';

import { options } from '../../utils/constants';
import { Wrapper } from './styles';

import { Search } from '../../UI/Search/Search';
import { CustomSelect } from '../../UI/CustomSelect/styles';


const Controls = ({ search, setSearch, region, setRegion, onSearch }) => {
  useEffect(() => {
    const regionValue = region?.value || '';
    onSearch(search, regionValue);
    // eslint-disable-next-line
  }, [search, region]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
};

export { Controls };
