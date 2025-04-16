export const base64ToBlob = (base64: string): Blob => {
    const [header, data] = base64.split(",");
    const mime = header.match(/:(.*?);/)?.[1];
    const bytes = atob(data);
    const array = new Uint8Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
        array[i] = bytes.charCodeAt(i);
    }
    return new Blob([array], { type: mime });
};
