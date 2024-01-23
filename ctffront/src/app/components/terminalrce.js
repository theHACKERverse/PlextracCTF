import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const MyTerminal = () => {
  const [socket, setSocket] = useState(null);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    const newSocket = io('http://localhost:3001'); // Replace with your backend URL
    setSocket(newSocket);

    // Handle incoming data from the backend and update the output
    newSocket.on('output', (data) => {
      setOutput((prevOutput) => prevOutput + data + '\n');
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleExecuteCommand = () => {
    if (socket && input.trim() !== '') {
      // Send the command to the backend
      socket.emit('command', input.trim());
      setInput('');
    }
  };

  return (
    <div>
      <textarea className='bg-black text-white' value={output} readOnly rows={10} cols={50} />
      <input className='text-black' type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleExecuteCommand}>Execute Command</button>
    </div>
  );
};

export default MyTerminal;
