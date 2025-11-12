// // //live server link


// // // D:\newapp\userapp-main 2\userapp-main\src\socket.ts
// // import { io } from "socket.io-client";
// // import { Alert } from "react-native";
// // import { getBackendUrl } from "./util/backendConfig";

// // // Get backend dynamically
// // const BASE_URL = getBackendUrl().replace(/\/$/, ""); // remove trailing slash if any

// // console.log("🔌 Connecting User Socket to:", BASE_URL);

// // const socket = io(BASE_URL, {
// //   transports: ["websocket"],   // Force WebSocket transport
// //   autoConnect: true,           // Connect immediately
// //   reconnection: true,          // Auto reconnect if dropped
// //   reconnectionAttempts: 5,
// //   reconnectionDelay: 1000,
// //   timeout: 10000,
// // });

// // // Debugging logs
// // socket.on("connect", () => {
// //   console.log("🟢 User socket connected:", socket.id);
// // });

// // socket.on("connect_error", (err) => {
// //   console.log("🔴 User socket error:", err.message);
// //   Alert.alert("Socket Error", "Could not connect to server. Check network.");
// // });

// // socket.on("disconnect", (reason) => {
// //   console.log("🔴 User socket disconnected:", reason);
// // });

// // export default socket;





















// ////local host


// import { io } from "socket.io-client"; 

// const SOCKET_URL = "https://backendddcode-1.onrender.com";

// const socket = io(SOCKET_URL, {
//   transports: ["websocket", "polling"], // Add polling as fallback
//   autoConnect: true,
//   reconnection: true,
//   reconnectionAttempts: 10, // Increase attempts
//   reconnectionDelay: 2000, // Increase delay
//   timeout: 15000, // Add timeout
//   forceNew: true,
//   withCredentials: false
// });

// // Add connection state logging
// socket.on("connect", () => {
//   console.log("🟢 User socket connected:", socket.id);
// });

// socket.on("connect_error", (err) => {
//   console.log("🔴 User socket connection error:", err.message);
//   console.log("🔴 Error details:", err);
// });

// socket.on("disconnect", (reason) => {
//   console.log("🔴 User socket disconnected:", reason);
// });

// socket.on("reconnect_attempt", (attempt) => {
//   console.log(`🔄 User socket reconnect attempt: ${attempt}`);
// });

// export default socket;




















































////local host


import { io } from "socket.io-client"; 

const SOCKET_URL = "https://cmp-back.onrender.com";


const socket = io(SOCKET_URL, {
  transports: ["websocket", "polling"], // Add polling as fallback
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 10, // Increase attempts
  reconnectionDelay: 2000, // Increase delay
  timeout: 15000, // Add timeout
  forceNew: true,
  withCredentials: false
});


// D:\perfUSE-main\perfUSE-main\src\socket.ts

// Ride Book செய்யும் போது FCM-உம் Send பண்ணுவதற்கு
socket.on("connect", () => {
  console.log("🟢 User socket connected:", socket.id);
  
  // Send user info to server for FCM tracking
  const userId = localStorage.getItem('userId'); // or AsyncStorage
  if (userId) {
    socket.emit('registerUser', { 
      userId,
      platform: 'user_app' 
    });
  }
});

socket.on("connect_error", (err) => {
  console.log("🔴 User socket connection error:", err.message);
  console.log("🔴 Error details:", err);
});

socket.on("disconnect", (reason) => {
  console.log("🔴 User socket disconnected:", reason);
});

socket.on("reconnect_attempt", (attempt) => {
  console.log(`🔄 User socket reconnect attempt: ${attempt}`);
});

export default socket;

















































