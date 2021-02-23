import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/jonnebr.png' alt='João Marcos Gonçalves' />
      <div>
        <strong>João Marcos Gonçalves</strong>

        <p>
          <img src='icons/level.svg' alt='Level' />
          Level 1
        </p>
      </div>
    </div>
  );
}
