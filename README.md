# Frontend-soccer
Este projeto consiste em desenvolver uma landing page para uma pizzaria.

## Branches
 Main - Nossa branch de produção. Geralmente não deve ser tocada, apenas no caso de deploy;

 Develop - Nossa branch de desenvolvimento, os merges das features devem ser feitos aqui
 Obs: Para fazer merge é necessário antes abrir um Pull Request no GitHub e marcar algum reviewer para aprovar o merge.

 Feature - Nossa branch de novas funcionalidades. Quando dermos clone ou pull da develop deveremos subir os códigos no github através da branch feature que o desenvolvedor criou especificamente para essa funcionalidade.

## Baixar o Repositório na Máquina Local
Dê o comando "git clone https://github.com/usuario/repositorio.git" e todo o repositório estará em sua máquina local.

## Criação de Feature
No terminal dê o comando "git branch" para verificar qual a sua branch atual.

Dê o comando "git checkout -b nome-da-branch" para criar sua branch feature.

Dê o comando "git branch" novamente para verificar em qual branch você está trabalhando, se estiver na sua nova branch dê o comando "git push origin nome-da-branch" para atualizar no repositório.

## Atualizar Feature
Depois de modificar os arquivos, dê o comando "git add *" para adicionar todos os arquivos criados ou modificados no próximo commit ou "git add nome-do-arquivo" para adicionar o arquivo criado ou modificado no próximo commit. 

Em seguida dê 'git commit -m "mensagem descrevendo suas modificacoes"'.

Para não dar conflitos no merge, ou seja, para não sobrescrever dados na branch develop (comum a todos os desenvolvedores) dê o comando "git pull origin develop", ele irá atualizar a branch local com todas as ultimas alterações da branch principal. Se houver conflitos, você deverá resolver manualmente e depois continuar.

A fim de manter um histórico linear e claro de commits vamos utilizar a técnica rebase + squash, ou seja, vamos imaginar que você realizou 20 commits no seu repositório local e agora quer dar merge na develop. O problema surge quando vários desenvolvedores estão fazendo o mesmo, ou seja, fica muito difícil visualizar quais modificações são de quais features, pois existem dezenas de commits embaralhados. Em resumo o histórico de commits fica manchado. A solução surge quando damos "git rebase -i origin/develop". Esse comando abrirá um editor de texto com uma lista de commits que devem ser reorganizados, todos listados como pick (significa que serão mantidos como commits individuais). Devemos mudar a palavra pick antes de cada commit para squash em todas as linhas que queremos agrupar com a anterior. Ou seja, vamos pegar um commit pick e agrupá-lo com o commit anterior. Perceba que o primeiro pick não deve ser modficiado.

Para subir seu commit agrupado no github dê o comando "git push origin nome-da-branch --force".

## Merge na Develop
Após atualizar sua branch feature no repositório remoto (GitHub), você deve abrir um Pull Request no GitHub para dar Merge na branch Develop e marcar algum desenvolvedor para revisar suas alterações, após a verificação, se sinta livre para dar Merge na Develop clicando no botão.

## GitHub Flow
As etapas de criação de branch, download do repositório, criação de nova branch, atualização de branch e Merge na Develop podem todas ser feitas seguindo apenas o Git Hub Flow, apertando botões em vez de comandos.

Referência: https://youtu.be/GgjIvUrOpmg?si=5h92XRd3Sgw5c6Ua&t=174 (A partir de 2:54)
