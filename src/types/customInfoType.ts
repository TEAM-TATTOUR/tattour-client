export interface customInfoType {
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
}

export interface resCustomInfoType {
  id: number;
  userId: number;
  stickerId: number;
  themes: Array<string>;
  styles: Array<string>;
  mainImageUrl: string;
  handDrawingImageUrl: File | null;
  images: Array<string>;
  haveDesign: boolean;
  size: string;
  name: string;
  description: string;
  demand: string;
  count: number;
  isColored: boolean;
  isPublic: boolean;
  isCompleted: boolean;
  process: string;
  viewCount: number;
}
