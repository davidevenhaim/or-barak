/**
 * Extracts YouTube video ID from various YouTube URL formats
 */
export function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
}

/**
 * Gets YouTube thumbnail URL for a video ID.
 * Defaults to maxresdefault, which isn't available for every video — use
 * getYouTubeThumbnailFallback as an onError fallback.
 * `version` busts YouTube's CDN cache, which can keep serving a stale
 * maxresdefault long after a thumbnail is replaced on YouTube.
 */
export function getYouTubeThumbnail(videoId: string, version?: number): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg${
    version ? `?v=${version}` : ""
  }`;
}

/**
 * Gets a YouTube thumbnail URL that exists for every video (mqdefault).
 * Use as an onError fallback when maxresdefault is missing. mqdefault is
 * clean 16:9, unlike hqdefault which is 4:3 with letterbox bars baked in.
 */
export function getYouTubeThumbnailFallback(
  videoId: string,
  version?: number
): string {
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg${
    version ? `?v=${version}` : ""
  }`;
}

/**
 * Checks if a URL is a YouTube URL
 */
export function isYouTubeUrl(url: string): boolean {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

/**
 * Gets YouTube embed URL for a video ID
 */
export function getYouTubeEmbedUrl(videoId: string, autoplay = false): string {
  return `https://www.youtube.com/embed/${videoId}${
    autoplay ? "?autoplay=1" : ""
  }`;
}
