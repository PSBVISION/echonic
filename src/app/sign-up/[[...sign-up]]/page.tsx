import { SignUp } from "@clerk/nextjs";

/**
 * Renders the sign-up page.
 *
 * @returns The sign-up page layout with Clerk's `SignUp` component centered on the screen.
 */
export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <SignUp
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-lg",
          },
        }}
      />
    </div>
  );
}