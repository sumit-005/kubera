import {
  QueryClient,
  UseQueryOptions,
  UseMutationOptions,
  DefaultOptions,
  MutationCache,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import storage from "@/utils/storage";
import { toast } from "@/components/ui/use-toast";

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: true,
    retry: 1,
  },
};

const mutationCache = new MutationCache({
  onError: (error: any, data: any) => {
    try {
      if (error.response.status >= 500) {
        if (error?.response?.data?.message) {
          toast({
            description: error.response.data.message,
            variant: "destructive",
          });
          return;
        }
        return;
      }

      if (error?.response?.data?.message && !error?.response.data?.error_code) {
        toast({
          description: error.response.data.message,
          variant: "destructive",
        });
      }
    } catch (error) {}
  },
});

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
  mutationCache,
});

export type ExtractFnReturnType<FnType extends (...args: any) => any> = Awaited<
  ReturnType<FnType>
>;

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  "queryKey" | "queryFn"
>;

export type MutationConfig<MutationFnType extends (...args: any) => any> =
  UseMutationOptions<
    ExtractFnReturnType<MutationFnType>,
    AxiosError,
    Parameters<MutationFnType>[0]
  >;
