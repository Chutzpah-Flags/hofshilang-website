import Link from "next/link";

// Fallback 404 for paths outside any locale segment.
export default function GlobalNotFound() {
  return (
    <html lang="pt">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          background: "#0f1729",
          color: "#fff",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1 style={{ fontSize: "3rem", margin: 0 }}>404</h1>
          <p style={{ opacity: 0.7 }}>Página não encontrada / Page not found</p>
          <Link href="/pt" style={{ color: "#e8c468" }}>
            Hofshilab Group
          </Link>
        </div>
      </body>
    </html>
  );
}
