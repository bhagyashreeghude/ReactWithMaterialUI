import "./App.css";
import { Button, IconButton ,Stack} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AlarmIcon from "@mui/icons-material/Alarm"
function App() {
  return (
    <>
      <h1>Hello its MUI with React</h1>
      {/* simple button */}
      <div>
        <Button variant="contained" color="primary" size="small">
          click Me 1
        </Button>
        <Button variant="outlined" color="primary" size="small">
          click Me 1
        </Button>
        <br></br>
        <br></br>

        <Button variant="outlined" color="success" size="medium">
          click Me 1
        </Button>
        <Button variant="contained" color="success" size="medium">
          click Me 1
        </Button>
        <br></br>
        <br></br>
        <Button variant="outlined" color="error" size="large">
          error
        </Button>
        <Button variant="contained" color="error" size="large">
          error
        </Button>
        <br></br>
        <br></br>
        {/* borderd button */}
        <Button color="secondary" variant="outlined" size="small">
          click me 2{" "}
        </Button>
        <Button variant="contained" color="secondary">
          click Me 2
        </Button>
        <br></br>
        <br></br>
        {/* text button */}
        <Button variant="text"> text button</Button>
        <br></br>
        <br></br>
        {/* contained Button */}
        <Button variant="contained">contained Button</Button>
        <br></br>
        <br></br>
        {/* outlined button */}
        <Button variant="outlined">outlined button</Button>
        <br></br>
        <br></br>
        {/* link button */}
        <Button href="#text-buttons">Link</Button>
        <br></br>
        <br></br>
        {/* button icons */}
        <Button variant="outlined" startIcon={<SendIcon />}>
          send
        </Button>
        <Button variant="contained" endIcon={<DeleteIcon />}>
          Delete
        </Button>
      </div>
      {/* button icons */}

      
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
          <IconButton aria-label="alarm">
            <AlarmIcon />
          </IconButton>

        </Stack>
      
    </>
  );
}

export default App;
