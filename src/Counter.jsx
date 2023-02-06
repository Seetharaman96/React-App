import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  // ---------------------------------------------------
  // useEffect(() => {
  //   console.log("Like value is updated: ", like);
  // }, [like, dislike]);
  // ---------------------------------------------------
  return (
    <div>
      <IconButton
        onClick={() => {
          setLike(like + 1);
        }}
        color="primary"
        aria-label="Like movie"
      >
        <Badge badgeContent={like} color="primary">
          <ThumbUpIcon>👍</ThumbUpIcon>
        </Badge>
      </IconButton>
      <IconButton
        onClick={() => {
          setDislike(dislike + 1);
        }}
        color="error"
        aria-label="Dislike movie"
      >
        <Badge badgeContent={dislike} color="error">
          <ThumbDownIcon>👎</ThumbDownIcon>
        </Badge>
      </IconButton>
    </div>
  );
}
