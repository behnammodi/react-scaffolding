import { init } from 'jetstate';
import { emit } from 'jetemit';

const initial = fields =>
  fields.forEach(field =>
    init({
      ...field,
      didUpdate: value => {
        field.didUpdate && field.didUpdate(value);
        emit(field.name, value);
      },
    }));

initial([
  { name: 'time', defaultValue: 0 },
]);