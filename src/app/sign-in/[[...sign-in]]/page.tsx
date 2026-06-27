import { SignIn } from "@clerk/nextjs";

/**
 * Renders the Clerk sign-in page.
 *
 * @returns The sign-in page layout containing the Clerk `SignIn` component.
 */
export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <SignIn
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