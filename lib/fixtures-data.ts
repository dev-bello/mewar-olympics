export interface Fixture {
  sport: string;
  teamA: string;
  teamB: string;
  date: string;
}

export interface Result {
  sport: string;
  teamA: string;
  teamB: string;
  score: string;
}

export const fixturesData: Fixture[] = [
  {
    sport: "Football",
    teamA: "",
    teamB: "",
    date: "",
  },
  {
    sport: "Football",
    teamA: "",
    teamB: "",
    date: "",
    // 2025-07-20T15:00:00Z
  },
  {
    sport: "",
    teamA: "",
    teamB: "",
    date: "",
  },
];

export const resultsData: Result[] = [
  {
    sport: "Football",
    teamA: "",
    teamB: "",
    score: "2 - 1",
  },
];

export interface FootballTableRow {
  team: string;
  p: number;
  w: number;
  d: number;
  l: number;
  gf: number;
  ga: number;
  pts: number;
}

export const footballTableData: FootballTableRow[] = [
  { team: "Coalition", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  {
    team: "Software Engineering",
    p: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0,
    ga: 0,
    pts: 0,
  },
  { team: "Computer Science", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  { team: "Bio Technology", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  {
    team: "Public Administration",
    p: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0,
    ga: 0,
    pts: 0,
  },
  {
    team: "Cyber Security",
    p: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0,
    ga: 0,
    pts: 0,
  },
  {
    team: "Law",
    p: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0,
    ga: 0,
    pts: 0,
  },
];
