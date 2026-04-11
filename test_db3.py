import urllib.request, json, os

url = "https://yfnwzfznjrwqxujssesx.supabase.co/rest/v1/specialists?limit=1"
req = urllib.request.Request(url)
req.add_header('apikey', 'sb_publishable_zAV7rgojrLV0GYeGUgqIWw_aKVsXwcY')
req.add_header('Authorization', 'Bearer sb_publishable_zAV7rgojrLV0GYeGUgqIWw_aKVsXwcY')

response = urllib.request.urlopen(req)
data = json.loads(response.read())
print(list(data[0].keys()))
