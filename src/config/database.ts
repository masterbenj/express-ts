import oracledb from "oracledb";
import dotenv from "dotenv";

dotenv.config();

const { OCI_USER, OCI_PASS, OCI_DBHOST, OCI_DBPORT, OCI_SERVICENAME } = process.env;

export const ociDbConfig: oracledb.PoolAttributes = {
  user: OCI_USER,
  password: OCI_PASS,
  connectString: `(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=${OCI_DBHOST})(PORT=${OCI_DBPORT}))(CONNECT_DATA=(SERVICE_NAME=${OCI_SERVICENAME})))`,
}