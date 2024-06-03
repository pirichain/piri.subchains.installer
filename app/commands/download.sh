#!/bin/bash

url="$1"
date=$(date +"%Y-%m-%d_%H-%M-%S")

if [ -f ~/pirichain/piri-chain ]; then
    echo "Old file will be archived.."
    gzip -c ~/pirichain/piri-chain > ~/pirichain/piri-chain_$date.gz
    rm ~/pirichain/piri-chain
fi

wget -P ~/pirichain $url
