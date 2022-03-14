export interface CurrentUserInterface {
  id: number;
  email: string;
  createdAt: string;
  updateAt: string;
  username: string;
  bio: string | null; // Можно и так: bio?: string
  image: string | null;
  token: string;
}
