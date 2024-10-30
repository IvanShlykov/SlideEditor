import * as Styles from './Buttons.styles';

type ButtonsProps = {
  setBulletToHeading: () => void;
  setHeadingToBullet: () => void;
};

export default function Buttons({
  setBulletToHeading,
  setHeadingToBullet,
}: ButtonsProps) {
  return (
    <Styles.ButtonWrapper>
      <Styles.Button onClick={setBulletToHeading}>Heading</Styles.Button>
      <Styles.Button onClick={setHeadingToBullet}>Bullets</Styles.Button>
    </Styles.ButtonWrapper>
  );
}
