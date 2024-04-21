import { SignInButton, SignedOut, UserButton, SignedIn } from "@clerk/nextjs";

export function TopNav() {
  return (
    <nav className="flex items-center justify-between w-full border-b p-4 text-xl font-semibold">
      <div>Top Nav</div>

      <div>
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
      </div>
    </nav>

  );
}