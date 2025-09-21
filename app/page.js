import Link from "next/link";

export default function RootPage() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <div>
        <div>
        <Link href="/week-2">Go to Week 2</Link>
        </div>
        <div>
        <Link href="/week-3">Go to Week 3</Link>
        </div>
      </div>
    </main>
  );
}
