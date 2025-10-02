import Link from "next/link";

export default function RootPage() {
  return (
    <main className="p-6">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <p className= "space-x-2">
        <Link href="/week-2">Go to Week 2 → </Link>
        <Link href="/week-3">Go to Week 3 →</Link>
        <Link href="/week-4">Go to Week 4 →</Link>
        </p>
    </main>
  );
}
