import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const customOptionState = atom({
  key: 'customOption',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
