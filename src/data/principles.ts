export interface HCIPrinciple {
  id: string;
  name: string;
  definition: string;
  location: string;
  importance: string;
}

export const hciPrinciples: HCIPrinciple[] = [
  {
    id: "visibility",
    name: "Visibility",
    definition: "The more visible functions are, the more likely users will be able to know what to do next.",
    location: "Roll Number and Password fields, Login Button",
    importance: "Clear visibility prevents users from searching for core actions. By making the login fields central and prominent, cognitive load is reduced."
  },
  {
    id: "feedback",
    name: "Feedback",
    definition: "Sending back information about what action has been done and what has been accomplished.",
    location: "Success/Error messages, Button loading states",
    importance: "Feedback assures the user that their request is being processed. Without it, users might repeatedly click buttons or think the system is broken."
  },
  {
    id: "error-prevention",
    name: "Error Prevention",
    definition: "Careful design that prevents a problem from occurring in the first place.",
    location: "Disabled login button until fields are filled, password toggle",
    importance: "Prevents frustration by guiding the user to provide necessary information before they make a mistake."
  },
  {
    id: "error-recovery",
    name: "Error Recovery",
    definition: "Helping users recognize, diagnose, and recover from errors.",
    location: "Forgot Password link, clear invalid credential messages",
    importance: "When errors do happen, providing a clear path forward (like resetting a password) prevents the user from being permanently stuck."
  },
  {
    id: "consistency",
    name: "Consistency",
    definition: "Designing interfaces to have similar operations and use similar elements for achieving similar tasks.",
    location: "Button styles, input field designs, color schemes",
    importance: "Users don't have to learn new patterns. A standard login form follows conventions established across thousands of other applications."
  },
  {
    id: "accessibility",
    name: "Accessibility",
    definition: "Ensuring the interface can be used by people with a wide range of abilities and disabilities.",
    location: "Semantic HTML labels, keyboard focus, color contrast",
    importance: "Education must be inclusive. Features like screen-reader friendly labels and visible focus rings ensure everyone can access their portal."
  },
  {
    id: "learnability",
    name: "Learnability",
    definition: "How easy is it for users to accomplish basic tasks the first time they encounter the design?",
    location: "Overall straightforward layout",
    importance: "New students need to access their information immediately without needing a manual. A simple layout ensures rapid learnability."
  }
];
