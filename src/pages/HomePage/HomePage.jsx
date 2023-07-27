import { CardList } from '../../components/CardList/CardList';
import { Controls } from '../../components/Controls/Controls';

const HomePage = ({
  countries,
  search,
  setSearch,
  region,
  setRegion,
  onSearch,
}) => {
  return (
    <>
      <Controls
        search={search}
        setSearch={setSearch}
        region={region}
        setRegion={setRegion}
        onSearch={onSearch}
      />
      <CardList countries={countries} />
    </>
  );
};

export { HomePage };
