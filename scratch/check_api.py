import urllib.request, json

url = "https://yfnwzfznjrwqxujssesx.supabase.co/rest/v1/"
req = urllib.request.Request(url)
req.add_header('apikey', 'sb_publishable_zAV7rgojrLV0GYeGUgqIWw_aKVsXwcY')
req.add_header('Authorization', 'Bearer sb_publishable_zAV7rgojrLV0GYeGUgqIWw_aKVsXwcY')

try:
    response = urllib.request.urlopen(req)
    data = json.loads(response.read())
    print("Paths/Endpoints:")
    for path in sorted(data.get("paths", {}).keys()):
        print(f"  {path}")
    print("\nDefinitions (Tables):")
    for definition in sorted(data.get("definitions", {}).keys()):
        print(f"  {definition}")
except Exception as e:
    print("Error:", e)
