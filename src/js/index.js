/* 
 OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:

  - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele 

 - retirar a classe selecionado do personagem que está selecionado


 OBJETIVO 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande

    - alterar a imagem do jogador 1
    - alterar o nome do jogador 1
*/

const characters = document.querySelectorAll('.character')

characters.forEach((character) => {
    character.addEventListener('click', () => {

        const characterSelected = document.querySelector('.selected')

        characterSelected.classList.remove('selected')

        character.classList.add('selected')
    })

})