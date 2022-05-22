import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { WarningOutlined } from "@material-ui/icons";

export default function Alerts({ err, children }) {
  console.log(err);
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert
        severity="warning"
        variant="filled"
        iconMapping={{
          warning: <WarningOutlined fontSize="inherit" />,
        }}
      >
        {err.data}
      </Alert>
    </Stack>
  );
}
