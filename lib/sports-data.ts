import { Users, Volleyball, Brain } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Player {
  name: string;
  position: string;
  jerseyNumber: number;
  passportImage: string;
  level: number;
  registered: boolean;
  isCaptain?: boolean;
}

export interface Team {
  id: string;
  name: string;
  players: Player[];
}

export interface Sport {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  image: string;
  teams: Team[];
}

export const sportsData: Sport[] = [
  {
    id: "football",
    name: "Football",
    description:
      "The beautiful game of strategy, skill, and teamwork on the field.",
    icon: Users,
    image: "/football-match-action.png",
    teams: [
      {
        id: "management",
        name: "Coalition",
        players: [
          {
            name: "Ammar",
            position: "Midfielder",
            jerseyNumber: 8,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: true,
            isCaptain: true,
          },
          {
            name: "Ahmad Bello Kware",
            position: "Defender",
            jerseyNumber: 5,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: false,
          },
        ],
      },
      {
        id: "software-eng",
        name: "Software Engineering",
        players: [
          {
            name: "Abdullahi Rabo",
            position: "Goalkeeper",
            jerseyNumber: 1,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: true,
            isCaptain: true,
          },
          {
            name: "Dahoud Yahaya",
            position: "Midfielder",
            jerseyNumber: 4,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: false,
          },
        ],
      },
      {
        id: "Computer-science",
        name: "Computer Science",
        players: [
          {
            name: "Umar Sani",
            position: "Forward",
            jerseyNumber: 9,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: true,
            isCaptain: true,
          },
          {
            name: "Lawal Basiru Dan'isa",
            position: "Midfielder",
            jerseyNumber: 6,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: false,
          },
        ],
      },
      {
        id: "bio-tech",
        name: "Bio Technology",
        players: [
          {
            name: "Salim Atiku",
            position: "Midfielder",
            jerseyNumber: 10,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: true,
            isCaptain: true,
          },
          {
            name: "Umar Salihu",
            position: "Midfielder",
            jerseyNumber: 5,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: false,
          },
        ],
      },
      {
        id: "pub-admin",
        name: "Public Administration",
        players: [
          {
            name: "Salim Umar",
            position: "Forward",
            jerseyNumber: 9,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: true,
            isCaptain: true,
          },
          {
            name: "Walid Kolo",
            position: "Midfielder",
            jerseyNumber: 11,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: false,
          },
        ],
      },
      {
        id: "cyber",
        name: "Cyber Security",
        players: [
          {
            name: "undefined",
            position: "Forward",
            jerseyNumber: 99,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: true,
            isCaptain: true,
          },
        ],
      },
      {
        id: "law",
        name: "Law",
        players: [
          {
            name: "undefined",
            position: "Forward",
            jerseyNumber: 99,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: true,
            isCaptain: true,
          },
        ],
      },
    ],
  },
  {
    id: "volleyball",
    name: "Volleyball",
    description:
      "Fast-paced action with powerful spikes and strategic plays at the net.",
    icon: Volleyball,
    image: "/volleyball-game-spike.jpg",
    teams: [
      {
        id: "red",
        name: "Red",
        players: [
          {
            name: "Tajudin Muhammad",
            position: "Outside Hitter",
            jerseyNumber: 1,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: true,
            isCaptain: true,
          },
        ],
      },
      {
        id: "blue",
        name: "Blue",
        players: [
          {
            name: "Omalaran",
            position: "Outside Hitter",
            jerseyNumber: 1,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: true,
            isCaptain: true,
          },
        ],
      },
    ],
  },
  {
    id: "chess",
    name: "Chess",
    description:
      "Strategic battles of intellect where every move counts on the board.",
    icon: Brain,
    image: "/chess-board-competition.jpg",
    teams: [
      {
        id: "contestants",
        name: "Contestants",
        players: [
          {
            name: "Bello Yahaya Mara",
            position: "Board 1",
            jerseyNumber: 1,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: true,
          },
        ],
      },
    ],
  },
  {
    id: "basketball",
    name: "Basketball",
    description:
      "High-energy hoops action with incredible athleticism and teamwork.",
    icon: Users,
    image: "/basketball-game-dunk.jpg",
    teams: [
      {
        id: "blue-shooters",
        name: "Blue Ballers",
        players: [
          {
            name: "Lookman Zayyad",
            position: "Point Guard",
            jerseyNumber: 23,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: true,
            isCaptain: true,
          },
        ],
      },
      {
        id: "green-ballers",
        name: "Green Ballers",
        players: [
          {
            name: "Jesse",
            position: "Point Guard",
            jerseyNumber: 30,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: true,
            isCaptain: true,
          },

          {
            name: "Dodo",
            position: "Center",
            jerseyNumber: 12,
            passportImage: "/placeholder-user.jpg",
            level: 200,
            registered: false,
          },
        ],
      },
    ],
  },
  {
    id: "table-tennis",
    name: "Table Tennis",
    description:
      "Fast-paced action with quick reflexes and strategic shot placement.",
    icon: Users,
    image: "/table-tennis-game.jpg",
    teams: [
      {
        id: "blue-shooters",
        name: "Blue Ballers",
        players: [
          {
            name: "Lookman Zayyad",
            position: "Point Guard",
            jerseyNumber: 1,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: true,
            isCaptain: true,
          },
        ],
      },
      {
        id: "green-ballers",
        name: "Green Ballers",
        players: [
          {
            name: "Jesse",
            position: "Point Guard",
            jerseyNumber: 2,
            passportImage: "/placeholder-user.jpg",
            level: 400,
            registered: true,
            isCaptain: true,
          },

          {
            name: "Dodo",
            position: "Center",
            jerseyNumber: 3,
            passportImage: "/placeholder-user.jpg",
            level: 200,
            registered: false,
          },
        ],
      },
    ],
  },
];
