import React, { useState } from 'react';
import { Button, Input, Space } from 'antd';
import { Link } from 'react-router-dom'; // Import Link component
import { Box } from '@chakra-ui/react';

const App = () => {
  const [password, setPassword] = useState(''); // State to store the password input

  // Function to handle submit button click
  const handleSubmit = () => {
    if (password === '123456789') {
      // If password matches, programmatically click the hidden Link to navigate to "/home"
      document.getElementById('hiddenLink').click();
    } else {
      // If password doesn't match, display an error message or perform other actions
      console.log('Incorrect password');
    }
  };

  return (
    <Space direction="vertical" size="middle">

      <Space.Compact
        style={{
          width: '100%',
        }}
      >
        {/* Input field for password */}
        <Input 
          placeholder='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        {/* Submit button */}
        <Button type="primary" onClick={handleSubmit}>Submit</Button>
        {/* Hidden Link component */}
        <Link id="hiddenLink" to="/home" style={{ display: 'none' }}></Link>
      </Space.Compact>
    </Space>
  );
};

export default App

// // export default App;
// import React from 'react'

// export default function Password() {
//   return (
//     <div>password</div>
//   )
// }
