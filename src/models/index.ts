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
}

export interface VideoUploadJobModel {
  asset_id: string;
  file_id: string;
  height: number;
  width: number;
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

