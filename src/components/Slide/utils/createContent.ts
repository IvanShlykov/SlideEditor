import { Bullet, BulletType } from '../components/Bullet/Bullet.types';

export const createContent = (bullets: Bullet[]) => {
  const contentBlocks: object[] = [];
  let contentText: string[] = [];

  bullets.forEach((bullet) => {
    if (bullet.bulletType === BulletType.bullet) {
      contentText.push(bullet.text);
    }

    if (bullet.bulletType === BulletType.heading) {
      contentText = [];
      contentBlocks.push({ heading: bullet.text, bullets: contentText });
    }
  });

  return {
    title: bullets.find((bullet) => bullet.bulletType === BulletType.title)
      ?.text,
    content_blocks: contentBlocks,
  };
};
