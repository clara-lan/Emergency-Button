import sys
import json
import logging
import rds_config
import pymysql
#rds settings
rds_host  = "database-2.c1xh5rigzxer.us-east-2.rds.amazonaws.com"
name = rds_config.db_username
password = rds_config.db_password
db_name = rds_config.db_name

logger = logging.getLogger()
logger.setLevel(logging.INFO)

try:
    conn = pymysql.connect(rds_host, user=name, passwd=password, db=db_name, connect_timeout=5)
except pymysql.MySQLError as e:
    logger.error("ERROR: Unexpected error: Could not connect to MySQL instance.")
    logger.error(e)
    sys.exit()

logger.info("SUCCESS: Connection to RDS MySQL instance succeeded")
def lambda_handler(event, context):
    """
    This function fetches content from MySQL RDS instance
    """
    data = event['body']
    for key in data.keys():
        if len(data.get(key)) == 0:
            data[key] = 'NULL'
        elif isinstance(data[key], str):
            data[key] = "'" + data[key] + "'"
    item_count = 0

    with conn.cursor() as cur:
        sql = "INSERT INTO UserInfo VALUES ({}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {})".format(data['Firstname'], data['Lastname'], data['gender'], data['DOB'], data['phone_num'],
                    data['deviceID'], data['addressline1'], data['state'], data['zipcode'], data['doctorName'], data['DoctorOrg'], data['ENumber'], data['EName'], data['MCondition'])
        print(sql)
        cur.execute(sql)
        conn.commit()
    conn.commit()

    return "SUCCESS"