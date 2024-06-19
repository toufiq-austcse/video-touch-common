export interface VideoDownloadJobModel {
  _id: string;
  source_url: string;
}

export interface VideoValidationJobModel {
  _id: string;
}

export interface VideoProcessingJobModel {
  _id: string;
  height: number;
  width: number;
}

export interface VideoUploadJobModel {
  _id: string;
  height: number;
  width: number;
}

export interface JobMetadataModel {
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
  asset_id: string;
  height: number;
  status: string;
  details: string;
  dir_size: number;
}

