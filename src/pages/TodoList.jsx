import React, { useEffect } from 'react'
import _debounce from 'lodash/debounce'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import TodoItem from '../components/todo/TodoItem'
import TodoMoveList from '../components/todo/TodoMoveList'
import { useBoundStore } from '../store'

export default function TodoList() {
  const store = useBoundStore()

  useEffect(() => {
    const timer = setInterval(() => {
      if (!store?.isTouch) {
        store?.autoRemoveSlots()
      }
    }, 1200)

    return () => clearInterval(timer)
  }, [store?.isTouch])

  return (
    <Container maxWidth="md">
      <Grid container py="10vh" spacing="30px">
        <Grid item xs={12} md={4}>
          <Box component={Grid} container spacing="10px">
            {store?.todos?.map((item, idx) => {
              return <TodoItem key={idx} item={item} />
            })}
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <TodoMoveList />
        </Grid>
      </Grid>
    </Container>
  )
}
