import Contact from '../Contact';
import uuid from 'uuid';
// app/src/components/__tests__/Login-test.js
import configureStore from 'redux-mock-store';

describe('<Contact />', () => {
  let wrapper;
  let store;
  beforeEach(() => {
    const initialState = {};
    // here it is possible to pass in any middleware if needed into //configureStore
    const mockStore = configureStore();
    //creates the store with any initial state or middleware needed
    store = mockStore(initialState);
  });

  it('renders correctly ', () => {
    wrapper = shallow(
      <Contact
        store={store}
        key={uuid()}
        contact={{
          id: 1,
          name: 'John Doe',
          email: 'john@gmail.com',
          phone: '555-555-5555'
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
