import axios from "axios";
import {TimeLog} from "@/models/requests/TimeLog";
import {QueryRequest} from "@/models/query/QueryRequest";
import {QueryResponse} from "@/models/query/QueryResponse";

const apiClient = axios.create({
  baseURL: 'https://localhost:5001',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export async function SaveTimeLog(timeLogRequest: TimeLog) {
  console.dir(timeLogRequest)
  return await apiClient.post('/time', timeLogRequest);
}

export async function GetTimeLogs(queryRequest: QueryRequest): Promise<QueryResponse<TimeLog>> {
  return await apiClient.post('/time/get', queryRequest)
    .then(response => response.data);
}