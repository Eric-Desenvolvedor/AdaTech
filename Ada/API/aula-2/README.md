# configuração typescript

1. inicializar um projeto node.js
    `npm init`

2. instalar typescript
    `npm install typescript -D` (só vai ser usado o "D" se você quiser que o typescript seja usado apenas na área de desenvolvimento)

3. utilizar o typescript para compilar para o js
    `npx tsc index.ts`
    3.1. se quiser que ele atualize sem ter que ficar colocando todo tempo o comando, então você pode adicionar o `--watch`

4. adicionar configurações no TS para não precisar fazer o ponto 3.1
    `npx tsc --init`