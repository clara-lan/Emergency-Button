import urllib.request
import urllib.parse

def sendSMS(apikey, numbers, sender, message):
    data =  urllib.parse.urlencode({'apikey': apikey, 'numbers': numbers,
        'message' : message, 'sender': sender})
    data = data.encode('utf-8')
    request = urllib.request.Request("https://api.txtlocal.com/send/?")
    f = urllib.request.urlopen(request, data)
    fr = f.read()
    return(fr)

resp = sendSMS('85lvm+4K0sQ-XPWkKPJxx52LxodcD9YgyM9vIztptk', '6288804862376',
    'Emergence', 'Hello')
print(resp)