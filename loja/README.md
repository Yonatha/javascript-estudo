
# Clientes
### Listar clientes
curl --location 'http://localhost:3000/cliente' \
--header 'Authorization: Bearer {{token}}'

### Login
curl --location 'http://localhost:3000/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "fulano@gmail.com",
    "senha": "123456"
  }'