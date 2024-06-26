/* 
 OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:

  - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele 

 - retirar a classe selecionado do personagem que está selecionado


 OBJETIVO 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande

    - alterar a imagem do jogador 1
    - alterar o nome do jogador 1
*/


const characters = document.querySelectorAll('.character');

characters.forEach((character) => {

    const idSelected = character.attributes.id.value;

    if (idSelected === 'shao-kahn') {
        return;
    }

    character.addEventListener('click', () => {
        // ou mouseenter
        const characterSelected = document.querySelector('.selected');

        characterSelected.classList.remove('selected');

        character.classList.add('selected');




        const playerOne = document.getElementById('player-1');

        playerOne.src = `src/img/${idSelected}.webp`



        const namePlayerOne = document.getElementById('character-name');

        const selectedName = character.getAttribute('data-name');

        namePlayerOne.innerHTML = selectedName;

    })

})