```bash
npm install
```

dump tx VM trace
```bash
node --no-experimental-fetch trace.js > vm_trace.json
```

call stacks
```bash
node --no-experimental-fetch call_stacks.js  
from: 0x23dfb853dc917ab10424a7957abb90ae8d5c194a
to: 0x5259639653f76f3385ba100ddb6290724891a95b
method: 0xe7ef2fa6

from: 0x23dfb853dc917ab10424a7957abb90ae8d5c194a
to: 0x0000000000004946c0e9f43f4dee607b0ef1fa1c
method: 0x70a08231

from: 0x23dfb853dc917ab10424a7957abb90ae8d5c194a
to: 0x0000000000004946c0e9f43f4dee607b0ef1fa1c
method: 0xd8ccd0f3
```


check function signature
```bash
npx abi2signature < 0x0000000000004946c0e9F43F4Dee607b0eF1fA1c.json
```

