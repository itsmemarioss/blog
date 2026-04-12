---
slug: uma-breve-introducao-sobre-licencas-open-source
title: Uma breve introdução sobre licenças open source
authors: [mario]
tags: [desenvolvimento-de-software]
---

import CallToAction from '@site/src/components/CallToAction';

![Palavra open em letras de led com cores diferentes](image.jpg)
Photo by <a href="https://unsplash.com/@sonance?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Viktor Forgacs - click ↓↓</a> on <a href="https://unsplash.com/photos/red-and-white-open-neon-signage-LNwIJHUtED4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Recentemente precisei escolher uma licença open source para um novo projeto, o [e-cordel](http://ecordel.com.br/). Para atingir meu objetivo, tive que pesquisar, ler, ver conferências, etc até estar minimamente seguro. Percebi que mesmo usando projetos open source durante toda a minha carreira, não tinha um bom entendimento sobre o tema. Por isso, trago hoje um pouco sobre esse tópico. Antes de mais nada, deixo claro que não sou advogado e este artigo é apenas um compilado do meu atual entendimento sobre o assunto.

Para compreender o que é um projeto open source e porque licenças são importantes, precisamos primeiro saber o que são direitos autorais.

<!-- truncate -->

O criador de uma obra intelectual possui direitos e prerrogativas que lhe garantem exclusivamente o direito de explorar, copiar, vender e colher qualquer benefício proveniente desse trabalho. O direito autoral é garantido por lei e serve para proteger a propriedade intelectual do indivíduo. Como você pode imaginar, essas regras também se aplicam à produção de software, pois obviamente é trabalho intelectual, como pode ser visto abaixo na [lei 9610/98](http://www.planalto.gov.br/ccivil_03/leis/l9610.htm).

> Art. 7º São obras intelectuais protegidas as criações do espírito, expressas por qualquer meio ou fixadas em qualquer suporte, tangível ou intangível, conhecido ou que se invente no futuro, tais como:
>
> ...
>
> XII - os programas de computador;
>
> ...
>
> § 1º Os programas de computador são objeto de legislação específica, observadas as disposições desta Lei que lhes sejam aplicáveis.
>
> Lei 9610/98

No Brasil, [a lei 9610/98](http://www.planalto.gov.br/ccivil_03/leis/l9610.htm) que trata de direitos autorais, divide os direitos do autor em dois tipos, direitos morais e patrimoniais. Os direitos morais são intransferíveis e irrenunciáveis, são eles que garantem a autoria da obra. Os direitos patrimoniais por sua vez podem ser cedidos e tratam do direito exclusivo de utilizar e explorar a obra. Nesse caso, o autor deve autorizar expressamente a modalidade de uso, incluindo, cópia, reprodução parcial ou integral, etc.

Para entender estes conceitos, faremos uma análise de um caso hipotético. Imagine que você criou um algoritmo que produz receitas com rapadura de forma aleatória, chamado de rapadura++, e agora deseja compartilhá-lo com a comunidade. Então você decide imprimir o algoritmo e colar no mural da universidade sem nenhuma autorização explícita de uso. Os alunos então começam a ler o código e comentar como poderiam utilizar o mesmo em outras situações. Devido ao sucesso do seu algoritmo, um dos alunos retira o código do mural, faz uma cópia e devolve o mesmo ao local de origem. Você considera isso um problema?

Uma vez que não foi dada nenhuma autorização explícita de reprodução, a cópia não autorizada pode ser considerada uma violação dos direitos autorais, mais especificamente dos direitos patrimoniais, mesmo que o aluno que realizou a cópia não a explore comercialmente, pois segundo o artigo 29 da lei 9610/98, **a utilização da obra depende de autorização prévia e expressa do autor**.

Logo, se o seu intuito era realmente permitir que as pessoas explorem seu algoritmo, você deveria autorizá-las expressamente, poderia inclusive especificar em quais condições o uso do algoritmo é permitido. Ao dar explicitamente essas permissões, você estaria criando uma licença. No entanto, você não precisa criar a sua própria licença, pois já existem várias conhecidas e aprovadas e que cobrem muitos aspectos. Então, faça sua vida e a vida dos outros mais fácil, escolha uma licença existente, pois certamente há alguma que atende os seus objetivos.

Fazendo uma analogia com o mundo técnico, o mural da universidade é o Github. Quando publicamos código em um projeto público, estamos colando o código no mural da universidade sem explicitamente dizer como ele pode ser utilizado. Logicamente, ao concordarmos com [os termos de uso](https://docs.github.com/pt/free-pro-team@latest/github/site-policy/github-terms-of-service#d-conte%C3%BAdo-gerado-pelo-usu%C3%A1rio), estamos dando autorização para o Github armazenar e disponibilizar nosso código. Por isso, se o seu objetivo é permitir que outras pessoas usem seu projeto, você precisa escolher uma licença, pois é possível que a falta de uma licença impeça um indivíduo ou organização de o utilizar por medo de possíveis problemas judiciais.

> Versão curta: Você possui o conteúdo que você cria, mas nos concede determinados direitos a ele, para que possamos exibir e compartilhar o conteúdo que você publicar. Você ainda tem controle sobre seu conteúdo e responsabilidade por ele, e os direitos que você nos concede são limitados àqueles que precisamos para fornecer o serviço. Temos o direito de remover conteúdo ou fechar Contas se precisarmos.
>
> Termos de serviço do Github

### Tipos de licença

Como está claro, compartilhar um projeto não significa somente tornar o código público, é necessário tratar da distribuição do software e da autorização de uso, ou seja da licença. Conforme mencionado anteriormente, existem várias licenças open source e não é necessário criar uma do zero. Mas o que é uma licença open source?

Licenças open source são licenças aprovadas pela [Open Source Initiative](https://opensource.org/) e que cumprem os 10 princípios da [definição open source](https://opensource.org/osd), como a livre redistribuição e a não discriminação contra pessoas ou grupos.

<div>
	<CallToAction
		title="Veja as licenças aprovadas aqui"
		description="Acesse a lista oficial de licenças aprovadas pela Open Source Initiative."
		buttonText="Ver licenças"
		buttonLink="https://opensource.org/licenses/alphabetical"
	/>
</div>

As licenças open source se dividem em dois grandes grupos: copyleft e permissive. Copyleft são licenças que requerem que qualquer modificação no software ou trabalho derivado seja publicado com a mesma licença do trabalho original. A maioria das licenças copyleft são open source, no entanto nem toda licença open source é uma licença copyleft. Uma licença copyleft muito conhecida é a GNU General Public License, usada por projetos como Ansible, Bash e Gimp.

Licenças do tipo permissive são basicamente não copyleft, ou seja, elas permitem a distribuição das modificações e trabalhos derivados em outros termos. Isso significa que um projeto não copyleft pode ser inclusive redistribuído como um software proprietário. As licenças MIT e Apache License 2.0 são exemplos de permissive license e são amplamente utilizadas.

Em geral, empresas preferem projetos licenciados como não copyleft. Existem inclusive empresas que mantém projetos open source, como a Confluent, principal committer do projeto Apache Kafka. Não é raro ver empresas de tecnologia que foram criadas pelos autores do projeto open source e que se dedicam quase que exclusivamente a prestar consultoria e/ou desenvolvem versões enterprise do produto.

### Como escolher

Já sabemos que existem várias licenças e provavelmente você vai encontrar uma que se adeque às suas necessidades. Mas como escolher dentre várias opções?

Sites como [choose a license](https://choosealicense.com/) e [tldr legal](https://tldrlegal.com/), te ajudam a escolher uma licença ou pelo menos te dão um caminho. Nesses sites você pode encontrar um resumo da licença, indicando o que ela permite ou não.

Para escolher uma licença open source eu diria que precisamos responder minimamente à seguinte pergunta:

> Você espera que todo trabalho desenvolvido a partir do original seja sempre compartilhado?

Se você se importa com as contribuições e quer evitar que outras pessoas possam distribuir versões fechadas do seu trabalho, provavelmente você deveria escolher uma licença copyleft, como a GPL.

Se você não se importa com isso, provavelmente deveria escolher uma licença permissiva, como MIT ou Apache License 2.0.

Para o projeto [e-cordel](http://ecordel.com.br/) que estou desenvolvendo atualmente, a resposta para a pergunta anterior foi um não. Nós do projeto e-cordel não nos importamos que o projeto possa ser copiado e redistribuído com outra licença. O objetivo do projeto, para além de contribuir com cultura do cordel é ajudar o desenvolvimento tecnológico da região no qual está inserido. Ou seja, se uma empresa ou alguém criar um produto a partir do trabalho desenvolvido, estaremos indiretamente contribuindo com o desenvolvimento da região também.

Dentre as licenças permissivas mais famosas, escolhemos a Apache License 2.0 em detrimento da MIT pois a MIT é demasiadamente simples e não trata de itens como a transmissão dos direitos dos contribuidores, ao passo que a Apache License 2.0 define uma cláusula para isso. Ou seja, ao contribuir com um projeto licenciado como Apache License 2.0, você está automaticamente cedendo seus direitos patrimoniais ao projeto.

Outro ponto a ser notado é que as empresas tendem a utilizar mais projetos com licenças permissivas, pois licenças copyleft podem ter um comportamento viral. Mas isso é tema para um outro post.

## Special Thanks
Outras pessoas participaram da construção desse artigo, portanto deixo o meu muito obrigado para…

- [Dr. Marcelo](https://www.linkedin.com/in/marcelo-santos-sousa-5a354aa9/), advogado tributarista e irmão, revisou o conteúdo legal deste post.
- [Régis Brilhante](https://www.linkedin.com/in/regis-brilhante/), engenheiro de software e amigo, contribuiu na construção e revisão do artigo e é uma das forças motoras do e-cordel.

### Fontes e Referências

- [Choose a license](https://choosealicense.com/)
- [TL-DR legal](https://tldrlegal.com/)
- [opensource.org](https://opensource.org/)
- [O que é open source](https://canaltech.com.br/produtos/O-que-e-open-source/)
- [Lei 9609/98](http://www.planalto.gov.br/ccivil_03/leis/L9609.htm)
- [Lei 9610/98](http://www.planalto.gov.br/ccivil_03/leis/l9610.htm)

