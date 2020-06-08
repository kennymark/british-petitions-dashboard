

export interface AllPetitions {
  links: AllPetitionsLinks;
  data: Datum[];
}

export interface Datum {
  type: Type;
  id: number;
  links: DatumLinks;
  attributes: Attributes;
}

export interface Attributes {
  action: string;
  background: string;
  additional_details: string;
  committee_note: null | string;
  state: State;
  signature_count: number;
  created_at: string;
  updated_at: string;
  rejected_at: null;
  opened_at: string;
  closed_at: null;
  moderation_threshold_reached_at: string;
  response_threshold_reached_at: string;
  government_response_at: null | string;
  debate_threshold_reached_at: null | string;
  scheduled_debate_date: null;
  debate_outcome_at: null;
  creator_name: string;
  rejection: null;
  government_response: GovernmentResponse | null;
  debate: null;
  departments: Department[];
  topics: Topic[];
}

export interface Department {
  acronym: string;
  name: string;
  url: string;
}

export interface GovernmentResponse {
  responded_on: string;
  summary: string;
  details: string;
  created_at: string;
  updated_at: string;
}

export enum State {
  Open = "open",
}

export enum Topic {
  Covid19 = "covid-19",
}

export interface DatumLinks {
  self: string;
}

export enum Type {
  Petition = "petition",
}

export interface AllPetitionsLinks {
  self: string;
  first: string;
  last: string;
  next: string;
  prev: null;
}
