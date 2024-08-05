
import './App.css'
import {Button} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import DeleteIcon from "@mui/icons-material/Delete"
function App() {


  return (
    <>
    <h1>Hello its MUI with React</h1>
    {/* simple button */}
    <Button variant="contained" color='primary' size='small' >click Me 1</Button>
    <Button variant="outlined" color='primary'  size='small'>click Me 1</Button>
    <br></br>
    <br></br>

    <Button variant="outlined" color='success' size='medium' >click Me 1</Button>
    <Button variant="contained" color='success'size='medium' >click Me 1</Button>
    <br></br>
    <br></br>
    <Button variant="outlined" color='error'  size='large'>error</Button>
    <Button variant="contained" color='error' size='large'>error</Button>
    <br></br>
    <br></br>
    {/* borderd button */}
    <Button color='secondary' variant="outlined" size='small'>click me 2 </Button>
    <Button variant="contained" color='secondary' >click Me 2</Button>
    <br></br>
    <br></br>
    {/* text button */}
    <Button variant='text'> text button</Button>
    <br></br>
    <br></br>
    {/* contained Button */}
    <Button variant='contained'>contained Button</Button>
    <br></br>
    <br></br>
    {/* outlined button */}
    <Button variant='outlined'>outlined button</Button>
    <br></br>
    <br></br>
    {/* link button */}
    <Button href='#text-buttons'>Link</Button>
    <br></br>
    <br></br>
    {/* button icons */}
    <Button variant='outlined' startIcon={<SendIcon/>}>send</Button>
    <Button variant="contained" endIcon={<DeleteIcon/>}>Delete</Button>
    </>
  )
}

export default App
