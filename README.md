<h1 align="center"> Toggle Switch Checkboxes </h1>
<h6 align="center">Project <a href="https://shapecheck.vercel.app/">Link</a></h6>
<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="html5" width="60" height="40"/>

<img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" alt="html5" width="60" height="40"/>
</div>

<details>

<summary  align="center" style="background-color: #ffff00; padding: 10px;">English</summary>

</details>
<br>
<h3>Descrição</h3>

Um pequeno projeto para criar uma caixa de seleção de on/off, com um adicional de três opções onde você só pode marcar duas e a terceira é desmarcada automaticamente, decidi fazer uma piada com o esporte que pratico


<hr>
<h3>Lógica por trás</h3>

Apenas três passos:

1. Importar os elementos do DOM, todas as checkboxes e individualmente cada uma
2. Aplicar um forEach e um event 'change'
3. Função para fazer a checagem

a função deve ficar algo como:
```JavaScript
function checkToggle(toggleChecked) {
    if (toggle1.checked && toggle2.checked && toggle3.checked) {
        if (toggleChecked === toggle1) {
            toggle2.checked = false
        }

        if (toggleChecked === toggle2) {
            toggle3.checked = false
        }

        if (toggleChecked === toggle3) {
            toggle1.checked = false
        }
    }
}
```

a função vai iniciar o primeiro IF apenas quando as três checkboxes forem marcadas, após isso ela vai checar qual checkbox marcada por último e assim aplicar as condicionais
```mermaid
flowchart TD
A[Checkboxes] --> B[Opção 1];
A --> C[Opção 2];
A --> D[Opção 3];
C --> E[Opção Marcada];
D --> E;
B --> E;
```
```mermaid
flowchart TD
A[Checkboxes] --> B[Opção 1];
A --> C[Opção 2];
A --> D[Opção 3];
C --> E[Opção Marcada];
D --> E;
B --> F[Opção Desmarcada];
```
```mermaid
flowchart TD
A[Checkboxes] --> B[Opção 1];
A --> C[Opção 2];
A --> D[Opção 3];
B --> E[Opção Marcada];
C --> F[Opção Desmarcada];
D --> E;
```
```mermaid
flowchart TD
A[Checkboxes] --> B[Opção 1];
A --> C[Opção 2];
A --> D[Opção 3];
B --> E[Opção Marcada];
C --> E;
D --> F[Opção Desmarcada];
```
<hr>
<h3>Licença</h3>
Este projeto foi inspirado no projeto número 32 do repositório público <a href="https://github.com/bradtraversy/50projects50days">50 Projects 50 Days</a>


---
