"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 p-4">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl shadow-xl p-10 max-w-md w-full text-center text-white">
        {!user ? (
          <>
            <h1 className="text-3xl font-bold mb-6">Welcome to Shopping List</h1>
            <p className="mb-6 text-lg">
              Manage your grocery items and explore meal ideas effortlessly.
            </p>
            <button
              onClick={gitHubSignIn}
              className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-purple-100 transition"
            >
              Sign in with GitHub
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4">Welcome, {user.displayName}!</h1>
            <p className="mb-6 text-lg">{user.email}</p>
            <div className="flex flex-col gap-4">
              <Link
                href="/week-9/shopping-list"
                className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-purple-100 transition"
              >
                Go to Shopping List
              </Link>
              <button
                onClick={firebaseSignOut}
                className="bg-red-400 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
              >
                Sign Out
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
