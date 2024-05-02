import React, { useCallback } from 'react'
import _debounce from 'lodash/debounce'

import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useBoundStore } from '../../store'

export default function TodoItem({ item, type }) {
  const store = useBoundStore()

  const debounceFn = useCallback(
    _debounce(() => {
      store?.setTouch(false)
    }, 5000),
    []
  )

  const handleAddSlots = () => {
    store?.setTouch(true)
    type === 'move' ? store?.removeSlots(item) : store?.addSlots(item)
    debounceFn()
  }

  return (
    <Grid item xs={12}>
      <Button
        onClick={handleAddSlots}
        variant="outlined"
        fullWidth
        sx={{
          py: '5px',
          textTransform: 'none',
          color: '#000',
          fontSize: '20px',
          border: '1px solid #CCC',
        }}
      >
        {item?.name}
      </Button>
    </Grid>
  )
}
