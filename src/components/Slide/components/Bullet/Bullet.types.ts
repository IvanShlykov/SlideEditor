export interface Bullet {
  id: number;
  text: string;
  isFocused: boolean;
  bulletType: BulletType;
}

export enum BulletType {
  bullet = 'bullet',
  title = 'title',
  heading = 'heading',
}

export interface BulletItemProps {
  bullet: Bullet;
  handleKeyDown: (e: React.KeyboardEvent, bullet: Bullet) => void;
  updateTextbullet: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
  focusedBullet: (id: number) => void;
  onPaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
}

export interface BulletInputProps {
  bulletType: BulletType;
}
