import { useQuery } from "@tanstack/react-query";
import { getFundStatus } from "@/lib/donations";

/**
 * Live donor-trust counter: "Fonden har dækket X medlemskaber."
 * Reads the public /api/donations/fund-status endpoint.
 */
export function FundStatus({ className }: { className?: string }) {
  const { data, isError } = useQuery({
    queryKey: ["fund-status"],
    queryFn: getFundStatus,
    staleTime: 60_000,
  });

  if (isError || !data) return null;

  const count = data.activeSubsidisedCount;
  return (
    <p className={className}>
      Fonden har i øjeblikket dækket{" "}
      <strong className="text-mountain-orange">{count}</strong>{" "}
      {count === 1 ? "medlemskab" : "medlemskaber"}.
    </p>
  );
}
