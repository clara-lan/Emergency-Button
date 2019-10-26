import sys
import logging
import rds_config
import pymysql
import json
from sms import send, test_conn

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
    message = event['params']['querystring']
    res = {}
    
    deviceID = message['deviceID']
    query = "SELECT Firstname, Lastname, addressline1, state, zipcode, DATE_FORMAT(DOB, '%Y'), MCondition FROM UserInfo WHERE deviceID = {};".format(deviceID)

    with conn.cursor() as cur:
        cur.execute(query)
        for row in cur:
            res = row
    conn.commit()
    
    if not res:
        return 'NOTFOUND'
    
    message = '{} {}, address: {} {}, {}. {} years old. Known medical issues: {}. Need help right away. Sent by life button.'.format(res[0], res[1], res[2], res[3], res[4], 2019-int(res[5]), res[6])

    #return message
    #send(message)
    logger.info(message)
    #test_conn()
    return 'SUCCESS'
    
    
create_command = '''CREATE TABLE UserInfo
    (Firstname VARCHAR(20),
    Lastname VARCHAR(20),
    gender VARCHAR(20),
    DOB date,
    phone_num VARCHAR(20),
    deviceID VARCHAR(20),
    addressline1 VARCHAR(50),
    state VARCHAR(20),
    zipcode VARCHAR(10),
    doctorName VARCHAR(30),
    DoctorOrg VARCHAR(40),
    ENumber VARCHAR(20),
    EName VARCHAR(30),
    MCondition VARCHAR(1000),
    PRIMARY KEY (deviceID)
)'''