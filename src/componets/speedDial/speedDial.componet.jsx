import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { Link } from "react-router-dom";
const SpeedDialComponet = ({ actions }) => {
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={
              <Link to={`/${action.route}`} style={{ textDecoration: "none" }}>
                {action.icon}
              </Link>
            }
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default SpeedDialComponet;
// <Link to={action.page}> </Link>;
