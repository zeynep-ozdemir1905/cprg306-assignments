"use client";
import Link from "next/link";
import { AuthContextProvider } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="p-4 text-center text-white">
      {!user ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Welcome to Shopping List</h1>
          <button
            onClick={gitHubSignIn}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Sign in with GitHub
          </button>
        </>
      ) : (
        <>
          <p className="mb-4">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={firebaseSignOut}
            className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded mb-4"
          >
            Sign Out
          </button>
          <div>
            <Link
              href="/week-9/shopping-list"
              className="underline text-blue-300 hover:text-blue-400"
            >
              Go to Shopping List
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
