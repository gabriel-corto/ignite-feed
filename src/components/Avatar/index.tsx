
import styles from "./style.module.css"

interface AvatarProps {
  src: string 
  hasBorder?: boolean
}
export function Avatar({ hasBorder= true, src }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.hasBorder : styles.avatar} 
      src={src} 
    />
  )
}
