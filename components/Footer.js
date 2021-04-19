import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Created By {' '}
        <a href="https://davidbreuer.co.uk" rel="noindex nofollow">David Breuer</a>
      </footer>
    </>
  )
}
