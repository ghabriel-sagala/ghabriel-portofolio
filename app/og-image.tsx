import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a1a24 50%, #0a0a0f 100%)",
          padding: "48px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Decorative gradient orb */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(30px)",
          }}
        />

        {/* Accent line */}
        <div
          style={{
            width: "60px",
            height: "3px",
            background: "linear-gradient(90deg, #ef4444, #f97316)",
            borderRadius: "2px",
            marginBottom: "32px",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-2px",
            lineHeight: 1,
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
          Ghabriel
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: 400,
            color: "#a1a1aa",
            letterSpacing: "0.5px",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Software Engineer & IT Enthusiast
        </div>

        {/* Accent gradient text */}
        <div
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#22d3ee",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "48px",
          }}
        >
          Portfolio
        </div>

        {/* Bottom info */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#71717a",
              fontSize: "12px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.4-2.69 6.04 6.04 0 0 0-3.9 2.6 6.04 6.04 0 0 0-3.9-2.6 3.37 3.37 0 0 0-.4 2.69v3.87a3.37 3.37 0 0 0 .4 2.69 6.04 6.04 0 0 0 3.9 2.6 6.04 6.04 0 0 0 3.9-2.6 3.37 3.37 0 0 0 .4-2.69v-3.87m0 0a3.37 3.37 0 0 0 .4-2.69 6.04 6.04 0 0 0-3.9-2.6 6.04 6.04 0 0 0-3.9 2.6 3.37 3.37 0 0 0 .4 2.69v3.87m0 0C7.5 23 2 16 2 16" />
            </svg>
            Fullstack Developer
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#71717a",
              fontSize: "12px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            IoT & Hardware
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
