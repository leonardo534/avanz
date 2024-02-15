export interface Post {
  id: number;
  idAuthor: number | string;
  type: string;
  title: string;
  description: string;
  typeMachine: string;
  comments: any[]; 
}

export interface Comment {
  id: number;
  user_origin_id: number;
  user_target_id: number;
  comment: string;
  created: string;
  like_count: number;
  replies: Comment[];
}

export interface Props {
  item: Post;
}