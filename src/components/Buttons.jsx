import LoadingButton from "@mui/lab/LoadingButton";
import { Button, ButtonGroup, Stack } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
const Buttons = () => {
  return (
    <>
      <Stack direction="row" spacing={5}>
        <LoadingButton loading variant="outlined">
          submit
        </LoadingButton>
        <LoadingButton
          loading
          loadingIndicator="loading..123"
          variant="outlined"
        >
          fetch data
        </LoadingButton>
        <LoadingButton
          loading
          variant="outlined"
          loadingPosition="start"
          startIcon={<SaveIcon />}
        >
          save
        </LoadingButton>

        <LoadingButton
          loading
          variant="outlined"
          loadingPosition=""
          startIcon={<SaveIcon />}
        >
          save
        </LoadingButton>
        <LoadingButton
          loading
          variant="outlined"
          loadingPosition="end"
          startIcon={<SaveIcon />}
        >
          save
        </LoadingButton>
      </Stack>
      <br></br>
      <br></br>
      <ButtonGroup orientation="vertical"  color="success">
        <Button>one </Button>
        <Button>two </Button>
        <Button>three </Button>
      </ButtonGroup>
      <br></br>
      <br></br>
      <ButtonGroup orientation="horizontal"  color="success">
        <Button>one </Button>
        <Button>two </Button>
        <Button>three </Button>
      </ButtonGroup>
    </>
  );
};

export default Buttons;
