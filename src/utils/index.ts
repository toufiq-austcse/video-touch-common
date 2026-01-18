import * as fs from 'fs';
import * as path from 'path';
import { readdir, stat } from 'fs/promises';

export function concatObject(obj: Object, separator: string = ', ') {
  return Object.keys(obj)
    .map(function(key, index) {
      return (obj as any)[key];
    })
    .join(separator);
}

export function getLocalVideoMp4Path(videoId: string, tempVideoDir: string) {
  let path = getLocalVideoRootPath(videoId, tempVideoDir);
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
  return `${path}/${videoId}.mp4`;
}

export function getLocalAudioChunksDir(videoId: string, tempVideoDir: string) {
  let path = `${getLocalVideoRootPath(videoId, tempVideoDir)}/audio_chunks`;
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
  return path;
}

export function getLocalPartialTranscriptsDir(videoId: string, tempVideoDir: string) {
  let path = `${getLocalVideoRootPath(videoId, tempVideoDir)}/transcripts`;
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
  return path;
}

export function getLocalMp3Path(videoId: string, tempVideoDir: string) {
  let path = getLocalVideoRootPath(videoId, tempVideoDir);
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
  return `${path}/${getAudioFileName()}`;
}

export function getLocalTranscriptPath(videoId: string, tempVideoDir: string) {
  let path = getLocalVideoRootPath(videoId, tempVideoDir);
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
  return `${path}/${getTranscriptFileName()}`;
}

export function getLocalVideoRootPath(videoId: string, tempVideoDir: string) {
  return `${tempVideoDir}/${videoId}`;
}

export function getLocalResolutionPath(videoId: string, height: number, tempVideoDir: string) {
  let path = `${getLocalVideoRootPath(videoId, tempVideoDir)}/${height}`;
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  return path;
}

export function getRefPlayListPath(videoId: string, height: number) {
  return `${videoId}/${height}/${height}_out.m3u8`;
}

export function getFileName(height: number) {
  return `${height}_out.m3u8`;
}

export function getS3UriVideoPathByHeight(videoId: string, height: number, s3BucketName: string) {
  return `s3://${s3BucketName}/videos/${videoId}/${height}`;
}

export function getS3UriSourceFileVideoPath(videoId: string, sourceFileName: string, s3BucketName: string) {
  return `s3://${s3BucketName}/videos/${videoId}/${sourceFileName}`;
}

export function getBunnyUriVideoPathByHeight(videoId: string, height: number) {
  return `videos/${videoId}/${height}`;
}

export function getServerManifestPath(videoId: string) {
  return `videos/${videoId}/${getMainManifestFileName()}`;
}

export function getServerSourceFileVideoPath(videoId: string, sourceFileName: string) {
  return `videos/${videoId}/${sourceFileName}`;
}

export function getServerDownloadFilePath(assetId: string, downloadFileName: string) {
  return `videos/${assetId}/${downloadFileName}`;
}

export function getServerAudioFilePath(assetId: string, audioFileName: string) {
  return `videos/${assetId}/${audioFileName}`;
}

export function getServerThumbnailPath(videoId: string) {
  return `videos/${videoId}/${getThumbnailFileName()}`;
}

export function getServerTranscriptFilePath(assetId: string, transcriptFileName: string) {
  return `videos/${assetId}/${transcriptFileName}`;
}

export function getLocalThumbnailPath(videoId: string, tempVideoDir: string) {
  return `${getLocalVideoRootPath(videoId.toString(), tempVideoDir)}/${getThumbnailFileName()}`;
}

export async function getDirSize(directory: string) {
  const files = await readdir(directory);
  const stats = files.map((file) => stat(path.join(directory, file)));

  return (await Promise.all(stats)).reduce((accumulator, { size }) => accumulator + size, 0);
}

export function getMainManifestPath(assetId: string, tempVideoDir: string) {
  return `${getLocalVideoRootPath(assetId, tempVideoDir)}/${getMainManifestFileName()}`;
}

export function getMasterPlaylistUrl(assetId: string, cdnBaseUrl: string) {
  return `${cdnBaseUrl}/${getServerManifestPath(assetId)}`;
}

export function getMainManifestFileName() {
  return 'main.m3u8';
}

export function getThumbnailFileName() {
  return 'thumbnail.png';
}

export function getServerFileName(originalName: string): string {
  let extension = originalName.split('.').pop();
  return `${Date.now()}.${extension}`;
}

export const getAudioFileName = (): string => {
  return 'audio.mp3';
};

export const getTranscriptFileName = (): string => {
  return 'transcript.json';
};

export function getTempLocalUploadDirectory(tempUploadDir: string) {
  return tempUploadDir;
}
