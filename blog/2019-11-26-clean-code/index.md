---
slug: clean-code
title: Clean code - primeiras impressões
authors: [mario]
tags: [programacao, livros]
---
import CallToAction from '@site/src/components/CallToAction';


![Mão com luva de limpeza segurando spray](https://unsplash.com/photos/__ZMnefoI3k/download?force=true&w=1920)

Recentemente comecei a ler o famoso livro Clean Code juntamente com o time do projeto no qual me encontro atualmente. Esse é um livro, que na minha opinião, todo programador deve ler e que certamente lhe fará mudar a forma como você programa. Talvez, assim como eu, você pode se perguntar porque não o leu antes.

<!-- truncate -->

Passamos mais tempo lendo código do que realmente escrevendo código, portanto não faz sentido mantermos um código sujo. Em um projeto anterior no qual fiz parte, lidamos por muito tempo com um sistema legado e complexo, onde a legibilidade do código era certamente um fator que atrasava todas as estimativas. Além disso, não tínhamos uma cobertura de testes suficiente para nos proporcionar a confiança de refatorar o sistema.

<div class="text--center">
    <img decoding="async" src="https://media.giphy.com/media/4BnnmOr00GGsw/giphy.gif" alt="animação de um macaco digitando em um laptop desligado" title="" height="auto" width="auto"></img>
</div>

Por várias vezes cogitamos iniciar um novo projeto, que seria melhor e fácil de manter, mas será que conseguiríamos atingir nossos objetivos? Ou acabaríamos por criar outro sistema difícil de manter e que eventualmente seria criticado por outros programadores? Quem garantiria a qualidade do código além do aspecto funcional? Afinal de contas, se funciona ninguém mete a mão. Será se seríamos tão cuidadosos quando os deadlines se aproximassem?

É comum cairmos na armadilha de sermos um pouco mais desleixados porque precisamos ser rápidos. E por que fazemos isso? Certamente, um médico não deixaria de lavar as mãos antes da cirurgia porque o paciente está com pressa. Não há voltas a dar:

> Bagunças antigas, reduzem o rendimento, a única maneira é manter o código limpo. **Robert C. Martin**

Ok, mas o que é um código limpo? Bem, essa é uma pergunta de muitas respostas, não é por acaso que no primeiro capítulo do livro várias personalidades da ciência da computação definem o que é clean code. Dentre as definições apresentadas, ficarei com algumas que na minha opinião resumem a ideia geral:

1. Testes: Um código sem testes não é um código limpo.
2. Legibilidade: Somos autores e temos que tornar fácil a leitura, pois isso facilita a escrita.
3. Responsabilidade: Um código limpo faz bem apenas uma coisa.

Definitivamente, um código sem teste não está limpo. Além de garantir a qualidade do código, os testes nos dão a confiança para melhorá-lo, sem eles, preferimos não tocar no que funciona. Se tivéssemos uma boa cobertura de teste, refatorar um sistema não deveria ser uma grande dor de cabeça, afinal, os testes assegurariam o comportamento anterior.

Embora seja óbvio que módulos, classes, métodos, todos eles devem fazer somente uma coisa, será que realmente entendemos isso? Pessoalmente, acredito que essa qualidade requer um pouco de treino. Após ler alguns capítulos do livro, comecei a perceber que vários métodos que eu escrevi faziam mais de uma coisa e/ou sabiam demais e assim, se acoplavam com outros módulos/classes desnecessariamente.

O código abaixo foi retirado do meu trabalho de conclusão da graduação em 2014. Embora seja um código simples e pequeno ele sofre de vários problemas. :’(

```java
public List<Product> getList() {
	if(productService == null){
		ProductDAOImpl produtoDAOImpl = DAOFactory.createProductDAO(contextBean.getEntityManagerForTenanty());
		productService = new ProductService(productDAOImpl);
	}
	if (list == null || list.size() == 0) {
		list =  productService.list();
	}
	return list;
} 
```

Inicialmente, o nome do método nos sugere, que o mesmo retornará uma lista mas não de que e porque, sabemos que é uma lista de produtos, mas quais produtos? Os mais recentes? Os últimos comprados? Um método deve expressar sua função claramente, assim como o nome de uma variável. Outro ponto, e o que me incomoda mais, é que esse método não deveria se preocupar em instanciar o DAO e o Service, esse método já faz mais de uma coisa. Além disso, esse tipo de código cria um outro nível de acoplamento, a classe sabe demais. Ela sabe como recuperar DAOs e criar services. Lembre-se do S do [SOLID](https://pt.wikipedia.org/wiki/SOLID), um objeto deve ter uma só responsabilidade.

Se a classe A, depende da classe B para funcionar e B é uma dependência obrigatória, então a classe A, deveria receber B através do construtor, basicamente por dois motivos:

1. Isso deixa claro para quem deseja usar a classe A, que ela depende de B e não é possível usar A sem B. Tente não deixar coisas implícitas. Expresse suas suas intenções o mais claro possível.
2. Declarar explicitamente as dependências de um objeto facilita a escrita de testes e como já sabemos, um código sem teste não é um código limpo. 

Certo dia, trabalhando no projeto legado o qual mencionei no início do artigo, tentei criar um simples teste unitário e para minha surpresa, ao instanciar uma classe de nome Unidade (salvo engano), com construtor padrão, recebi um erro de conexão com banco de dados. Durante o debug, descobri que objetos que eram criados no construtor da classe sob teste, tentavam se conectar ao banco de dados. What!? Isso mesmo. Por fim, não fiz o teste e não refatorei o código, porque não havia testes que me dessem segurança para fazer tal trabalho. **Ou seja, implícito muitas vezes é ruim, falta de teste é ainda pior**.

No primeiro capítulo, Uncle Bob relata que deveríamos deixar o código melhor do que o encontramos, o que eu não fiz na ocasião porque caí na armadilha do “depois eu faço”. E aqui mora outro problema conhecido como a lei de Leblanc, **depois é igual a nunca**. E realmente foi, pelo menos para mim. Nunca voltei no código para refatorá-lo e é provável que o mesmo esteja tal qual o deixei.

Quando se tem um código “sujo”, com bagunças anteriores, sem testes, com baixa legibilidade, etc, temos mais desculpas para não fazermos um código melhor, afinal, tudo já está sujo mesmo não é? Não faz diferença. Isso me lembra da teoria das [janelas quebradas](https://en.wikipedia.org/wiki/Broken_windows_theory): sinais visíveis de desordem encorajam mais desordem. Não tenho dúvida quanto a isso, pelo menos não quando o assunto é código.

Outro ponto negativo do método anterior, é a falta de expressividade no nome das variáveis e métodos. Nomes significativos, métodos pequenos, classes coesas, tudo isso tem um impacto sobre a legibilidade. O código limpo deve contar uma história, deve expressar bem suas intenções e não deveria deixar nada implícito. Aparentemente, um lazy loading é realizado na lista que armazena os produtos, mas isso não é tão expressivo.

:::tip
Escolha nomes significativos, que expressam o porquê daquele código existir.
:::

Após ler 8 capítulos do livro, veja abaixo como eu reescreveria hoje esse código:

```java
public List<Product> getAllProducts() {
	if (productListIsEmpty()) {
		productList =  productService.getAllProducts();
	}
	return productList;
}

private boolean productListIsEmpty(){
	return productList == null || productList.isEmpty();
}
```

Primeiro ponto, o nome do método é mais significativo. Segundo ponto, ele faz só uma coisa, recupera a lista de produtos e para isso usa uma instância de um service, que por sua vez, seria passado via construtor da classe, provavelmente por um framework de injeção de dependência como o Spring.

Esse código conta uma história um pouco melhor que a anterior e esse é o último ponto. Devemos contar histórias através do código, para que o próximo programador não tenha que se esforçar tanto para entender o que está acontecendo ali. Mantenha seu código pequeno e simples, tente contar um história e lembre-se, se você precisa escrever comentários para explicar o que está acontecendo, esse pode ser um mau sinal.

> **Disclaimer**: o código acima parece fazer também uma espécie de cache e guarda a lista carregada em uma variável local. Caso não haja uma boa razão para isso, provavelmente a melhor estratégia seria delegar essa função para o framework. Em um projeto Java/Spring a anotação @Cacheable poderia ser um solução aceitável. O que tornaria o código ainda mais limpo, removendo a complexidade acidental.

---

Este é um post de uma série onde eu comento minhas impressões sobre livros que li e que acredito que valem a pena ler. Você pode conferir a minha lista de must read com os principais títulos no link abaixo.

<div>
  <CallToAction
    title="Livros Obrigatórios para programadores"
    description="Veja a lista que atualmente considero imprescindível para se tornar um melhor programador."
    buttonText="Ver a lista"
    buttonLink="/book-club"
  />
</div>

## Referências

 - [Clean code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
 - [SOLID](https://en.wikipedia.org/wiki/SOLID)
 