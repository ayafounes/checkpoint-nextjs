import React, { useEffect, useState } from 'react';

async function users() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <div>
      {users.map((user) => (
        <h1>{user.name}</h1> 
      ))}
    </div>
  );
}

export default users;
