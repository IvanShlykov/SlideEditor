import { useState } from 'react';
import BulletItem from './components/Bullet/BulletItem';
import { Bullet, BulletType } from './components/Bullet/Bullet.types';
import Buttons from './components/Buttons/Buttons';
import { useBullets } from './hooks/useBullets';
import { createContent } from './utils/createContent';
import * as Styles from './Slide.styles';

export default function Slide() {
  const [bullets, setBullets] = useState<Bullet[]>([
    {
      id: Date.now(),
      text: '',
      isFocused: false,
      bulletType: BulletType.title,
    },
  ]);

  const {
    handleKeyDown,
    updateTextbullet,
    focusedBullet,
    setBulletToHeading,
    setHeadingToBullet,
    onPaste,
  } = useBullets({ bullets, setBullets });

  const onHandleBlur = () => {
    const content = createContent(bullets);
    console.log(content);
  };

  return (
    <Styles.Slide onMouseLeave={onHandleBlur}>
      {bullets.map((bullet) => (
        <BulletItem
          key={bullet.id}
          bullet={bullet}
          handleKeyDown={handleKeyDown}
          updateTextbullet={updateTextbullet}
          focusedBullet={focusedBullet}
          onPaste={onPaste}
        />
      ))}

      <Buttons
        setBulletToHeading={setBulletToHeading}
        setHeadingToBullet={setHeadingToBullet}
      />
    </Styles.Slide>
  );
}
