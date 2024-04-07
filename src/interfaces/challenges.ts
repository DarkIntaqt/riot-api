export type ChallengeLevel =
  | 'NONE'
  | 'IRON'
  | 'BRONZE'
  | 'SILVER'
  | 'GOLD'
  | 'PLATINUM'
  | 'DIAMOND'
  | 'MASTER'
  | 'GRANDMASTER'
  | 'CHALLENGER';

interface PointsDTO {
  level: ChallengeLevel;
  current: number;
  max: number;
  percentile: number;
}

interface ChallengesDTO {
  challengeId: number;
  percentile: number;
  level: ChallengeLevel;
  value: number;
  achievedTimestamp?: number;
}

interface PreferencesDTO {
  bannerAccent: string;
  title: string;
  challengeIds: number[];
  crestBorder: string;
  prestigeCrestBorderLevel: number;
}

type CategoryPointsDTO = {
  IMAGINATION: PointsDTO;
  TEAMWORK: PointsDTO;
  VETERANCY: PointsDTO;
  EXPERTISE: PointsDTO;
};

export interface ChallengePlayerDataDTO {
  totalPoints: PointsDTO;
  categoryPoints: CategoryPointsDTO;
  challenges: ChallengesDTO;
  preferences: PreferencesDTO;
}
