export function formatTimeToHHMM(input: string): string {
    const date = new Date(input);

    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
}
