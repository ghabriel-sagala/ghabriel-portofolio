import { normalizeGitHubContributions } from "@/lib/github-contributions";

const contributionsUrl =
  "https://github-contributions-api.jogruber.de/v4/ghabriel-sagala?y=last";
const refreshIntervalSeconds = 15 * 60;

export async function GET() {
  try {
    const response = await fetch(contributionsUrl, {
      headers: { Accept: "application/json" },
      next: { revalidate: refreshIntervalSeconds },
    });

    if (!response.ok) {
      console.error(
        `GitHub contributions provider returned ${response.status}.`,
      );
      return Response.json(
        { error: "GitHub contribution data is temporarily unavailable." },
        { status: 502 },
      );
    }

    const payload: unknown = await response.json();
    const contributions = normalizeGitHubContributions(payload);

    if (!contributions) {
      console.error("GitHub contributions provider returned invalid data.");
      return Response.json(
        { error: "GitHub contribution data could not be read." },
        { status: 502 },
      );
    }

    return Response.json(contributions, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("Could not fetch GitHub contributions.", error);
    return Response.json(
      { error: "GitHub contribution data is temporarily unavailable." },
      { status: 502 },
    );
  }
}
