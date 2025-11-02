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
    teamA: "Public Administration",
    teamB: "Cyber Security",
    date: "2025-11-03T16:00:00+01:00",
  },
  {
    sport: "Football",
    teamA: "Software Engineering",
    teamB: "Bio Technology",
    date: "2025-11-04T16:00:00+01:00",
  },
  {
    sport: "Football",
    teamA: "TBD (3rd Place Playoff)",
    teamB: "TBD (3rd Place Playoff)",
    date: "2025-11-05T16:00:00+01:00",
  },
  {
    sport: "Football",
    teamA: "TBD (Semi Final Winner 1)",
    teamB: "TBD (Semi Final Winner 2)",
    date: "2025-11-06T16:00:00+01:00",
  },
];

export const resultsData: Result[] = [
  {
    sport: "Football",
    teamA: "Public Administration",
    teamB: "Cyber Security",
    score: "1-0",
  },
  {
    sport: "Football",
    teamA: "Economics",
    teamB: "Computer Science",
    score: "0-0",
  },
  {
    sport: "Football",
    teamA: "Bio Technology",
    teamB: "Law",
    score: "3-0",
  },
  {
    sport: "Football",
    teamA: "Software Engineering",
    teamB: "Law",
    score: "5-0",
  },
  {
    sport: "Football",
    teamA: "Public Administration",
    teamB: "Staff",
    score: "2-1",
  },
  {
    sport: "Football",
    teamA: "Cyber Security",
    teamB: "Bio Technology",
    score: "3-2",
  },
  {
    sport: "Football",
    teamA: "Computer Science",
    teamB: "Staff",
    score: "0-1",
  },
  {
    sport: "Football",
    teamA: "Software Engineering",
    teamB: "Economics",
    score: "4-0",
  },
];

export interface FootballTableRow {
  team: string;
  p: number; // Played
  w: number; // Won
  d: number; // Draw
  l: number; // Lost
  gf: number; // Goals For
  ga: number; // Goals Against
  gd: number; // Goal Difference
  pts: number; // Points
}

export const footballTableData: FootballTableRow[] = [
  {
    team: "Software Engineering",
    p: 2,
    w: 2,
    d: 0,
    l: 0,
    gf: 9,
    ga: 0,
    gd: 9,
    pts: 6,
  },
  {
    team: "Public Administration",
    p: 2,
    w: 2,
    d: 0,
    l: 0,
    gf: 3,
    ga: 1,
    gd: 2,
    pts: 6,
  },
  {
    team: "Bio Technology",
    p: 2,
    w: 1,
    d: 0,
    l: 1,
    gf: 5,
    ga: 3,
    gd: 2,
    pts: 3,
  },
  {
    team: "Cyber Security",
    p: 2,
    w: 1,
    d: 0,
    l: 1,
    gf: 3,
    ga: 3,
    gd: 0,
    pts: 3,
  },
  { team: "Staff", p: 2, w: 1, d: 0, l: 1, gf: 2, ga: 2, gd: 0, pts: 3 },
  {
    team: "Computer Science",
    p: 2,
    w: 0,
    d: 1,
    l: 1,
    gf: 0,
    ga: 1,
    gd: -1,
    pts: 1,
  },
  { team: "Economics", p: 2, w: 0, d: 1, l: 1, gf: 0, ga: 4, gd: -4, pts: 1 },
  { team: "Law", p: 2, w: 0, d: 0, l: 2, gf: 0, ga: 8, gd: -8, pts: 0 },
];

// Tournament Rules:
// - Top 4 teams qualify for semi-finals
// - Qualification determined by:
//   1. Points (3 for win, 1 for draw, 0 for loss)
//   2. Goal Difference (GD)
//   3. Goals Scored (GF)

export interface TopScorer {
  name: string;
  team: string;
  goals: number;
}

export interface CleanSheet {
  name: string;
  team: string;
  matches: number;
}

export const topScorersData: TopScorer[] = [
  { name: "Faiz Adeyemi", team: "Software Engineering", goals: 5 },
  { name: "Saidu Maigishir", team: "Software Engineering", goals: 2 },
  { name: "Sardauna", team: "Public Administration", goals: 2 },
  { name: "Jay-Jay Musa", team: "Bio Technology", goals: 2 },
  { name: "Salim Umar", team: "Public Admin", goals: 1 },
];

export const cleanSheetsData: CleanSheet[] = [
  { name: "Abdullahi Rabo", team: "Software Engineering", matches: 2 },
  { name: "Khalifa", team: "Economics", matches: 1 },
  { name: "Staff", team: "Staff Team", matches: 1 },
  { name: "Bobo", team: "Public Admin", matches: 1 },
];
