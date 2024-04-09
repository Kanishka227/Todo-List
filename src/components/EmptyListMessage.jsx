import styles from './EmptyListMessage.module.css'

function EmptyListMessage(){
  return(
    <h3 className={styles.message}>Your list is empty</h3>
  )
}

export default EmptyListMessage