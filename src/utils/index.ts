import * as fs from 'fs';
import * as path from 'path';
import { readdir, stat } from 'fs/promises';

export function concatObject(obj: Object, separator: string = ', ') {
  return Object.keys(obj)
    .map(function (key, index) {
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

export function getS3ManifestPath(videoId: string) {
  return `videos/${videoId}/${getMainManifestFileName()}`;
}

export function getS3SourceFileVideoPath(videoId: string, sourceFileName: string) {
  return `videos/${videoId}/${sourceFileName}`;
}
export function getS3DownloadFilePath(assetId: string, downloadFileName: string) {
  return `videos/${assetId}/${downloadFileName}`;
}

export function getS3ThumbnailPath(videoId: string) {
  return `videos/${videoId}/${getThumbnailFileName()}`;
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
  return `${cdnBaseUrl}/${getS3ManifestPath(assetId)}`;
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

export function getTempLocalUploadDirectory(tempUploadDir: string) {
  return tempUploadDir;
}
