"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-200 p-4">
      <div className="bg-black bg-opacity-20 backdrop-blur-md rounded-3xl shadow-xl p-10 max-w-md w-full text-center text-white">
        {!user ? (
          <>
            <h1 className="text-3xl font-bold mb-6">Welcome to Week 10!!!!</h1>
            <button
              onClick={gitHubSignIn}
              className="bg-gray text-pink-500 font-semibold px-6 py-3 shadow-md border-amber-300 hover:bg-purple-100 transition"
            >
              Sign in with GitHub
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4">Welcome, {user.displayName}!</h1>
            <p className="mb-6 text-sm">{user.email}</p>
            <div className="flex flex-col gap-4">
              <Link
                href="/week-9/shopping-list"
                className="bg-blue-300 border-2 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-400 transition"
              >
                Go to Shopping List
              </Link>
              <button
                onClick={firebaseSignOut}
                className="bg-pink-300 hover:bg-red-400 border-2 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
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
