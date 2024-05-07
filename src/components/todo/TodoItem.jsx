import React from "react"

import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import { useBoundStore } from "../../store"

export default function TodoItem({ item, type }) {
  const store = useBoundStore()

  const handleAddSlots = () => {
    if (type === "move") {
      store?.removeSlots(item)
    } else {
      store?.addSlots(item)

      setTimeout(() => {
        store?.removeSlots(item)
      }, 5000)
    }
  }

  return (
    <Grid item xs={12}>
      <Button
        onClick={handleAddSlots}
        variant="outlined"
        fullWidth
        sx={{
          py: "5px",
          textTransform: "none",
          color: "#000",
          fontSize: "20px",
          border: "1px solid #CCC",
        }}
      >
        {item?.name}
      </Button>
    </Grid>
  )
}
