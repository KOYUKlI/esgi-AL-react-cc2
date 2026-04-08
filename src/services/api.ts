const API_BASE = "/api";

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(
      (body as { error?: string }).error ?? `Erreur ${response.status}`,
    );
  }
  return response.json() as Promise<T>;
}

export const api = {
  get: <T>(path: string): Promise<T> =>
    fetch(`${API_BASE}${path}`).then((res) => handleResponse<T>(res)),

  post: <T>(path: string, body?: unknown): Promise<T> =>
    fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: body ? { "Content-Type": "application/json" } : {},
      body: body ? JSON.stringify(body) : undefined,
    }).then((res) => handleResponse<T>(res)),
};
