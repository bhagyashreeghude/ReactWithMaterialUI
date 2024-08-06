import { Stack } from "@mui/material"
import IconButton from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"

const Buttons = () => {
  return (
    <div>
        <Stack direction="row" spacing={2}>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </Stack>
    </div>
  )
}

export default Buttons