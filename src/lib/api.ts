/**
 * Thin client for the MitLivMed backend API.
 *
 * All calls send credentials (the httpOnly session cookie) so authenticated
 * flows like the stipend application work. The base URL comes from
 * VITE_API_BASE_URL; only the Stripe publishable key and this URL live in the
 * frontend — never a secret.
 */
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "https://api.mitlivmed.dk";

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly body: unknown,
    message?: string,
  ) {
    super(message ?? `API request failed (${String(status)})`);
    this.name = "ApiError";
  }
}

/** A field-level error code the backend returns in `{ error: "..." }` on 4xx. */
export function apiErrorCode(err: unknown): string | null {
  if (err instanceof ApiError && err.body && typeof err.body === "object") {
    const code = (err.body as { error?: unknown }).error;
    return typeof code === "string" ? code : null;
  }
  return null;
}

export async function apiFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  const text = await res.text();
  const data: unknown = text ? JSON.parse(text) : null;

  if (!res.ok) {
    const message =
      data && typeof data === "object" && "error" in data
        ? String((data as { error: unknown }).error)
        : undefined;
    throw new ApiError(res.status, data, message);
  }

  return data as T;
}
