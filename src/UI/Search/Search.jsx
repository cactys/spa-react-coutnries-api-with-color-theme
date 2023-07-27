import { BiSearchAlt } from 'react-icons/bi';
import { Input, InputContainer } from './styles';

const Search = ({ search, setSearch }) => {
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };
  return (
    <InputContainer>
      <BiSearchAlt size={32} />
      <Input onChange={handleSearch} value={search} />
    </InputContainer>
  );
};

export { Search };
