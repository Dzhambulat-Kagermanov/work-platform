export function formatFileSize(bytes: number): string {
    if (bytes < 1024) {
        return bytes + " Б";
    } else if (bytes < 1024 * 1024) {
        return (bytes / 1024).toFixed(2) + " КБ";
    } else if (bytes < 1024 * 1024 * 1024) {
        return (bytes / (1024 * 1024)).toFixed(2) + " МБ";
    } else {
        return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " ГБ";
    }
}
