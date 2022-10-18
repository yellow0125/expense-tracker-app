import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Column from './Column'
import ExpensesList from './ExpensesList'

export default function ExpensesOutput({expenses}) {
  return (
    <Column style={styles.column}>
      <ExpensesList expenses={expenses} />
    </Column>

  )
}

const styles = StyleSheet.create({
  column: {
    // backgroundColor: 'lime',
    flex: 1,
  },
})