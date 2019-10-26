from botocore.vendored import requests

def send(msg):
    res = requests.get(
        'https://api.transmitsms.com/send-sms.json',
    	auth=('YOUR_API_KEY','YOUR_API_SECRET'),
    	params={'message': msg, 'to':'PHONE_NUMBER'}
    )
    
def test_conn():
    res = requests.get(
        'https://api.transmitsms.com/',
    	auth=('YOUR_API_KEY','YOUR_API_SECRET')
    )