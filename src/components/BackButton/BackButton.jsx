import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Item() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Button
        variant="contained"
        onClick={goBack}
        style={{ marginBottom: "20px" }}
      >
        Home
      </Button>
    </>
  );
}
