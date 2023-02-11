import { useSelector, useDispatch } from 'react-redux';

import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

import { Div, Label, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  const handleFilterChange = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <Div>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        id="filter"
        name="filter"
        type="text"
        value={filter}
        onChange={event => handleFilterChange(event.target.value)}
      ></Input>
    </Div>
  );
};
