import { TUser } from '@/contexts/user';
import { TAPIUser } from './api';

export function preparedUser(user: TAPIUser): Omit<TUser, 'loginMode'> {
  return {
    id: user.uid,
    name: user.displayName,
    email: user.email,
    avatarUri: 'https://source.unsplash.com/300x300/?baby',
  };
}
