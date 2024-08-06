import LoadingButton from "@mui/lab/LoadingButton";
import { Stack } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save"
const Buttons = () => {
  return (
    <Stack direction="row" spacing={5}>
      <LoadingButton loading variant="outlined">
        submit
      </LoadingButton>
      <LoadingButton loading loadingIndicator="loading..123" variant="outlined">
        fetch data
      </LoadingButton>
      <LoadingButton 
      loading variant="outlined"
      loadingPosition="start"
      startIcon={<SaveIcon/>}>
        save
      </LoadingButton>

      <LoadingButton 
      loading variant="outlined"
      loadingPosition=""
      startIcon={<SaveIcon/>}>
        save
      </LoadingButton>
      <LoadingButton 
      loading variant="outlined"
      loadingPosition="end"
      startIcon={<SaveIcon/>}>
        save
      </LoadingButton>
      
    </Stack>
  );
};

export default Buttons;
