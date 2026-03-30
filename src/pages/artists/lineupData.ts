/** Full line-up copy from the festival poster (one string per printed line). */
export type LineupSection = {
  id: string;
  title: string;
  lines: string[];
};

export const LINEUP_SECTIONS: LineupSection[] = [
  {
    id: 'dj',
    title: 'DJ',
    lines: [
      'ARCANOID / ARISTA / AMIGA B2B FRAU TROFFEA / ANA PACHECO / ANGELA GRIEF',
      'ALDOSAN / BALDMAN B2B AXIS MUNDI / BALHEIM & LA INDO / BIBI /',
      'CHAGO & REA PRES. TRANQUILITI PER 5 / DAFOE / DELASFLORES',
      'DJ CASTA / DJ FEET / DJ RADAR / DREI / ED WARNER / EMILIO / ELBA B2B BB.WAV /',
      'ELMER DAVY / FORMICA / FRPINKL / FATFISH / HARUT HOV',
      'HERMETICA B2B RAQUEL X / HUUGEN / ITS ERIKA / JAVI LIER / JOHN TALABOT /',
      'KATZA / KINETIC / NO FAME / LOGICAL METHOD / LOU.D B2B NENO',
      'LUKE CHANNEL / LUISA / LYNCE / OG JUAN B2B DJ GOSTOSO / STEIN /',
      'PEPE / PSYCHODANDY / PUMU / SENDA FATAL / SEQ B2B D-C60 / STCKMAN',
      'SYSTEMA / TRS / VALIUM / VICTOR POSSE B2B DORR / VICTOR REYES /',
      'YOU_EL B2B MOU / ZIZI K / 982.WAV',
    ],
  },
  {
    id: 'live',
    title: 'LIVE',
    lines: [
      'AQUATRAXX / PARAUTAS / INTERCOM82 / EL MUELLE 1931 SHOP / PERSA /',
      'PROTOCOLO SYSEX / MOUNQUP / FOTOCOPIA / NORTH PATROL & DOJO SOUNDSYSTEM',
    ],
  },
  {
    id: 'actividade',
    title: 'ACTIVIDADE COLECTIVA',
    lines: [
      'COLECTIVO MOM / FILME CLUBE BY DIAL ASOC / DEPORTES LOPEZ /',
      'EL MUELLE 1931 POP-UP / YOGA w/ MAY BAKER & PURA VIDA',
    ],
  },
];

/** Split a poster line into artist tokens (slashes); drops empty tokens from trailing slashes. */
export function tokensFromLine(line: string): string[] {
  return line
    .split(/\s*\/\s*/)
    .map((s) => s.trim())
    .filter(Boolean);
}
