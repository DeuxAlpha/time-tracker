import {Filter} from "@/models/query/Filter";
import {Sorter} from "@/models/query/Sorter";
import {Aggregator} from "@/models/query/Aggregator";
import {Distinctor} from "@/models/query/Distinctor";

export type QueryRequest = {
  page?: number;
  items?: number;
  filters?: Filter[];
  sorters?: Sorter[];
  aggregators?: Aggregator[];
  distinctors?: Distinctor[];
}