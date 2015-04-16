#!/usr/bin/env bash
NOM=$1

if [ $NOM ]; then
    #Créer la clé privée - À GARDER CHEZ SOI!
	openssl genrsa -aes256 -out $NOM.privatekey.pem

	#Créer une clé privée - À GARDER CHEZ SOI!
    openssl rsa -in $NOM.privatekey.pem -outform PEM -out $NOM.private.pem

	#Créer le certificat request
    openssl req -subj '/C=CA/ST=QC/L=Montreal/CN=www.uqam.ca' \
    -new -key $NOM.privatekey.pem -out $NOM.csr

    #Créer le certificat publique -- à donner pour signer les échanges
    openssl x509 -req -days 3650 -in $NOM.csr -signkey $NOM.privatekey.pem -out $NOM.certificate

    #Créer une clé publique - à donner pour encrypter les données
    openssl rsa -in $NOM.privatekey.pem -outform PEM -pubout -out $NOM.public.pem

    exit 0
else
	echo "Le nom est requis!"
	exit 1
fi