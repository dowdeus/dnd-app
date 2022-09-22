import useSWR from 'swr';
import apiBase from '../utils/const/apiBase';
import fetcher from '../utils/fetcher';

export function useRulesByIndex(index: string) {
  const { data, error } = useSWR(`${apiBase}/rules/${index}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useRulesBySection(section: string) {
  const { data, error } = useSWR(`${apiBase}/rule-sections/${section}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
