import { Button, ButtonVariant } from '../../components/common/Button'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import dog from '../../assets/dog.svg'

export function Home() {
  return (
    <div className={styles.container}>
      <img src={dog} alt="Dog" />
      <Link to="/pets">
        <Button variant={ButtonVariant.Default}>Quero adotar</Button>
      </Link>
      <Link to="/admin">
        <Button variant={ButtonVariant.Outlined}>Tenho um abrigo</Button>
      </Link>
    </div>
  )
}
