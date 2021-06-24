# Dashboard de Clientes!
Este é um desafio que faz parte do processo seletivo para desenvolvedores de nível Júnior e Pleno FullStack da Predialize. O projeto já possui uma estrutura básica inicial para que você não perca tempo com coisas que não estamos interessados em avaliar.

Vale dizer também que o propósito deste projeto serve apenas para objetivos de avaliação em relação à sua experiência, capacidade em resolver problemas e conhecimentos da stack utilizada.

Para saber mais sobre nós, acesse: https://predialize.com.br

Projeto
O projeto é um monolito divido em dois módulos: Api e App. A Api foi construída em NodeJs e no App utilizamos Angular. Ambas tecnologias utilizadas na Predialize.

Na raíz da Api, está mantido o arquivo clients.mock.js. Este arquivo será a base para realizar consultas e retornar os resultados. Será o nosso banco de dados!

A estrutura base existente do projeto não deve ser alterada, mas é claro que você pode (e deve) adicionar alguns arquivos e métodos para melhorar seu design pattern, organização e aplicar boas práticas, tanto na Api, quanto no App;

Tanto Api, quanto App, já possuem todas as dependências necessárias para você realizar o teste. Por isto, não será permitido instalar nenhum pacote extra. Ok?

Este projeto não utiliza Docker, mas se você quiser adicionar, será muito bem visto. Se o fizer, pedimos que crie o stack para o Docker Compose também.

Entrega
Este repositório deve ser clonado ou baixado e, após finalizar o teste, colocado em um repositório público seu. Não importa onde (github, gitlab etc), desde que esteja público e o link seja enviado no corpo do email de resposta ao nosso contato.

Problema
Queremos construir um dashboard de clientes e empreendimentos para termos uma visão estratégica do nosso portfólio. Mas, para alcançarmos nosso objetivo, precisamos resolver alguns BUGs e evoluir um pouco mais nossa Api e App.

Topa nos ajudar?

Jogo dos 7 erros
Nosso dashboard não está funcionando. E agora? =/

Para começarmos a melhorá-lo, precisamos primeiro fazê-lo funcionar. Certo? Existem 7 erros em nosso App e cabe a você descobrir o que está acontecendo.

PS: Anote os erros e mostre a lista no corpo do email de resposta ao nosso contato.

Mão à obra!

Novas Features
Se vocês chegou até aqui, parabéns! Agora, vamos melhorar nosso projeto? Abaixo segue o escopo das novas funcionalidades desejadas. Não precisa fazer mais do que está sendo pedido, mas é claro, trabalhe seu layout e código para ficarem minimamente aceitáveis.

Ao entrar na página de Clientes, o usuário deve visualizar todos os resultados exibidos em cards.

Requisitar informações do endpoint get("/");
Retornar da Api somente: _id, imagem, nome, quantidade de empreendimentos e quantidade de imóveis de cada cliente.
Exibir os resultados obtidos;
Na página de Clientes, o usuário deve poder pesquisar por nome.

Input para pesquisa.
Requisitar o endpoint get("/name/:name") ao digitar a pesquisa. Nenhum botão "pesquisar" deve ser criado;
Retornar da Api somente: _id, imagem, nome, quantidade de empreendimentos e quantidade de imóveis de cada cliente.
A pesquisa deve retornar os resultados mesmo que não se tenha um match completo do termo pesquisado.
Exibir somente os resultados retornados em cards;
Na página de Clientes, o usuário deverá poder visualizar alguns totalizadores:

Requisitar informações do endpoint get("/totals");
Retornar somente os totais de: Clientes, Empreendimentos e Imóveis;
Exibir os resultados dos totais obtidos;
Na página de Clientes, o usuário deverá poder ver seus detalhes de forma individual:

A página de detalhamento do App deve possuir uma rota (/client/:_id) e um componente próprio.
Requisitar informações do endpoint get("/:_id");
Retornar somente: _id, imagem e nome;
Exibir as informações obtidas;
Na página de Detalhes do Cliente, o usuário deverá poder visualizar alguns totalizadores:

Requisitar informações do endpoint get("/:client_id/totals");
Retornar somente os totais de: Empreendimentos e Imóveis;
Exibir os resultados dos totais obtidos;
Na página de Detalhes do Cliente, o usuário deverá poder ver todos os empreendimentos referentes a ele:

Requisitar informações do endpoint get("/:client_id/enterprise");
Retornar somente: _id, imagem e nome;
Exibir as informações obtidas.
Na página de Detalhes do Cliente, o usuário deve poder pesquisar pelo nome do empreendimento:

Input para pesquisa.
Requisitar o endpoint get("/:client_id/enterprise/name/:name") ao digitar a pesquisa. Nenhum botão "pesquisar" deve ser criado;
Retornar da Api os empreendimentos com somente: _id, imagem, nome e quantidade de imóveis de cada cliente.
A pesquisa deve retornar os resultados mesmo que não se tenha um "match" completo do termo pesquisado.
Exibir somente os resultados retornados;
Ao entrar na página de Empreendimentos, o usuário deve visualizar todos os resultados exibidos em cards.

Requisitar informações do endpoint get("/enterprise");
Retornar da Api somente: _id, imagem, nome, nome do cliente (empresa) e quantidade de imóveis de cada empreendimento.
Exibir os resultados obtidos em cards;
Na página de Empreendimentos, o usuário deve poder pesquisar por nome.

Input para pesquisa.
Requisitar o endpoint get("/enterprise/name/:name") ao digitar a pesquisa. Nenhum botão "pesquisar" deve ser criado;
Retornar da Api somente: _id, imagem, nome, nome do cliente (empresa) e quantidade de imóveis de cada cliente.
A pesquisa deve retornar os resultados mesmo que não se tenha um "match" completo do termo pesquisado;
Exibir somente os resultados retornados;
