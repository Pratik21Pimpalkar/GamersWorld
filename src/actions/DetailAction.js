import axios from "axios";
import { gameDetailsURL, gameSnapURL } from "../API/api";

const loadDetail = (id) => async (disptach) => {
  const detailData = await axios.get(gameDetailsURL(id));
  const snapData = await axios.get(gameSnapURL(id));
  disptach({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      snap: snapData.data,
    },
  });
};
export default loadDetail;
