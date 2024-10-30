import { Bullet, BulletType } from '../components/Bullet/Bullet.types';
import { normalizePasteText } from '../utils/normalizedText';

type UseBulletsProps = {
  bullets: Bullet[];
  setBullets: React.Dispatch<React.SetStateAction<Bullet[]>>;
};

export const useBullets = ({ bullets, setBullets }: UseBulletsProps) => {
  const focusedBulletIndex = bullets.findIndex((bullet) => bullet.isFocused);

  const handleKeyDown = (e: React.KeyboardEvent, bullet: Bullet) => {
    const index = bullets.findIndex((b) => b.id === bullet.id);
    const newBullet = {
      id: Date.now(),
      text: '',
      isHeading: false,
      istitle: false,
      isFocused: true,
      bulletType: BulletType.bullet,
    };

    if (e.key === 'Enter') {
      setBullets(addBullet(index, newBullet));
    }

    if (e.key === 'Backspace' && !bullet.text && bullet.bulletType !== BulletType.title) {
      e.preventDefault();
      setBullets(
        bullets
          .map((b, i) => (i === index - 1 ? { ...b, isFocused: true } : b))
          .filter((b) => b.id !== bullet.id)
      );
    }

    if (e.key === 'ArrowDown') {
      if (index === bullets.length - 1) return;
      focusedBullet(bullets[index + 1].id);
    }

    if (e.key === 'ArrowUp') {
      if (!index) return;
      focusedBullet(bullets[index - 1].id);
    }
  };

  const onPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = e.clipboardData.getData('text/plain');
    const [firstLine, ...bulletsLines] = normalizePasteText(pastedText);
    if (!bulletsLines.length) return;
    e.preventDefault();
    const pastedBullets = [];
    for (let i = 0; i < bulletsLines.length; i += 1) {
      const newBullet = {
        id: Date.now() + i,
        text: bulletsLines[i],
        isHeading: false,
        istitle: false,
        isFocused: false,
        bulletType: BulletType.bullet,
      };
      pastedBullets.push(newBullet);
    }
    const focusedBullet = bullets[focusedBulletIndex];
    const focusedBulletNewText = {
      ...focusedBullet,
      text: focusedBullet.text + firstLine,
    };

    setBullets([
      ...bullets.slice(0, focusedBulletIndex),
      focusedBulletNewText,
      ...pastedBullets,
      ...bullets.slice(focusedBulletIndex + 1),
    ]);
  };

  const addBullet = (index: number, newBullet: Bullet): Bullet[] => {
    const newBullets = [
      ...bullets.slice(0, index + 1),
      newBullet,
      ...bullets.slice(index + 1),
    ];
    return newBullets;
  };

  const focusedBullet = (id: number) => {
    setBullets(
      bullets.map((bullet) =>
        bullet.id === id
          ? { ...bullet, isFocused: true }
          : { ...bullet, isFocused: false }
      )
    );
  };

  const updateTextbullet = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    setBullets(
      bullets.map((bullet) =>
        bullet.id === id ? { ...bullet, text: e.target.value } : bullet
      )
    );
  };

  const setBulletToHeading = () => {
    const newBullet = {
      id: Date.now(),
      text: '',
      isHeading: false,
      istitle: false,
      isFocused: false,
      bulletType: BulletType.bullet,
    };

    if (bullets[focusedBulletIndex].bulletType === BulletType.title) return;

    if (
      focusedBulletIndex === bullets.length - 1 ||
      bullets[focusedBulletIndex + 1].bulletType === BulletType.heading
    ) {
      const newBullets = addBullet(focusedBulletIndex, newBullet);
      changeTypeFocusedBullet(BulletType.heading, newBullets);
    } else if (
      bullets[focusedBulletIndex - 1].bulletType === BulletType.heading
    ) {
      const newBullets = addBullet(focusedBulletIndex - 1, newBullet);
      changeTypeFocusedBullet(BulletType.heading, newBullets);
    } else {
      changeTypeFocusedBullet(BulletType.heading, bullets);
    }
  };

  const setHeadingToBullet = () => {
    if (bullets[focusedBulletIndex].bulletType === BulletType.title) return;
    changeTypeFocusedBullet(BulletType.bullet, bullets);
  };

  const changeTypeFocusedBullet = (
    bulletType: BulletType,
    bullets: Bullet[]
  ) => {
    setBullets(
      bullets.map((bullet) =>
        bullet.isFocused ? { ...bullet, bulletType } : bullet
      )
    );
  };

  return {
    handleKeyDown,
    updateTextbullet,
    focusedBullet,
    setBulletToHeading,
    setHeadingToBullet,
    onPaste,
  };
};
