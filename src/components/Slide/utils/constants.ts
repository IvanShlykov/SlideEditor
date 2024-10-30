import { BulletType } from '../components/Bullet/Bullet.types';

export const textType = {
  [BulletType.title]: 'font-size: 34px; font-weight: 600;',
  [BulletType.heading]: 'font-size: 18px; font-weight: 400;',
  [BulletType.bullet]: 'font-size: 16px; font-weight: 400; line-height: 19px;',
};

export const marginType = {
  [BulletType.title]: 'margin: 0px 0px 5px 0px;',
  [BulletType.heading]: 'margin: 5px 0px 5px 5px;',
  [BulletType.bullet]: 'margin: 0px 0px 0px 45px;',
};
