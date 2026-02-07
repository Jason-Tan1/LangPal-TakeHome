# Conversation Starter MVP

A simple mobile experience to help users practice real-world language conversations.

## How to Run

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Start the Application**:
    ```bash
    npm start
    ```
    This will start the Expo development server.
3.  **Run on Device/Emulator**:
    -   **iOS Simulator**: Press `i` in the terminal.
    -   **Android Emulator**: Press `a` in the terminal.
    -   **Physical Device (Recommended)**:
        1.  Download the **Expo Go** app from the [App Store](https://apps.apple.com/us/app/expo-go/id982107779) (iOS) or [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent) (Android).
        2.  Ensure your phone and computer are connected to the **same Wi-Fi network**.
        3.  **Android**: Open Expo Go and scan the QR code displayed in your terminal.
        4.  **iOS**: Open the default Camera app and scan the QR code. Tap the notification to open in Expo Go.

## Tech Stack
-   **React Native** (via Expo)
-   **TypeScript** (Configured by default in Expo)
-   **Expo Linear Gradient** (For background styling)

## Improvements (With More Time)
-   **Backend Integration**: Move the API logic to a real Express.js/Node.js server.
-   **AI Feedback**: Integrate OpenAI/Gemini API for real-time, context-aware language evaluation instead of rule-based logic.
-   **Audio Features**: Add speech-to-text for input and text-to-speech for prompts/feedback.
-   **Progress Tracking**: Persist user scores and history locally or in a database.
-   **More Content**: Expand to encompass more languages and scenarios with difficulty levels.

## Key Decisions
-   **Client-Side "Backend"**: Implemented a mock API service layer (`src/services/api.ts`) that runs client-side. This allows the app to be fully functional and testable without requiring a separate backend server to be running, simplifying the review process.
-   **Rule-Based Scorer**: Created a deterministic scoring algorithm (`src/utils/feedbackLogic.ts`) that checks for specific vocabulary and politeness markers. This ensures consistent, instant feedback without API costs or latency for an MVP.
-   **Component Architecture**: Split UI into small, focused components (`ConversationPrompt`, `ResponseInput`, `FeedbackDisplay`) managed by a central `HomeScreen` container that handles all state. This separation of concerns makes the code readable and easy to maintain.
-   **TypeScript**: Used strict typing for all data models (`Language`, `Scenario`, `Prompt`, `Feedback`) to prevent runtime errors and improve developer experience.

## Screen Recording
[Watch the Demo Video](https://mail.google.com/mail/u/0/#inbox/FMfcgzQfBkLLGCDPqFWtkJqsVDffJWQV?projector=1)
