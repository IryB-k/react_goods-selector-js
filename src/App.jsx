import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [value, setValue] = useState('Jam');
  let displayInfo = (
    <h1 className="title is-flex is-align-items-center">No goods selected</h1>
  );

  if (value) {
    displayInfo = (
      <h1 className="title is-flex is-align-items-center">
        {value} is selected
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setValue(null)}
        />
      </h1>
    );
  }

  return (
    <main className="section container">
      {displayInfo}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={good === value ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  data-cy={`${value === good ? 'RemoveButton' : 'AddButton'}`}
                  type="button"
                  className={`button ${value === good ? 'is-info' : ''}`}
                  onClick={() => setValue(good === value ? null : good)}
                >
                  {good === value ? '-' : '+'}
                </button>
              </td>
              <td
                data-cy="GoodTitle"
                className="is-vcentered"
                onClick={() => setValue(good === value ? null : good)}
              >
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
