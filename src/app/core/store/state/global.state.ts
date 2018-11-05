import { User } from '../../../modules/auth/user';

export type GlobalState = Readonly<{
  user: User
}>;

export const INITIAL_GLOBAL_STATE: GlobalState = {
  user: null
};
