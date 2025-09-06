import fs from "fs";
import path from "path";
import HomeClient, { type ReferenceImage } from "./pages/HomeClient";

function getReferenceImages(): ReferenceImage[] {
  const publicDir = path.join(process.cwd(), "public", "s");
  let files: string[] = [];
  try {
    files = fs.readdirSync(publicDir);
  } catch (e) {
    return [];
  }
  const allowed = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"]);
  return files
    .filter((f) => allowed.has(path.extname(f).toLowerCase()))
    .sort()
    .map((f) => ({
      src: `/s/${f}`,
      alt: path.parse(f).name.replace(/[-_]+/g, " "),
    }));
}

export default function Home() {
  const referenceImages = getReferenceImages();
  return <HomeClient referenceImages={referenceImages} />;
}
