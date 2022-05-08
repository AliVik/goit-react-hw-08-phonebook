import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormTag, LabelNames, Label, Button } from './StyledForm';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const OnInputChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const OnFormSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    onSubmit({ name, number });
    form.reset();
  };

  return (
    <FormTag onSubmit={OnFormSubmit}>
      
        <Label>
          <LabelNames>Name</LabelNames>
          <input
            type="text"
            onChange={OnInputChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <LabelNames>Number</LabelNames>
          <input
            type="tel"
            onChange={OnInputChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
     

      <Button type="submit" name="button">
        Add contact
      </Button>
    </FormTag>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};
