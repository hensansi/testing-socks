# testing-socks
The "dirty don't look at me" solution is presented here
https://github.com/hensansi/elasticsearch-js/commit/19422dc102e09ff12aee63a97e99adc1fa6797de

# Normal elasticsearch library
`yarn run test`

```
{ 'user-agent':
      [ 'User-Agent',
        'elasticsearch-js/8.0.0-SNAPSHOT.9f33e3c7 (darwin 18.5.0-x64; Node.js v10.14.0)' ],
     'content-type': [ 'Content-Type', 'application/json' ],
     'content-length': [ 'Content-Length', '0' ],
     host: [ 'Host', 'myelasticsearch:80' ] } }
```

# Patched elasticsearch library
`yarn run test-with-undefined-port`

```
{ 'user-agent':
      [ 'User-Agent',
        'elasticsearch-js/8.0.0-SNAPSHOT.9f33e3c7 (darwin 18.5.0-x64; Node.js v10.14.0)' ],
     'content-type': [ 'Content-Type', 'application/json' ],
     'content-length': [ 'Content-Length', '0' ],
     host: [ 'Host', 'myelasticsearch:443' ] } }
```