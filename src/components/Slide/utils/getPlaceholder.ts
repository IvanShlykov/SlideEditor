import { Bullet, BulletType } from '../components/Bullet/Bullet.types';

export const getPlaceholder = (bullet: Bullet) => {
  const { bulletType } = bullet;
  if (bullet.isFocused) return '';
  if (bulletType === BulletType.heading) return 'Name your bullet list…';
  if (bulletType === BulletType.title) return 'Add a title for your slide…';

  return 'Start your bullet list here...';
};
