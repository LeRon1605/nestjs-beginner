import { DataSource } from "typeorm";
import { connectionConfig } from "./connection-config";

const mySql = new DataSource(connectionConfig);

export default mySql;