import {Aggregation} from "@/models/query/Aggregation";
import {Distinction} from "@/models/query/Distinction";

export type QueryResponse<T> = {
  aggregations: Aggregation[];
  distinctions: Distinction[];
  startItemCount: number;
  endItemCount: number;
  itemCount: number;
  maxItemCount: number;
  page: number;
  maxPage: number;
  items: T[];
}