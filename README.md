# Solana Key Generator API

Heroku service to generate solana public / private key pairs
<blockquote>Please note that <b>NO</b> private key is kept on the server. On creation it's <b>DELETED</b>. You can check the code to verify the same. </blockquote>

### Usage
* <i><b>staging url:</b></i> <i>https://sol-key-gen-staging.herokuapp.com</i>
* <i><b>production url:</b></i> <i>https://sol-key-gen.herokuapp.com</i>

- <i><b>Ping</b></i>

```
curl -XGET https://base_url/ping
```

- <i><b>Generate Key Pair</b></i>

```
curl -XGET https://base_url/generatePair
```
