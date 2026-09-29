export interface HCIPrinciple {
  id: string;
  name: string;
  definition: string;
  location: string;
  importance: string;
  status?: {
    good: string;
    poor: string;
  };
  explanation?: {
    good: string;
    poor: string;
  };
  userImpact?: {
    good: string;
    poor: string;
  };
  suggestedImprovement?: string;
}

export const hciPrinciples: HCIPrinciple[] = [
  {
    id: "visibility",
    name: "Visibility of System Status",
    definition: "The system should always keep users informed about what is going on, through appropriate feedback within reasonable time.",
    location: "Login Button, Notification area",
    importance: "Clear visibility prevents users from searching for core actions. It reduces cognitive load.",
    status: {
      good: "CORRECTLY APPLIED",
      poor: "NOT APPLIED PROPERLY"
    },
    explanation: {
      good: "A loading indicator and clear success/error messages are shown upon submission.",
      poor: "No loading state or immediate feedback is provided when the button is clicked."
    },
    userImpact: {
      good: "Users know their request is processing.",
      poor: "Users cannot determine whether the action was successful or if the system is frozen."
    },
    suggestedImprovement: "Show a loading indicator followed by a clear success or error message."
  },
  {
    id: "feedback",
    name: "Feedback",
    definition: "Sending back information about what action has been done and what has been accomplished.",
    location: "Form submission, Notifications",
    importance: "Feedback assures the user that their request is being processed.",
    status: {
      good: "CORRECTLY APPLIED",
      poor: "NOT APPLIED PROPERLY"
    },
    explanation: {
      good: "A confirmation message appears after successful login or dismissing an item.",
      poor: "Items disappear or actions process without any confirmation message."
    },
    userImpact: {
      good: "Immediate feedback helps users understand the result of their actions.",
      poor: "The user does not know whether their changes were saved or an action occurred."
    },
    suggestedImprovement: "Display a clear confirmation or feedback message upon action completion."
  },
  {
    id: "error-prevention",
    name: "Error Prevention",
    definition: "Careful design that prevents a problem from occurring in the first place.",
    location: "Login Button, Form Fields",
    importance: "Prevents frustration by guiding the user to provide necessary information before they make a mistake.",
    status: {
      good: "CORRECTLY APPLIED",
      poor: "NOT APPLIED PROPERLY"
    },
    explanation: {
      good: "The button remains disabled until all required fields are completed and validated.",
      poor: "The form can be submitted even when mandatory fields are empty."
    },
    userImpact: {
      good: "Prevents incomplete form submissions and backend errors.",
      poor: "The system accepts incomplete information or displays errors only after submission."
    },
    suggestedImprovement: "Validate required fields before submission and explain what needs to be corrected."
  },
  {
    id: "error-recovery",
    name: "Error Recovery",
    definition: "Helping users recognize, diagnose, and recover from errors.",
    location: "Forgot Password link",
    importance: "When errors do happen, providing a clear path forward (like resetting a password) prevents the user from being permanently stuck.",
    status: {
      good: "CORRECTLY APPLIED",
      poor: "NOT APPLIED PROPERLY"
    },
    explanation: {
      good: "A 'Forgot Password' link provides a clear path to recover a lost account.",
      poor: "No password recovery option exists, leaving users permanently locked out."
    },
    userImpact: {
      good: "Users can independently resolve their issue without contacting support.",
      poor: "Users are unable to recover their accounts and must abandon the process."
    },
    suggestedImprovement: "Provide a 'Forgot Password' or similar recovery mechanism."
  },
  {
    id: "consistency",
    name: "Consistency and Standards",
    definition: "Users should not have to wonder whether different words, situations, or actions mean the same thing.",
    location: "Navigation, Buttons, Visual Styles",
    importance: "Users don't have to learn new patterns. A standard interface follows conventions established across applications.",
    status: {
      good: "CORRECTLY APPLIED",
      poor: "NOT APPLIED PROPERLY"
    },
    explanation: {
      good: "Consistent button styles, typography, spacing, and navigation are used across the portal.",
      poor: "Different button styles, colors, and erratic navigation layouts are used for similar actions."
    },
    userImpact: {
      good: "Consistency makes the interface easier to learn and predictable.",
      poor: "The interface becomes unpredictable, confusing, and much harder to learn."
    },
    suggestedImprovement: "Use consistent visual styles and interaction patterns throughout the application."
  },
  {
    id: "recognition",
    name: "Recognition Rather Than Recall",
    definition: "Minimize the user's memory load by making objects, actions, and options visible.",
    location: "Navigation sidebar, Dashboard menus",
    importance: "Visible choices reduce memory effort. Users shouldn't have to remember information from one part to another.",
    status: {
      good: "CORRECTLY APPLIED",
      poor: "NOT APPLIED PROPERLY"
    },
    explanation: {
      good: "Clear text labels accompany all visible navigation options.",
      poor: "Unexplained icons are used without any text labels for important functions."
    },
    userImpact: {
      good: "Users instantly recognize navigation options without guessing.",
      poor: "Users must guess what each icon means, increasing cognitive load."
    },
    suggestedImprovement: "Add descriptive text labels alongside or instead of ambiguous icons."
  },
  {
    id: "real-world",
    name: "Match System & Real World",
    definition: "The system should speak the user's language, with words, phrases and concepts familiar to the user.",
    location: "Menu labels, Dashboard titles",
    importance: "Familiar language makes the interface easier to understand without a manual.",
    status: {
      good: "CORRECTLY APPLIED",
      poor: "NOT APPLIED PROPERLY"
    },
    explanation: {
      good: "Uses familiar terms like 'Student Profile' and 'Dashboard'.",
      poor: "Uses system-oriented terms or obscure jargon like 'Auth_System_V2' or 'IDENTIFIER_KEY'."
    },
    userImpact: {
      good: "Students immediately understand where to find their information.",
      poor: "Users are confused by technical jargon and cannot find what they need."
    },
    suggestedImprovement: "Use user-centric terms like 'Student Profile' and 'Attendance' instead of technical jargon."
  },
  {
    id: "user-control",
    name: "User Control and Freedom",
    definition: "Users often choose system functions by mistake and will need a clearly marked 'emergency exit'.",
    location: "Destructive actions, Modals",
    importance: "When users feel in control, they are more confident using the system.",
    status: {
      good: "CORRECTLY APPLIED",
      poor: "NOT APPLIED PROPERLY"
    },
    explanation: {
      good: "Users are asked for confirmation before logging out or dropping a course.",
      poor: "Information is deleted immediately without any confirmation dialog or undo option."
    },
    userImpact: {
      good: "Users retain control over their actions and avoid catastrophic mistakes.",
      poor: "Users may accidentally lose important information without recourse."
    },
    suggestedImprovement: "Provide a confirmation dialog or an 'Undo' option for destructive actions."
  },
  {
    id: "accessibility",
    name: "Accessibility",
    definition: "Ensuring the interface can be used by people with a wide range of abilities and disabilities.",
    location: "Typography, Colors, Focus states",
    importance: "Education must be inclusive. Everyone should be able to access their portal.",
    status: {
      good: "CORRECTLY APPLIED",
      poor: "NOT APPLIED PROPERLY"
    },
    explanation: {
      good: "Uses readable text sizes, sufficient contrast (navy on white), and visible focus indicators.",
      poor: "Uses low-contrast text (light gray on white), tiny font sizes, and removes keyboard focus."
    },
    userImpact: {
      good: "Accessible design supports users with visual impairments or those using keyboards.",
      poor: "Some users may struggle to read or completely fail to operate the interface."
    },
    suggestedImprovement: "Improve color contrast, increase text size, and ensure keyboard navigation works."
  }
];
