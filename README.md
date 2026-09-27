# HCI in Education — Interactive Learning Experience

An interactive Next.js application designed to accompany the MCA Human-Computer Interaction presentation at PSG College of Technology. It demonstrates HCI principles in an educational setting through an interactive E-Campus student portal simulation.

## Features

- **Interactive Home Page:** Modern, accessible entry point summarizing the project.
- **Live HCI Demonstration:** A simulated student portal with an HCI Analysis Mode to explore usability principles and a Presentation Mode for guided walkthroughs.
- **Interactive MCQ Quiz:** A 15-question quiz to test knowledge on HCI principles.
- **Presentation Viewer:** Built-in viewer for the original 12-slide academic presentation.
- **Research & References:** Verified 2024 academic research papers and literature citations supporting the analysis.

## Technologies Used

- **Next.js (App Router)** - React framework for optimal performance and SEO
- **TypeScript** - For type safety and better developer experience
- **Tailwind CSS v4** - For responsive, utility-first styling
- **Framer Motion** - For subtle, fluid animations
- **Lucide React** - For consistent iconography
- **Vercel** - Optimized for seamless deployment

## Project Structure

- `src/app/` - Next.js App Router pages (Home, Demo, Quiz, Presentation, Research)
- `src/components/` - Reusable UI components (Navbar, DemoApp, Quiz, etc.)
- `src/data/` - Static data (HCI principles, Quiz questions)
- `public/` - Static assets including the presentation PDF

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start the production server:**
   ```bash
   npm run start
   ```

## Vercel Deployment

This project is configured for one-click deployment to Vercel.

1. **Push to GitHub:**
   - Initialize a git repository if not already done.
   - Commit all changes and push to a new GitHub repository.
   - Ensure the `public/presentation/hci-in-education.pdf` is pushed.

2. **Deploying to Vercel:**
   - Log in to your Vercel account.
   - Click **Add New...** -> **Project**.
   - Import your GitHub repository.
   - The framework preset will automatically be detected as "Next.js".
   - Click **Deploy**.

3. **Updating the Site:**
   - Any new commits pushed to the `main` branch of your GitHub repository will automatically trigger a new build and deployment on Vercel.
   - Vercel also provides preview deployments for pull requests and other branches.

## Testing the Application

Before deploying, ensure:
- The PDF is placed correctly in `public/presentation/hci-in-education.pdf`.
- All pages load without errors.
- The Interactive Demo authenticates using the demo credentials provided on-screen.

*Note: This project is for educational demonstration only. It does not collect, store, or transmit real student credentials.*
