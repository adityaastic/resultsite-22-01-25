
#!/bin/bash
# validate_service.sh

# Check if the live site is up and accessible
curl --silent --fail https://bgmgameresult.in/ || exit 1
