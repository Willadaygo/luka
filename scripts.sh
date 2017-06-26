#!/bin/sh

source ./config.sh

pushData () {
  FILE=`date +"%s"`.sql
  ssh ${sshUser}@${ip} "mysqldump -u ${dbUser} -p${dbPass} ${dbName}" > ./data/remote/${FILE}
  mysqldump -u root ${dbLocalName} > ./data/local/${FILE}
  ssh ${sshUser}@${ip} "mysql -u ${dbUser} -p${dbPass} ${dbName}" < ./data/local/${FILE}
}

pullData () {
  FILE=`date +"%s"`.sql
  mysqldump -u root  ${dbLocalName} > ./data/local/${FILE}
  ssh ${sshUser}@${ip} "mysqldump -u ${dbUser} -p${dbPass} ${dbName}" > ./data/remote/${FILE}
  mysql -u root ${dbLocalName} < ./data/remote/${FILE}
}

pushAssets () {
  rsync -azP ${localUploads}/ ${sshUser}@${ip}:${remoteUploads}
}

pullAssets () {
  rsync -azP ${sshUser}@${ip}:${remoteUploads}/ ${localUploads}
}

$@