import React from 'react'
import { Card as CardAnt } from 'antd'

import styles from './Card.module.scss'
import { CardProps } from './types'

const Card: React.FunctionComponent<CardProps> = ({ children }) => {
  return <CardAnt className={styles.card}>{children}</CardAnt>
}
export default Card
