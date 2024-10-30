import { useEffect, useRef } from 'react';
import { BulletItemProps, BulletType } from './Bullet.types';
import { getPlaceholder } from '../../utils/getPlaceholder';
import * as Styles from './Bullet.styles';

export default function BulletItem({
  bullet,
  handleKeyDown,
  updateTextbullet,
  focusedBullet,
  onPaste,
}: BulletItemProps) {
  const { text, isFocused, bulletType } = bullet;

  const ref = useRef<HTMLInputElement>(null);

  const placeholder = getPlaceholder(bullet);

  useEffect(() => {
    if (ref.current && isFocused) {
      ref.current.focus();
    }
  }, [isFocused, bullet.bulletType]);

  return (
    <Styles.BulletWrapper>
      <Styles.Bullet
        ref={ref}
        type="text"
        value={text}
        placeholder={placeholder}
        bulletType={bulletType}
        onChange={(e) => updateTextbullet(e, bullet.id)}
        onKeyDown={(e) => handleKeyDown(e, bullet)}
        onFocus={() => focusedBullet(bullet.id)}
        onPaste={onPaste}
      />
      {bullet.bulletType === BulletType.bullet && <Styles.Dot />}
    </Styles.BulletWrapper>
  );
}
