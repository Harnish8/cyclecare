// All policy text lives here, so you can edit it without touching the layout.
// Replace the [BRACKETS] before publishing.

export const policyMeta = {
  title: "CycleCare Privacy Policy (DRAFT)",
  lastUpdated: "01-Nov-2026",
  developer: "CycleCare",
  contact: "cyclecare@gmail.com",
  note:
    "Draft written for the CycleCare app. Replace the [brackets], check that it matches what your final app really does, and have a qualified person review it before publishing.",
};

// tone controls the colour of the number badge (see globals.css)
export const sections = [
  {
    id: "stored-on-your-phone",
    num: 1,
    tone: "rose",
    title: "What is stored on your phone",
    body: 'Your period dates, symptoms, notes, reminders and settings are stored on your phone. Deleting the app or using "Delete all my data" removes them from the phone.',
  },
  {
    id: "account-backup",
    num: 2,
    tone: "mint",
    title: "Optional account backup (Google sign-in)",
    body: 'If you sign in with Google, Firebase Authentication receives your Google account name, email address and profile photo to sign you in. If you choose "Back up to my Google account", a copy of your records (period dates, symptoms, notes, reminders, language settings and your AI chat history) is saved in Google Firebase (Cloud Firestore) under your account, so that it can be restored when you reinstall the app or change phone. Security rules allow only your signed-in account to read or write this copy. It is not end-to-end encrypted, and the developer can technically access it through the Firebase console; we do not use it for any purpose other than restoring your data. You can turn the backup off, delete the cloud copy in Settings, or use "Delete all my data" (which also deletes the cloud copy). To delete your account, email [YOUR EMAIL].',
  },
  {
    id: "ai-helper",
    num: 3,
    tone: "lavender",
    title: "AI helper (optional)",
    body: 'If you use "Ask CycleCare AI", the text of your question is sent over the internet to Google\'s Gemini service (through Firebase AI Logic) to create an answer. Your cycle records are never sent to the AI. Your chat history is saved on your phone for your account (and in your optional backup); you can delete it in the chat screen. Please do not type your name, phone number or other personal details. On free services, Google may keep questions to improve its products. AI answers are general education, not medical advice.',
  },
  {
    id: "advertising",
    num: 4,
    tone: "amber",
    title: "Advertising",
    body: "CycleCare shows ads from Google AdMob. We ask for your consent where the law requires it, request non-personalised ads, and never give advertisers your health data. AdMob may use your device's advertising ID and technical data (such as IP address) to show and measure ads. Learn more: https://policies.google.com/technologies/ads",
  },
  {
    id: "notifications",
    num: 5,
    tone: "rose",
    title: "Notifications",
    body: "Reminders are created on your phone. Their wording is chosen by you.",
  },
  {
    id: "children",
    num: 6,
    tone: "mint",
    title: "Children",
    body: "CycleCare is not directed at children under 13. Teenagers should use it with the guidance of a trusted adult where needed.",
  },
  {
    id: "security",
    num: 7,
    tone: "lavender",
    title: "Security",
    body: "Records on your phone are kept in the app's storage. You can add a PIN or fingerprint/face lock.",
  },
  {
    id: "your-choices",
    num: 8,
    tone: "rose",
    title: "Your choices",
    body: 'You can sign out, turn off or delete the cloud backup, delete all data inside the app, change ad choices in Settings, or contact us at [YOUR EMAIL].',
  },
  {
    id: "medical-disclaimer",
    num: 9,
    tone: "danger",
    title: "Medical disclaimer",
    body: "CycleCare does not diagnose, treat or replace a doctor. In an emergency, seek medical help immediately.",
    callout: true,
  },
  {
    id: "changes",
    num: 10,
    tone: "amber",
    title: "Changes",
    body: "We will update this page when the app changes.",
  },
];
