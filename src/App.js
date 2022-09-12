import React from 'react';
import UserCard from './components/UserCard';
import axios from 'axios';
import { useState, useEffect } from 'react';

const sampleEmployee = {
  gender: 'male',
  name: {
    first: 'Charlie',
    last: 'Thompson',
  },
  location: {
    street: {
      number: 761,
      name: 'Tay Street',
    },
    city: 'Timaru',
    postcode: 76111,
  },
  email: 'charlie.thompson@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
};

function App() {
  const [employee, setEmployee] = useState();

  const getEmployee = () => {
    axios
      .get('https://randomuser.me/api?nat=en')
      .then((response) => response.data)
      .then((data) => setEmployee(data.results[0]));
  };

  useEffect(() => {
    getEmployee();
  }, []);


  console.log(employee);

  return (
    <>
    {employee ? (
      <div className="App">
        <UserCard
          firstname={employee.name.first}
          lastname={employee.name.last}
          image={employee.picture.medium}
          email={employee.email}
        />
        <button class="margin" type="button" onClick={getEmployee}>
          {' '}
          get someone{' '}
        </button>
      </div>
    ) : <div class="margin" >loading...</div>}
  </>);
}
export default App;
