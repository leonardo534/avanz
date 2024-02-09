export interface Post {
  id: number;
  type: string;
  title: string;
  description: string;
  typeMachine: string;
  comments: any[]; // Ou adicione a tipagem adequada para os comentários se disponível
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