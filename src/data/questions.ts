export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation: string;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: "What is the primary focus of Human-Computer Interaction (HCI)?",
    options: [
      "Making computers run faster",
      "Designing interfaces that are usable and understandable by people",
      "Writing efficient backend algorithms",
      "Developing new programming languages"
    ],
    correctAnswer: 1,
    explanation: "HCI focuses on the design, evaluation, and implementation of interactive computing systems for human use, prioritizing usability and user experience."
  },
  {
    id: 2,
    text: "In the context of HCI, what does 'Usability' refer to?",
    options: [
      "The visual appeal of the interface",
      "The cost of developing the software",
      "How easily and effectively users can achieve their goals",
      "The number of features an application has"
    ],
    correctAnswer: 2,
    explanation: "Usability is a quality attribute that assesses how easy user interfaces are to use and how effectively users can accomplish their tasks."
  },
  {
    id: 3,
    text: "Which HCI principle is demonstrated by making the Roll Number and Password fields easily noticeable on a login screen?",
    options: [
      "Visibility",
      "Error Recovery",
      "Flexibility",
      "Learnability"
    ],
    correctAnswer: 0,
    explanation: "Visibility ensures that users can easily see what actions are available and where to input necessary information without searching."
  },
  {
    id: 4,
    text: "What does 'Feedback' mean in user interface design?",
    options: [
      "User reviews on an app store",
      "Keeping the interface design consistent",
      "Providing the user with information about the results of their actions",
      "Hiding complex settings from beginners"
    ],
    correctAnswer: 2,
    explanation: "Feedback means continuously informing the user about what the system is doing, such as showing a success message after login."
  },
  {
    id: 5,
    text: "Disabling the 'Login' button until both the Roll Number and Password are entered is an example of:",
    options: [
      "Learnability",
      "Error Prevention",
      "Accessibility",
      "Consistency"
    ],
    correctAnswer: 1,
    explanation: "Error Prevention involves designing interfaces in a way that makes it difficult or impossible for users to make errors, such as submitting an incomplete form."
  },
  {
    id: 6,
    text: "Which feature best demonstrates 'Error Recovery'?",
    options: [
      "A bold heading",
      "A 'Forgot Password' link",
      "A fast loading speed",
      "A colorful background"
    ],
    correctAnswer: 1,
    explanation: "Error Recovery helps users recognize, diagnose, and recover from errors. A 'Forgot Password' link provides a clear path when a user forgets their credentials."
  },
  {
    id: 7,
    text: "Why is 'Learnability' important in an educational platform like the E-Campus portal?",
    options: [
      "It reduces server load",
      "It makes the app look modern",
      "It allows students to quickly understand how to navigate the system with minimal training",
      "It prevents unauthorized access"
    ],
    correctAnswer: 2,
    explanation: "Learnability measures how easy it is for users to accomplish basic tasks the first time they encounter the design, which is crucial for student portals."
  },
  {
    id: 8,
    text: "Using the same button styles and navigation layouts across all pages of a website is an application of:",
    options: [
      "Visibility",
      "Consistency",
      "User Control",
      "Error Prevention"
    ],
    correctAnswer: 1,
    explanation: "Consistency means using similar elements for similar tasks, reducing the cognitive load on the user because they don't have to learn new patterns."
  },
  {
    id: 9,
    text: "Which of the following is a key aspect of 'Accessibility' in HCI?",
    options: [
      "Ensuring the app works without an internet connection",
      "Using only high-end graphics",
      "Providing keyboard navigation and screen reader support",
      "Making the app available on only one operating system"
    ],
    correctAnswer: 2,
    explanation: "Accessibility ensures that people with disabilities, such as those relying on screen readers or keyboard navigation, can effectively use the interface."
  },
  {
    id: 10,
    text: "What is 'User-Centred Design' (UCD)?",
    options: [
      "Designing primarily for the developer's convenience",
      "An iterative design process focusing on the users and their needs in each phase",
      "Adding as many features as possible to attract all types of users",
      "Copying competitor designs exactly"
    ],
    correctAnswer: 1,
    explanation: "UCD is an iterative process where designers focus on the users and their needs throughout the design process to create highly usable products."
  },
  {
    id: 11,
    text: "In the context of the PSG Tech E-Campus interface analysis, what does improving HCI achieve?",
    options: [
      "It increases the student's tuition fees",
      "It reduces the student's cognitive load and improves their learning experience",
      "It makes the exams easier",
      "It decreases the security of the portal"
    ],
    correctAnswer: 1,
    explanation: "Improving HCI in educational portals reduces frustration and cognitive load, allowing students to focus on their learning rather than struggling with the interface."
  },
  {
    id: 12,
    text: "What is an 'Adaptive Interface' in educational technology?",
    options: [
      "An interface that changes its layout and content based on user behavior and preferences",
      "An interface that only works on mobile phones",
      "A static interface that cannot be changed",
      "An interface that requires users to write code to use it"
    ],
    correctAnswer: 0,
    explanation: "Adaptive interfaces use data to dynamically adjust content, layout, or features to better suit individual user needs, improving personalization."
  },
  {
    id: 13,
    text: "How can AI-assisted educational interfaces benefit students?",
    options: [
      "By replacing teachers completely",
      "By doing the students' homework for them",
      "By providing personalized feedback and predicting learning obstacles",
      "By making the interface more difficult to use"
    ],
    correctAnswer: 2,
    explanation: "AI can analyze student interactions to offer tailored feedback, recommend resources, and identify areas where a student might struggle, enhancing the learning process."
  },
  {
    id: 14,
    text: "When conducting a usability evaluation, what is a common method used to gather user feedback?",
    options: [
      "Reading the source code",
      "Checking server logs",
      "Surveys and user observation",
      "Measuring the file size of the application"
    ],
    correctAnswer: 2,
    explanation: "Usability evaluations typically involve observing real users interacting with the system and collecting their direct feedback through surveys or interviews."
  },
  {
    id: 15,
    text: "Why is it important NOT to rely on color alone to communicate errors (e.g., using only red text)?",
    options: [
      "Red is a copyright-protected color",
      "Users with color vision deficiencies might not perceive the error",
      "It makes the website load slower",
      "Red text is technically difficult to render"
    ],
    correctAnswer: 1,
    explanation: "To ensure accessibility, information conveyed by color must also be conveyed through other means (like text labels or icons) so users with color blindness can understand it."
  }
];
