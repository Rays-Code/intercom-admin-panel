
---

# Intercom Admin Panel

A responsive chat-based admin panel built with **React + Vite**, using **TailwindCSS** for styling, **React Router** for routing, and **Context API** for managing user data. This application also integrates a chatbot named **Fin** powered by **Gemini LLM** to assist users with queries.

##  Live Demo

🔗 [View Deployed Website](https://intercom-admin-panel.vercel.app/)

##  Project Structure

```
src/
├── components/
│   ├── desktop/
│   │   ├── AppBar.jsx                # Top navigation bar for desktop
│   │   ├── Avator.jsx                # Avatars for desktop view
│   │   ├── Body.jsx                  # Main layout with MessageBar and ChatBotPanel
│   │   ├── ChatBotPanel.jsx         # Gemini LLM chatbot integration
│   │   ├── Chats.jsx                # Chat bubbles/messages between users
│   │   ├── ConversationList.jsx     # List of available conversations
│   │   ├── ConversationListItem.jsx # Single item in conversation list
│   │   ├── ConversationPageBody.jsx # Layout combining Chats + input box
│   │   └── MessageBar.jsx           # Combines AppBar, ConversationList & Body
│   └── mobile/
│       ├── MobileAppBar.jsx             # Top navigation for mobile
│       ├── MobileAvator.jsx             # Avatars for mobile
│       ├── MobileChatBotPanel.jsx      # Mobile chatbot component
│       ├── MobileChats.jsx             # Chat UI for mobile
│       ├── MobileConversationList.jsx  # Conversation list for mobile
│       ├── MobileConversationListItem.jsx # Single item in conversation list
│       └── MobileConversationBody.jsx  # Holds AppBar, Chats, and input box
├── pages/
│   ├── desktop/
│   │   └── AdminPanel.jsx              # Desktop admin view
│   └── mobile/
│       └── MobileAdminPanel.jsx        # Mobile admin view
├── contexts/
│   └── UserContext.jsx                 # Context API for user state
├── gemini_api_integration/
│   └── connect_gemini.js              # Gemini API logic for chatbot
├── hooks/
│   └── useIsMobile.jsx                 # Custom hook to detect mobile view
```

## 🛠️ Tech Stack

* **React + Vite**
* **TailwindCSS**
* **React Router DOM**
* **Context API**
* **Gemini LLM** via custom integration
* **Vercel** for deployment

##  Features

*  Responsive design with desktop and mobile UIs
*  Real-time user chat interface
*  Integrated chatbot (Fin) using Gemini API
*  Admin panel with conversation management
*  Context-aware navigation and dynamic routing

##  Installation

```bash
git clone https://github.com/Rays-Code/intercom-admin-panel.git
cd intercom-admin-panel
npm install
npm run dev
```

## 📤 Deployment

This project is deployed on **Vercel**.

## 📃 License

MIT

---

