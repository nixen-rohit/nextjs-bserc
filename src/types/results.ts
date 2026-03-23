// types/results.ts
export interface ResultCandidate {
  registrationId: string;
  name: string;
  institute: string;
  score: number;
  rank: number;
  selected: boolean;
  // Note: email is excluded from public API response for privacy
}

export interface ResultsMeta {
  program: string;
  examDate: string;
  declarationDate: string;
  cutOffScore: number;
  totalCandidates: number;
  selectedCandidates: number;
  organization: string;
}

export interface ResultsAnnouncement {
  title: string;
  lateralEntryNote: string;
  technicalIssueNote: string;
}

export interface ResultsApiResponse {
  success: boolean;
  meta: ResultsMeta;
  announcement: ResultsAnnouncement;
  results: ResultCandidate[];
  timestamp: string;
}

export interface ResultsApiError {
  success: false;
  error: string;
  message?: string;
}