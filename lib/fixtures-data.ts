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
    teamA: "Staff",
    teamB: "Computer Science",
    date: "2025-10-31T16:00:00+01:00",
  },
  {
    sport: "Football",
    teamA: "Economics",
    teamB: "Software Engineering",
    date: "2025-11-01T07:00:00+01:00",
  },
  {
    sport: "Football",
    teamA: "Public Administration",
    teamB: "Cyber Security",
    date: "2025-11-01T16:00:00+01:00",
  },
  {
    sport: "Football",
    teamA: "Bio Technology",
    teamB: "Law",
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
  {
    sport: "Football",
    teamA: "Economics",
    teamB: "Computer Science",
    score: "0-0",
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
    p: 1,
    w: 1,
    d: 0,
    l: 0,
    gf: 5,
    ga: 0,
    gd: 5,
    pts: 3,
  },
  {
    team: "Cyber Security",
    p: 1,
    w: 1,
    d: 0,
    l: 0,
    gf: 3,
    ga: 2,
    gd: 1,
    pts: 3,
  },
  {
    team: "Public Administration",
    p: 1,
    w: 1,
    d: 0,
    l: 0,
    gf: 2,
    ga: 1,
    gd: 1,
    pts: 3,
  },
  { team: "Economics", p: 1, w: 0, d: 1, l: 0, gf: 0, ga: 0, gd: 0, pts: 1 },
  {
    team: "Computer Science",
    p: 1,
    w: 0,
    d: 1,
    l: 0,
    gf: 0,
    ga: 0,
    gd: 0,
    pts: 1,
  },
  {
    team: "Bio Technology",
    p: 1,
    w: 0,
    d: 0,
    l: 1,
    gf: 2,
    ga: 3,
    gd: -1,
    pts: 0,
  },
  { team: "Staff", p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 2, gd: -1, pts: 0 },
  { team: "Law", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 5, gd: -5, pts: 0 },
];

// Tournament Rules:
// - Top 4 teams qualify for semi-finals
// - Qualification determined by:
//   1. Points (3 for win, 1 for draw, 0 for loss)
//   2. Goal Difference (GD)
//   3. Goals Scored (GF)
