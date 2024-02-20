type ThemeType = "flower" | "test";

export type PlayerData = {
  name: string;
  tag: string | null;
  score: number;
};

export type SetData = {
  playerOne: PlayerData;
  playerTwo: PlayerData;
  centerText: string;
  reversed: boolean;
  theme: ThemeType;
};
