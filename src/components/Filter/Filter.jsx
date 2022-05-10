import { LabelName, Label, FilterInput } from './StyledFilter';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);
  return (
    <Label>
      <LabelName>Find contacts by name</LabelName>
      <FilterInput
        type="text"
        name="filter"
        value={filterValue}
        onChange={evt => dispatch(setFilter(evt.target.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </Label>
  );
}

export default Filter;
