export interface ApiResponse {
  data: Event[] | Event | OlympicCountryData[] | OlympicSport[];

  links?: {
    first: string;

    last: string;

    prev: string | null;

    next: string | null;
  };

  meta?: {
    current_page: number;

    from: number;

    last_page: number;

    path: string;

    per_page: number;

    to: number;

    total: number;
  };
}

export interface Event {
  id: number;
  day: string; // ISO 8601 date string
  discipline_name: string;
  discipline_pictogram: string;
  name: string | null;
  venue_name: string;
  event_name: string;
  detailed_event_name: string;
  start_date: string; // ISO 8601 datetime string
  end_date: string; // ISO 8601 datetime string
  status: string;
  is_medal_event: number; // 0 or 1
  is_live: number; // 0 or 1
  gender_code: string;
  competitors: Competitor[];
}

export interface Competitor {
  country_id: string;
  country_flag_url: string;
  competitor_name: string;
  position: number;
  result_position: string;
  result_winnerLoserTie: string; // "W", "L", "T" (Win, Loss, Tie)
  result_mark: string; // Could be a score, time, etc.
}

export interface OlympicCountryData {
  id: string; // ISO 3166-1 alpha-3 country code
  name: string;
  continent: string; // ISO 3166-1 alpha-2 continent code? (Clarify)
  flag_url: string;
  gold_medals: number;
  silver_medals: number;
  bronze_medals: number;
  total_medals: number;
  rank: number; // Rank based on gold medals?
  rank_total_medals: number; // Overall rank?
}

export interface OlympicSport {
  id: string; // Unique identifier (likely a standardized code) for the sport
  name: string; // Full name of the sport
  pictogram_url: string; // URL to the sport's pictogram image
}
