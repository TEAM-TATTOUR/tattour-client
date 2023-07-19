export interface customInfo {
  customInfo: {
    customId?: number;
    size?: string;
    isColored?: boolean;
    themes?: number[];
    styles?: number[];
    name?: string;
    description?: string;
    demand?: string;
    count?: number;
    isPublic?: boolean;
    isCompleted?: boolean;
    price?: number;
    viewCount?: number;
  };
  customMainImage?: File;
  customImages?: FileList;
}
