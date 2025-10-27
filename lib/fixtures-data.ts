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
    teamA: "Economics",
    teamB: "Computer Science",
    date: "2025-10-27T16:00:00+01:00", // 4:00 PM WAT
  },
  {
    sport: "Football",
    teamA: "Software Engineering",
    teamB: "Law",
    date: "2025-10-28T16:00:00+01:00",
  },
  {
    sport: "Football",
    teamA: "Public Administration",
    teamB: "Staff",
    date: "2025-10-29T16:00:00+01:00",
  },
  {
    sport: "Football",
    teamA: "Economics",
    teamB: "Software Engineering",
    date: "2025-10-30T16:00:00+01:00",
  },
  {
    sport: "Football",
    teamA: "Bio Technology",
    teamB: "Law",
    date: "2025-10-31T16:00:00+01:00",
  },
  {
    sport: "Football",
    teamA: "Public Administration",
    teamB: "Cyber Security",
    date: "2025-11-01T07:00:00+01:00",
  },
  {
    sport: "Football",
    teamA: "Staff",
    teamB: "Computer Science",
    date: "2025-11-01T16:00:00+01:00",
  },
  {
    sport: "Football",
    teamA: "Bio Technology",
    teamB: "Cyber Security",
    date: "2025-11-02T16:00:00+01:00",
  },
  {
    sport: "Football",
    teamA: "TBD (Team 2)",
    teamB: "TBD (Team 4)",
    date: "2025-11-03T16:00:00+01:00",
  },
  {
    sport: "Football",
    teamA: "TBD (Team 1)",
    teamB: "TBD (Team 3)",
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
  // Results will be added as matches are completed
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
  { team: "Economics", p: 1, w: 0, d: 1, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
  {
    team: "Software Engineering",
    p: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0,
    ga: 0,
    gd: 0,
    pts: 0,
  },
  {
    team: "Computer Science",
    p: 1,
    w: 0,
    d: 1,
    l: 0,
    gf: 0,
    ga: 0,
    gd: 0,
    pts: 0,
  },
  {
    team: "Bio Technology",
    p: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0,
    ga: 0,
    gd: 0,
    pts: 0,
  },
  {
    team: "Public Administration",
    p: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0,
    ga: 0,
    gd: 0,
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
    gd: 0,
    pts: 0,
  },
  { team: "Law", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
  { team: "Staff", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
];

// Tournament Rules:
// - Top 4 teams qualify for semi-finals
// - Qualification determined by:
//   1. Points (3 for win, 1 for draw, 0 for loss)
//   2. Goal Difference (GD)
//   3. Goals Scored (GF)
