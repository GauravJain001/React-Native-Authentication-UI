# React Native Authentication UI

A clean and modern authentication UI built using React Native and Expo Router.  
This project focuses on improving layout structuring, reusable component creation, navigation handling, and implementing screens from design references.

---


# 🚀 Features

- Sign In Screen
- Sign Up Screen
- Forgot Password Screen
- Reusable Components
- Expo Router Navigation
- Keyboard Avoiding View Support
- Custom Input Components
- Responsive Layout Structure
- Modern Authentication UI Design

---

# 🛠️ Tech Stack

- React Native
- Expo
- Expo Router
- TypeScript
- React Native Safe Area Context
- Expo Vector Icons

---

# 📂 Project Structure

```bash
src/
│
├── app/
│   ├── sign-in/
│   ├── sign-up/
│   ├── forgot-password/
│   └── _layout.tsx
│
├── components/
│   ├── Button_.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── IconTray.tsx
│   └── InputBox.tsx
│
└── constants/
    └── colors.ts
```
# 📱 Screens

## 1. Sign In Screen

### Features:

- Email input
- Password input
- Social login icon tray
- Forgot password option
- Navigation to Sign Up screen

![Sign In](./assets/screenshots/sign-in-1.png)
![Sign In](./assets/screenshots/sign-in-2.png)


---

## 2. Sign Up Screen

### Features:

- Email input
- Password input
- Confirm password input
- Navigation to Sign In screen
![Sign Up](./assets/screenshots/sign-up-1.png)
![Sign Up](./assets/screenshots/sign-up-2.png)

---

## 3. Forgot Password Screen

### Features:

- Multiple password reset methods
- Selectable card layout
- Reset password button
![Forgot Password](./assets/screenshots/forgot-password-screen-1.png)

---

# ♻️ Reusable Components

## Header Component

Used across all authentication screens.

## InputBox Component

Reusable input field with icon support and password visibility handling.

## Button Component

Reusable primary action button.

## Footer Component

Handles authentication navigation links.

## Card Component

Used for password reset method selection.

## IconTray Component

Displays social login icons.

---



# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/GauravJain001/React-Native-Authentication-UI.git
```

## 2. Navigate to Project Folder

```bash
cd React-Native-Authentication-UI
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start Development Server

```bash
npx expo start
```

---

# 📦 Dependencies Used

```json
{
  "expo-router": "routing",
  "react-native-safe-area-context": "safe area handling",
  "@expo/vector-icons": "icons"
}
```

---

