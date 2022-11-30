import React from 'react'
import { UserContext } from '../App';

const Context = () => {
  return (
    <div>
      Learning useCOntext
      <br />
      <UserContext.Consumer>
        {(value) => <div>{value}</div>}
      </UserContext.Consumer>
    </div>
  );
}

export default Context
