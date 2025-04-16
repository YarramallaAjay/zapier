export interface User {
  id: string;
  name: string;
  email: string;
  team?: {
    id: string;
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
} 