export interface VideoDownloadJobModel {
  asset_id: string;
  source_url: string;
}

export interface VideoValidationJobModel {
  asset_id: string;
}

export interface VideoProcessingJobModel {
  asset_id: string;
  file_id: string;
  height: number;
  width: number;
  type: string;
  name: string;
}

export interface AudioTranscriptionMergeJobModel {
  asset_id: string;
  file_id: string;
  name: string;
  type: string;
  partial_transcript_files: {
    name: string;
    audio_start_time: string;
  }[];
}

export interface AudioExtractionJobModel {
  asset_id: string;
  file_id: string;
  name: string;
}

export interface AudioTranscriptionJobModel {
  asset_id: string;
  file_id: string;
  name: string;
  audio_file_name: string;
  audio_start_time: string;
}

export interface FileUploadJobModel {
  asset_id: string;
  file_id: string;
  height: number;
  width: number;
  type: string;
  name: string;
  size: number;
}

export interface JobMetadataModel {
  asset_id: string;
  file_id: string;
  height: number;
  width: number;
  processRoutingKey: string;
}

export interface UpdateAssetStatusEventModel {
  asset_id: string;
  status: string;
  details: string;
}

export interface UpdateAssetEventModel {
  asset_id: string;
  data: {
    size: number;
    height: number;
    width: number;
    duration: number;
  };
}

export interface UpdateFileStatusEventModel {
  file_id: string;
  status: string;
  details: string;
  dir_size: number;
}

export interface ThumbnailGenerationJobModel {
  asset_id: string;
  file_id: string;
}