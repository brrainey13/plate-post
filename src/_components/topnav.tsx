"use client";

import { SignInButton, SignedOut, UserButton, SignedIn } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

export function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between w-full border-b p-4 text-xl font-semibold">
      <div>Plate Post</div>

      <div className="flex flex-row gap-4">
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton 
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }} />
            <UserButton />
        </SignedIn>
      </div>
    </nav>

  );
}