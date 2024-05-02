import React from 'react'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import TodoItem from './TodoItem'
import { useBoundStore } from '../../store'

export default function TodoMoveList() {
  const store = useBoundStore()

  return (
    <Box component={Grid} container spacing={2}>
      {store?.types?.map((type, idx) => {
        return (
          <Grid key={idx} item xs={12} md={6}>
            <Typography align="center" py="5px" fontSize="20px" bgcolor="#eee">
              {type}
            </Typography>
            <Box
              component={Grid}
              container
              gap="10px"
              p="10px"
              sx={{ border: '1px solid #eee' }}
            >
              <Grid item xs={12}></Grid>
              {store?.slots?.map((item, idx) => {
                if (item?.type === type) {
                  return <TodoItem key={idx} item={item} type="move" />
                }
              })}
            </Box>
          </Grid>
        )
      })}
    </Box>
  )
}
