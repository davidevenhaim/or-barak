import { VideoRole } from "../enums/video-role.enum";

export interface VideoItem {
  role: VideoRole;
  title: string;
  url: string;
}
