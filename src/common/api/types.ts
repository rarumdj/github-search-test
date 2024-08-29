export interface Iresults {
  total_count: number;
  incomplete_results: boolean;
  items: {
    login: string;
    avatar_url: string;
    url: string;
    type: string;
  }[];
}
