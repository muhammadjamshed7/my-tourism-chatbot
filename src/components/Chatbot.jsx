// 'use client';
// import React, { useState } from 'react';
// import { Box, Button, TextField, Typography, Paper, AppBar, Toolbar, IconButton, Avatar } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
// import PhoneIcon from '@mui/icons-material/Phone';
// import { format } from 'date-fns';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const handleSend = async () => {
//     if (input.trim() === '') return;

//     const timestamp = new Date();
//     const userMessage = { text: input, sender: 'user', timestamp };
//     setMessages([...messages, userMessage]);
//     setInput('');

//     try {
//       const response = await fetch('/api/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: input }),
//       });

//       const data = await response.json();
//       if (Array.isArray(data.reply)) {
//         data.reply.forEach(reply => {
//           const botMessage = { text: reply.text, sender: 'bot', image: reply.image, timestamp: new Date() };
//           setMessages(prevMessages => [...prevMessages, botMessage]);
//         });
//       } else {
//         const botMessage = { text: data.reply, sender: 'bot', timestamp: new Date() };
//         setMessages(prevMessages => [...prevMessages, botMessage]);
//       }
//     } catch (error) {
//       console.error('Error sending message to server:', error);
//     }
//   };

//   const handleCall = () => {
//     const phoneNumber = '+1234567890'; // Replace with the actual phone number
//     window.location.href = `tel:${phoneNumber}`;
//   };

//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         width: 400,
//         height: 600,
//         display: 'flex',
//         flexDirection: 'column',
//         backgroundImage: 'url(https://example.com/chatbot-background.jpg)', // Replace with the actual URL of your image
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         color: '#fff',
//       }}
//     >
//       <AppBar position="static">
//         <Toolbar>
//           <Avatar
//             src="https://aljanantravelandtours.com/wp-content/uploads/2018/12/1.png"
//             sx={{ marginRight: 2, width: 40, height: 40 }}
//           />
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Al Janan Travel and Tourism
//           </Typography>
//           <IconButton color="inherit" onClick={handleCall}>
//             <PhoneIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
//         {messages.map((msg, index) => (
//           <Box key={index} sx={{ my: 1, textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
//             <Typography
//               sx={{
//                 display: 'inline-block',
//                 p: 1,
//                 borderRadius: 2,
//                 bgcolor: msg.sender === 'user' ? '#1976d2' : '#f0f0f0',
//                 color: msg.sender === 'user' ? '#fff' : '#000',
//               }}
//             >
//               {msg.text}
//               {msg.image && (
//                 <Box component="img" src={msg.image} alt={msg.text} sx={{ maxWidth: '100%', mt: 1 }} />
//               )}
//               <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
//                 {format(new Date(msg.timestamp), 'p, MMM dd')}
//               </Typography>
//             </Typography>
//           </Box>
//         ))}
//       </Box>
//       <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
//         <TextField
//           fullWidth
//           variant="outlined"
//           size="small"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => { if (e.key === 'Enter') handleSend(); }}
//         />
//         <Button variant="contained" color="primary" onClick={handleSend} sx={{ ml: 1 }}>
//           <SendIcon />
//         </Button>
//       </Box>
//     </Paper>
//   );
// };

// export default Chatbot;
'use client';
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, AppBar, Toolbar, IconButton, Avatar, Snackbar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import { format } from 'date-fns';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    const timestamp = new Date();
    const userMessage = { text: input, sender: 'user', timestamp };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      if (Array.isArray(data.reply)) {
        data.reply.forEach(reply => {
          const botMessage = { text: reply.text, sender: 'bot', image: reply.image, timestamp: new Date() };
          setMessages(prevMessages => [...prevMessages, botMessage]);
        });
      } else {
        const botMessage = { text: data.reply, sender: 'bot', timestamp: new Date() };
        if (data.reply.toLowerCase().includes('welcome')) {
          setShowSnackbar(true);
        }
        setMessages(prevMessages => [...prevMessages, botMessage]);
      }
    } catch (error) {
      console.error('Error sending message to server:', error);
    }
  };

  const handleCall = () => {
    const phoneNumber = '+923029015909'; // Replace with the actual phone number
    window.location.href = `tel:${phoneNumber}`;
  };



  return (
    <Paper
      elevation={3}
      sx={{
        width: 400,
        height: 600,
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'url(https://i.pinimg.com/564x/e5/e0/e5/e5e0e558ffcb4f1677c62f40fd8f823e.jpg)', // Replace with the actual URL of your image
        backgroundSize: 'cover',
      
        backgroundPosition: 'center',
        color: '#fff',
        // position: 'relative', // Ensure relative positioning for Snackbar placement
      }}
    >

      <AppBar position="static">
        <Toolbar>
          <Avatar
            src="https://aljanantravelandtours.com/wp-content/uploads/2018/12/1.png"
            sx={{ marginRight: 2, width: 40, height: 40 }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Al Janan Travel and Tourism
          </Typography>
          <IconButton color="inherit" onClick={handleCall}>
            <PhoneIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
        {messages.map((msg, index) => (
          <Box key={index} sx={{ my: 1, textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <Typography
              sx={{
                display: 'inline-block',
                p: 1,
                borderRadius: 2,
                bgcolor: msg.sender === 'user' ? '#1976d2' : '#f0f0f0',
                color: msg.sender === 'user' ? '#fff' : '#000',
              }}
            >
              {msg.text}
              {msg.image && (
                <Box component="img" src={msg.image} alt={msg.text} sx={{ maxWidth: '100%', mt: 1 }} />
              )}
              <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
                {format(new Date(msg.timestamp), 'p, MMM dd')}
              </Typography>
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => { if (e.key === 'Enter') handleSend(); }}
        />
        <Button variant="contained" color="primary" onClick={handleSend} sx={{ ml: 1 }}>
          <SendIcon />
        </Button>
      </Box>
    </Paper>
  );
};

export default Chatbot;
