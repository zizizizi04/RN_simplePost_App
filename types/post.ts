export interface PostDto {
  id: string;
  createDate: Date;
  title: string;
  content: string;
}

export interface PostWithContentDto extends PostDto {}
