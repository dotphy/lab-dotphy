import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import loader from "../../Assets/loader.png";
import "./Loader.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function LinearDeterminate() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="loader">
      <img src={loader} />
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
}
