import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Veldriva — Engineering Digital Progress.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/images/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={396} height={80} alt="Veldriva" />
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
