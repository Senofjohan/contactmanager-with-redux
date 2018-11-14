import reducers from '../../../reducers/contactReducer';

test('reducers', () => {
  let state;
  state = reducers(
    {
      contact: {
        contacts: [
          {
            id: 1,
            name: 'John Doe',
            email: 'john@gmail.com',
            phone: '555-555-5555'
          },
          {
            id: 2,
            name: 'Karen Williams',
            email: 'karen@gmail.com',
            phone: '444-444-4444'
          },
          {
            id: 3,
            name: 'Henry Johnson',
            email: 'henry@gmail.com',
            phone: '333-333-333'
          }
        ]
      }
    },
    { type: 'GET_CONTACTS' }
  );
  expect(state).toEqual({
    contact: {
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@gmail.com',
          phone: '555-555-5555'
        },
        {
          id: 2,
          name: 'Karen Williams',
          email: 'karen@gmail.com',
          phone: '444-444-4444'
        },
        {
          id: 3,
          name: 'Henry Johnson',
          email: 'henry@gmail.com',
          phone: '333-333-333'
        }
      ]
    }
  });
});

test('Delete reducer', () => {
  let state;
  state = reducers(
    {
      contact: {
        contacts: [
          {
            id: 'e74e3929-83d6-4551-87aa-21eccd400e80',
            name: 'joe',
            email: '2@mail.com',
            phone: '123'
          },
          {
            id: 1,
            name: 'John Doe',
            email: 'john@gmail.com',
            phone: '555-555-5555'
          },
          {
            id: 2,
            name: 'Karen Williams',
            email: 'karen@gmail.com',
            phone: '444-444-4444'
          },
          {
            id: 3,
            name: 'Henry Johnson',
            email: 'henry@gmail.com',
            phone: '333-333-333'
          }
        ]
      }
    },
    { type: 'GET_CONTACTS' }
  );
  expect(state).toEqual({
    contact: {
      contacts: [
        {
          id: 'e74e3929-83d6-4551-87aa-21eccd400e80',
          name: 'joe',
          email: '2@mail.com',
          phone: '123'
        },
        {
          id: 1,
          name: 'John Doe',
          email: 'john@gmail.com',
          phone: '555-555-5555'
        },
        {
          id: 2,
          name: 'Karen Williams',
          email: 'karen@gmail.com',
          phone: '444-444-4444'
        },
        {
          id: 3,
          name: 'Henry Johnson',
          email: 'henry@gmail.com',
          phone: '333-333-333'
        }
      ]
    }
  });
});
