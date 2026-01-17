import axios from 'axios';
import config from '../config';

const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  timeout: 10000,
});

export interface CreateBranchRequest {
  owner: string;
  repo: string;
  date: string;
  env: string;
  version: string;
}

export const createBranch = async (data: CreateBranchRequest) => {
  const response = await apiClient.post('/branch', data);
  return response.data;
};

export default apiClient;
