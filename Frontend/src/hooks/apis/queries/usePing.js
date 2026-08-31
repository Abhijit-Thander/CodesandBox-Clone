import { useQuery } from "@tanstack/react-query";
import { ping } from "../../../apis/ping";

export const usePing = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["ping"],
    queryFn: ping,
    refetchOnWindowFocus: false,
    staleTime: 10000,
  });

  return { isLoading, data };
};
