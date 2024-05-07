import React from "react"

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

import TodoItem from "../components/todo/TodoItem"
import TodoMoveList from "../components/todo/TodoMoveList"
import { useBoundStore } from "../store"

export default function TodoList() {
  const store = useBoundStore()

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
