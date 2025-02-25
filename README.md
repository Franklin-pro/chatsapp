Waguan-Gen-Z

Waguan-Gen-Z is a modern real-time chat web application designed for Gen-Z users. It provides a seamless chatting experience with a stylish and responsive UI.

🚀 Tech Stack

Frontend:

React (JSX) – For building a dynamic and interactive user interface.

Tailwind CSS – For fast and responsive styling.

DaisyUI – For pre-built UI components and themes.

Backend:

Node.js – Runtime environment for server-side logic.

Express.js – Lightweight and fast backend framework.

WebSockets (Socket.io) – For real-time messaging.

Socket.io – For connecting clients in real-time.

MongoDB (Optional) – For storing messages and user data.

✨ Features

🔥 Real-time chat using WebSockets.

🧑‍🤝‍🧑 User authentication (JWT-based login/signup).

🎨 Modern and responsive UI with Tailwind CSS & DaisyUI.

📜 Chat history storage (if using MongoDB).

🔔 Notifications for new messages.

🌓 Dark & Light Mode support.

📌 Installation

Clone the Repository

git clone https://github.com/Franklin-pro/chatsapp
cd waguan-gen-z

Backend Setup

cd backend
npm install
npm start

Frontend Setup

cd frontend
npm install
npm start

⚙️ Environment Variables

Create a .env file in the backend folder and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

🚀 Running the Application

Start the backend server:

cd backend
npm start

Start the frontend:

cd frontend
npm start

The application will be running on:

Frontend: [http://localhost:3000](https://waguan-genz.onrender.com/)


📜 API Routes (Backend)

Method

Endpoint

Description

POST

/api/auth/signup

User registration

POST

/api/auth/login

User login

GET

/api/messages

Fetch chat history

POST

/api/messages

Send a new message

📸 Screenshots

![Image](https://github.com/user-attachments/assets/0e84e73f-5f98-424d-8a4a-5c283b8ca6f7)

![Image](https://github.com/user-attachments/assets/2728e7d9-a914-4b4e-b2d2-8a718890cb74)

![image](https://github.com/user-attachments/assets/8b4a94e1-6b76-4d1f-b904-ff59a46dc886)


👥 Contributors

Frank Ndanyuzwe (@[yourgithub](https://github.com/Franklin-pro))

🛠 Future Enhancements

✅ Add media file sharing (images, videos, audio)

✅ Implement group chats

✅ Improve performance & security

📜 License

This project is licensed under the MIT License.

Made with ❤️ by Frank Ndanyuzwe.
