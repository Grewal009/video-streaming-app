export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&regionCode=US&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTIONS_API =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY +
  "&q=";
export const LIVE_CHAT_COUNT = 15;
