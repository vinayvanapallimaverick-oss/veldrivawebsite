import { ImageResponse } from "next/og";

export const alt = "Veldriva — Engineering Digital Progress.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAF8F6",
          padding: 72,
          color: "#512C38",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: "#512C38", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, fontWeight: 800 }}>V</div>
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: 4 }}>VELDRIVA</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>Engineering Digital Progress.</div>
          <div style={{ marginTop: 24, fontSize: 32, color: "#96777B" }}>Digital Transformation · Cloud · AI · Data</div>
        </div>
        <div style={{ fontSize: 26, color: "#665D60" }}>Technology consulting for businesses across the United States and Canada</div>
      </div>
    ),
    size,
  );
}
