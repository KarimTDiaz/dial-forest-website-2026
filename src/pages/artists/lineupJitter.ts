/** Deterministic layout from a stable key (SSR / hydration safe). */
export type NameJitter = {
  translateX: number;
  rotate: number;
  fontSizeEm: number;
};

function hashKey(key: string): number {
  let h = 2166136261;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function nameJitter(
  sectionId: string,
  lineIndex: number,
  tokenIndex: number,
  text: string,
): NameJitter {
  const h = hashKey(`${sectionId}:${lineIndex}:${tokenIndex}:${text}`);
  const r = (n: number) => (h >> n) & 0xffff;

  const translateX = (r(0) % 56) - 4;
  const rotate = ((r(4) % 17) - 8) / 10;
  const fontSizeEm = 2 + (r(8) % 15) / 100;

  return { translateX, rotate, fontSizeEm };
}
