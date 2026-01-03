---
slug: trabalhando-com-codigo-legado
title: Trabalhando efetivamente com código legado
authors: [mario]
tags: [programacao]
---

![Código ilegível](https://unsplash.com/photos/cvBBO4PzWPg/download?force=true&w=1920)

Certamente você já trabalhou ou trabalhará com código legado durante sua carreira, pois nem sempre estaremos em projetos novos com tecnologias novas, certo? Errado.

<!-- truncate -->

Um código legado não é somente o código antigo que é mantido porque funciona, segundo Michael Feathers, autor do livro [Work Effectively with Legacy Code](https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052), a idade do código não é o mais importante nesse caso. O principal sintoma de um código legado é a ausência de testes. Essa é uma perspectiva interessante, pois podemos estar hoje mesmo escrevendo código legado no nosso super novo projeto.

Essa diferença é fundamental, pois os testes nos dão a confiança de modificar, corrigir e melhorar um sistema existente, uma vez que eles garantem que não incluímos bugs ou fazemos modificações erradas/inesperadas no sistema. Logo, trabalhar efetivamente com código legado é garantir que nossas modificações não mudem o comportamento do sistema que já funciona há muito tempo. Mas como conseguimos garantir que fazer uma modificação de cada vez mantendo o comportamento do sistema? A forma de garantir que após uma modificação o sistema continua a se comportar da forma esperada é escrever testes para o comportamento. Ou seja, os testes garantem o comportamento atual do sistema, ou da parte do sistema que queremos realizar modificações. 

A estratégia apresentada por Michael Feathers no artigo, se resume da seguinte forma:

- Identificar os pontos de alteração
- Encontrar o ponto de inflexão 
- Cobrir o ponto de inflexão
- Realizar alterações
- Refatorar

## Identificando os pontos de alteração

Em um código legado, dependendo da qualidade do mesmo, uma alteração pode requerer mudanças em várias áreas do sistema. No primeiro passo, devemos identificar todas as modificações necessárias, pois elas nos ajudarão a encontrar o ponto de inflexão.

## Encontrando o ponto de inflexão

O ponto de inflexão é a interface para um conjunto de classes. Ou seja, o ponto onde o código a ser alterado interage com o resto do sistema. Qualquer modificação executada no conjunto de classes terá impacto no ponto de inflexão ou consequentemente no sistema.

Imagine que em um sistema que está organizado em camadas, no qual uma classe de serviço usa um repositório, se tivermos que realizar uma alteração em uma entidade e no repositório, o ponto de inflexão seria o service, pois qualquer alteração nelas teria impacto diretamente no service ou no resto do sistema.

Dependendo da complexidade do sistema, é provável que exista mais de um ponto de inflexão. A correta identificação desses pontos é muito importante, pois é preciso garantir que as alterações identificadas não “vazem” para o resto do sistema sem passar pelo ponto de inflexão.

## Cobrindo o ponto de inflexão

Após identificar o(s) ponto(s) de inflexão, é necessário cobri-lo(s) com testes. Geralmente grande parte do esforço é concentrada aqui. Em sistemas legados e com design ruim, o código tende a ser muito acoplado, e colocá-lo sob teste geralmente envolve resolver problemas de dependências que podem ser internas ou externas. 

A coisa mais simples que você pode fazer é tentar instanciar uma classe (ponto de inflexão). Em um bom design, as dependências dessa classe são passadas pelo construtor, se forem dependências obrigatórias, ou via setters se forem opcionais. Essas são as dependências externas. Essas dependências podem ser tratadas com mocks ou até mesmo NullObjects. O importante é conseguir testar o ponto de inflexão, logo fazer mocks das dependências não é preocupante, pois não são o foco dos testes.

As dependências internas são mais difíceis de lidar. Aqui entram objetos criados internamente, variáveis estáticas ou globais, ou até mesmo singletons que são invocados dentro dos métodos, o que dificulta muito os testes (motivo pelo qual singleton pode ser considerado um antipattern). Para lidar com dependências internas, muitas vezes é necessário estender a classe que queremos testar e sobrescrever comportamentos e dependências internas.

Após resolver as dependências é hora de escrever testes que cubram o ponto de inflexão. Como mencionado anteriormente, o código atrás dessa interface não pode afetar o sistema sem passar por esse ponto. Dessa forma, começamos a escrever testes que cobrem essa área do código.

    Lembre-se que o comportamento correto do sistema é o que ele já faz.

## Realizando alterações

O ideal é fazer alterações incrementais e executar constantemente os testes. Tente escrever testes antes de fazer suas alterações e procure cobrir alguns corner cases.

## Refatorando
Com o código coberto por testes, temos agora a oportunidade de melhorar o design. Se o código for mal estruturado, geralmente existem classes grandes com métodos grandes e alguns padrões de refactoring podem ser usados como extract method e extract class. Uma boa referência desses padrões é o livro Refactoring de Marting Fowler.

À medida que refatoramos, devemos adicionar mais testes. Lembre-se também que código de teste é tão importante quanto o código de produção. Testes devem ser fáceis de manter, pois caso não sejam, provavelmente serão negligenciados. 

Com o passar do tempo, as partes principais do código legado começam a ser cobertas por testes e acabamos com pequenas ilhas de testes que serão muito úteis nas próximas intervenções. Além disso, testes também são uma forma de documentação e podem ser a única fonte no futuro.

A estratégia apresentada aqui foi baseada apenas no artigo Working Effectively With Legacy Code e certamente há muito mais para ser visto sobre isso. Se quiser se aprofundar no assunto, recomendo o episódio do infoq podcast com Michael Feathers ou o livro onde esses temas são detalhados.

## Referências

 - [Working effectively with legacy code](http://debug.to/pdf/Michael%20Feathers%20-%20Working%20Effectively%20With%20Legacy%20Code.pdf)
 - [InfoQ Podcast](https://www.infoq.com/podcasts/working-effectively-legacy-code/)