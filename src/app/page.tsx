// Root index — only hit when someone visits the apex domain. With static export
// and localePrefix:"always", every real route lives under /en/ or /nl/. This page
// uses a meta-refresh (works without JS) plus a JS redirect fallback to send
// visitors to the default locale.

export default function RootRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/en/" />
      <link rel="canonical" href="/en/" />
      <script
        dangerouslySetInnerHTML={{
          __html: `(()=>{const l=(navigator.language||"en").toLowerCase();const t=l.startsWith("nl")?"/nl/":"/en/";location.replace(t)})();`,
        }}
      />
      <div
        style={{
          minHeight: "100svh",
          display: "grid",
          placeItems: "center",
          background: "#faf7f0",
          color: "#1a1a1a",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <a
          href="/en/"
          style={{
            color: "#3d5a2c",
            textDecoration: "underline",
            fontSize: "14px",
            letterSpacing: "0.04em",
          }}
        >
          Continue to Nutrex →
        </a>
      </div>
    </>
  );
}
