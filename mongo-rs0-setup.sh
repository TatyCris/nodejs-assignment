#!/bin/bash
echo "MongoDB Replica Set setup"
echo "========================="

echo "Setting up 3 Replica Set..."

RS="rs0"
mongodb0="mongo0"
mongodb1="mongo1"
mongodb2="mongo2"
port="27017"

mongodb0=`getent hosts ${mongodb0} | awk '{ print $1 }'`
mongodb1=`getent hosts ${mongodb1} | awk '{ print $1 }'`
mongodb2=`getent hosts ${mongodb2} | awk '{ print $1 }'`

echo "Waiting for startup.."
until mongo --host ${mongodb0}:${port} --eval 'quit(db.runCommand({ ping: 1 }).ok ? 0 : 2)' &>/dev/null; do
  printf '.'
  sleep 1
done

echo "Started.."

echo ./mongo-rs0-setup.sh time now: `date +"%T" `
mongo --host ${mongodb0}:${port} <<EOF
   const config = {
        "_id": "${RS}",
        "protocolVersion": 1,
        "members": [
            {
                "_id": 0,
                "host": "${mongodb0}:${port}"
            },
            {
                "_id": 1,
                "host": "${mongodb1}:${port}"
            },
            {
                "_id": 2,
                "host": "${mongodb2}:${port}"
            }
        ]
    };
    rs.initiate(config, { force: true });
    rs.reconfig(config, { force: true });
EOF