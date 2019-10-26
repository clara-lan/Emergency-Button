import json
import requests
import keyboard

while True:
    ENDPOINT = "https://0yatkamo74.execute-api.us-east-2.amazonaws.com/magictrigger/query"
    device_id = 1001

    if keyboard.read_key() == "enter":
        req_url = ENDPOINT + "?deviceID={}".format(device_id)
        r = requests.get(req_url)
        print(r.text)

    else:
        break