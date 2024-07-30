import { server } from "./server/Server";
import {} from "http-status-codes";

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
