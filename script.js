
        // Dados dos submenus
        const submenuData = {
            menu1: ['img/imgSubmenu01.png', 'img/imgSubmenu02.png', 'img/imgSubmenu03.png', 'img/imgSubmenu04.png', 'img/imgSubmenu05.png'],
            menu2: ['img/imgSubmenu01.png', 'img/imgPS5Pro.png', 'img/imgJogos.png', 'img/imgControles.png', 'img/imgSubmenu03.png', 'img/imgAudio.png'],
            menu3: ['img/foto01.png', 'img/foto02.png', 'img/foto03.png', 'img/foto04.png'],
            menu4: ['img/imgSubmenu05.png', 'img/foto06.png', 'img/foto07.png'],
            menu5: ['img/foto08.png', 'img/foto09.png', 'img/imgSubmenu03.png', 'img/imgAudio.png', 'img/foto10.png'],
            menu6: ['img/foto11.png', 'img/foto12.png'],
            menu7: ['img/foto13.png', 'img/foto14.png'],
            menu8: ['img/foto16.png', 'img/foto15.png']
        };

        const submenuBar = document.getElementById('submenu-bar');
        const hamburgerMenu = document.getElementById('hamburger-menu');
        const navMenu = document.querySelector('.nav-menu');

        // Submenu
        document.querySelectorAll('.nav-menu li').forEach(item => {
            item.addEventListener('click', (event) => {
                event.stopPropagation();
                const key = item.getAttribute('data-submenu');
                const options = submenuData[key];
                const isActive = submenuBar.classList.contains('active');
                const isSameMenu = submenuBar.dataset.activeMenu === key;

                if (isActive && isSameMenu) {
                    submenuBar.classList.remove('active');
                    submenuBar.innerHTML = '';
                    submenuBar.removeAttribute('data-active-menu');
                    return;
                }

                if (!options) {
                    submenuBar.classList.remove('active');
                    submenuBar.innerHTML = '';
                    submenuBar.removeAttribute('data-active-menu');
                    return;
                }

                submenuBar.innerHTML = options
                    .map(src => `<img src="${src}" class="submenu-item" alt="Submenu item">`)
                    .join('');

                submenuBar.classList.add('active');
                submenuBar.dataset.activeMenu = key;
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-menu') && !e.target.closest('#submenu-bar') && !e.target.closest('.hamburger-menu')) {
                submenuBar.classList.remove('active');
                submenuBar.innerHTML = '';
                submenuBar.removeAttribute('data-active-menu');
            }
        });

        // Hamburger Menu
        hamburgerMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });

        // Galeria Horizontal
        const horizontalGallery = document.querySelector('.horizontal-scroll-gallery');
        const leftArrow = document.querySelector('.gallery-arrow.left-arrow');
        const rightArrow = document.querySelector('.gallery-arrow.right-arrow');

        if (horizontalGallery) {
            horizontalGallery.addEventListener('wheel', (event) => {
                event.preventDefault();
                horizontalGallery.scrollLeft += event.deltaY;
            });

            let isDown = false;
            let startX;
            let scrollLeft;

            horizontalGallery.addEventListener('mousedown', (e) => {
                isDown = true;
                horizontalGallery.classList.add('active-drag');
                startX = e.pageX - horizontalGallery.offsetLeft;
                scrollLeft = horizontalGallery.scrollLeft;
            });

            horizontalGallery.addEventListener('mouseleave', () => {
                isDown = false;
                horizontalGallery.classList.remove('active-drag');
            });

            horizontalGallery.addEventListener('mouseup', () => {
                isDown = false;
                horizontalGallery.classList.remove('active-drag');
            });

            horizontalGallery.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - horizontalGallery.offsetLeft;
                const walk = (x - startX) * 2;
                horizontalGallery.scrollLeft = scrollLeft - walk;
            });

            if (leftArrow && rightArrow) {
                const updateArrowVisibility = () => {
                    const scrollTolerance = 5;
                    leftArrow.style.display = horizontalGallery.scrollLeft > scrollTolerance ? 'flex' : 'none';
                    rightArrow.style.display = horizontalGallery.scrollLeft < (horizontalGallery.scrollWidth - horizontalGallery.clientWidth - scrollTolerance) ? 'flex' : 'none';
                };

                leftArrow.addEventListener('click', () => {
                    horizontalGallery.scrollBy({
                        left: -horizontalGallery.offsetWidth / 1.5,
                        behavior: 'smooth'
                    });
                });

                rightArrow.addEventListener('click', () => {
                    horizontalGallery.scrollBy({
                        left: horizontalGallery.offsetWidth / 1.5,
                        behavior: 'smooth'
                    });
                });

                horizontalGallery.addEventListener('scroll', updateArrowVisibility);
                setTimeout(updateArrowVisibility, 100);
            }
        }

        // Remova o segundo e terceiro document.addEventListener('DOMContentLoaded', function() { ... });
// E cole a lógica da galeria de cards diretamente no primeiro.
// O arquivo final deve ter APENAS UM document.addEventListener('DOMContentLoaded', ...);

document.addEventListener('DOMContentLoaded', function() {
    // --- Código existente do Submenu (Navbar Principal) ---
    const submenuData = { /* ... seu objeto submenuData ... */ };
    const submenuBar = document.getElementById('submenu-bar');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Lógica do Submenu (mantida)
    document.querySelectorAll('.nav-menu li').forEach(item => { /* ... */ });
    document.addEventListener('click', (e) => { /* ... */ });
    hamburgerMenu.addEventListener('click', () => { /* ... */ });
    window.addEventListener('resize', () => { /* ... */ });


    // --- Código existente da Galeria Horizontal (horizontal-scroll-gallery) ---
    const horizontalGallery = document.querySelector('.horizontal-scroll-gallery');
    const leftArrow = document.querySelector('.gallery-arrow.left-arrow');
    const rightArrow = document.querySelector('.gallery-arrow.right-arrow');

    if (horizontalGallery) {
        horizontalGallery.addEventListener('wheel', (event) => { /* ... */ });
        // Eventos de drag (mousedown, mouseleave, mouseup, mousemove) (mantidos)
        horizontalGallery.addEventListener('mousedown', (e) => { /* ... */ });
        horizontalGallery.addEventListener('mouseleave', () => { /* ... */ });
        horizontalGallery.addEventListener('mouseup', () => { /* ... */ });
        horizontalGallery.addEventListener('mousemove', (e) => { /* ... */ });

        if (leftArrow && rightArrow) {
            const updateArrowVisibility = () => { /* ... */ }; // Esta função é para a GALERIA DE CIMA
            leftArrow.addEventListener('click', () => { /* ... */ });
            rightArrow.addEventListener('click', () => { /* ... */ });
            horizontalGallery.addEventListener('scroll', updateArrowVisibility);
            setTimeout(updateArrowVisibility, 100);
        }
    }

    // --- Lógica para a Galeria de Imagens Interativa (gallery-btn, gallery-image) ---
    const galleryButtons = document.querySelectorAll('.gallery-btn');
    const galleryImages = document.querySelectorAll('.gallery-image');

    const showImage = (imageId) => { /* ... */ }; // Esta função é para a GALERIA ABAIXO DO SUBTITULO4
    galleryButtons.forEach(button => { /* ... */ });
    const initialActiveButtonImage = document.querySelector('.gallery-btn.deluxe'); // Nomeei diferente para não confundir
    if (initialActiveButtonImage) {
        initialActiveButtonImage.click();
    }


    // --- Lógica para o FAQ ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => { /* ... */ });


    // --- Lógica da sua NOVA SEÇÃO DE CARDS (benefits-section) ---
    // ESTA É A PARTE QUE PRECISA DE MAIS ATENÇÃO
    const cardsWrapperBenefits = document.querySelector('.benefits-section .cards-wrapper'); // Seletor mais específico
    const cardsLeftArrowBenefits = document.querySelector('.benefits-section .cards-gallery-arrow.left-arrow'); // Seletor mais específico
    const cardsRightArrowBenefits = document.querySelector('.benefits-section .cards-gallery-arrow.right-arrow'); // Seletor mais específico
    const toggleButtonsBenefits = document.querySelectorAll('.benefits-section .toggle-button'); // Seletor mais específico
    const categoryCardContainersBenefits = document.querySelectorAll('.benefits-section .category-cards'); // Seletor mais específico

    if (cardsWrapperBenefits && cardsLeftArrowBenefits && cardsRightArrowBenefits && toggleButtonsBenefits.length > 0 && categoryCardContainersBenefits.length > 0) {

        const updateCardsArrowVisibilityBenefits = () => { // Renomeada para evitar conflito
            const scrollTolerance = 5;
            const activeCategoryCardsContainer = cardsWrapperBenefits.querySelector('.category-cards.active');
            if (!activeCategoryCardsContainer) {
                cardsLeftArrowBenefits.style.display = 'none';
                cardsRightArrowBenefits.style.display = 'none';
                return;
            }

            const totalContentWidth = activeCategoryCardsContainer.scrollWidth;
            const visibleWrapperWidth = cardsWrapperBenefits.clientWidth;

            if (totalContentWidth <= visibleWrapperWidth + scrollTolerance) {
                cardsLeftArrowBenefits.style.display = 'none';
                cardsRightArrowBenefits.style.display = 'none';
                return;
            }

            const canScrollLeft = cardsWrapperBenefits.scrollLeft > scrollTolerance;
            const canScrollRight = cardsWrapperBenefits.scrollLeft < (totalContentWidth - visibleWrapperWidth - scrollTolerance);

            cardsLeftArrowBenefits.style.display = canScrollLeft ? 'flex' : 'none';
            cardsRightArrowBenefits.style.display = canScrollRight ? 'flex' : 'none';
        };

        const getCardAndGapWidthBenefits = () => { // Renomeada para evitar conflito
            const activeCategoryCardsContainer = cardsWrapperBenefits.querySelector('.category-cards.active');
            if (!activeCategoryCardsContainer || activeCategoryCardsContainer.children.length === 0) {
                return 0;
            }
            const firstCard = activeCategoryCardsContainer.children[0];
            const cardWidth = firstCard.offsetWidth;
            const gap = 20;
            return cardWidth + gap;
        };

        // Event listener para rolar para a esquerda (benefícios)
        cardsLeftArrowBenefits.addEventListener('click', () => {
            const scrollAmount = getCardAndGapWidthBenefits();
            cardsWrapperBenefits.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        // Event listener para rolar para a direita (benefícios)
        cardsRightArrowBenefits.addEventListener('click', () => {
            const activeCategoryCardsContainer = cardsWrapperBenefits.querySelector('.category-cards.active');
            if (!activeCategoryCardsContainer || activeCategoryCardsContainer.children.length === 0) {
                return;
            }

            const cardAndGapWidth = getCardAndGapWidthBenefits();
            const cardsToScroll = Math.max(1, Math.floor(cardsWrapperBenefits.clientWidth / cardAndGapWidth) - 1);
            let targetScrollLeft = cardsWrapperBenefits.scrollLeft + (cardsToScroll * cardAndGapWidth);

            const maxScrollLeft = activeCategoryCardsContainer.scrollWidth - cardsWrapperBenefits.clientWidth;

            if (targetScrollLeft > maxScrollLeft) {
                targetScrollLeft = maxScrollLeft;
            }

            cardsWrapperBenefits.scrollTo({
                left: targetScrollLeft,
                behavior: 'smooth'
            });
        });

        // Eventos para reavaliar a visibilidade das setas (benefícios)
        cardsWrapperBenefits.addEventListener('scroll', updateCardsArrowVisibilityBenefits);
        window.addEventListener('resize', updateCardsArrowVisibilityBenefits);

        // --- Lógica para os botões de Toggle de Categoria (benefícios) ---
        toggleButtonsBenefits.forEach(button => {
            button.addEventListener('click', () => {
                // Remove 'active' de todos os botões de toggle
                toggleButtonsBenefits.forEach(btn => btn.classList.remove('active'));
                // Adiciona 'active' ao botão clicado
                button.classList.add('active');

                const category = button.dataset.category;
                const targetCategoryContainer = document.getElementById(category);

                // Esconde todas as categorias e mostra a alvo
                categoryCardContainersBenefits.forEach(container => {
                    container.classList.remove('active');
                });

                if (targetCategoryContainer) {
                    targetCategoryContainer.classList.add('active');
                }

                // Reseta a rolagem e atualiza a visibilidade das setas
                cardsWrapperBenefits.scrollLeft = 0;
                setTimeout(updateCardsArrowVisibilityBenefits, 100);
            });
        });

        // Chamada inicial para configurar a visibilidade das setas e a categoria ativa padrão
        setTimeout(() => {
            const defaultButton = document.querySelector('.benefits-section .toggle-button.active');
            if (defaultButton) {
                // Simula um clique no botão padrão para ativar a categoria e as setas
                defaultButton.click();
            } else {
                updateCardsArrowVisibilityBenefits(); // Se não há botão ativo, apenas atualiza as setas
            }
        }, 200);

    } else {
        console.warn("Um ou mais elementos essenciais para a galeria de cards de benefícios não foram encontrados. Verifique seletores ou HTML.");
    }
});

        // --- Lógica para a Galeria de Imagens Interativa ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Carregado. Iniciando script da galeria.");

    const galleryButtons = document.querySelectorAll('.gallery-btn');
    const galleryImages = document.querySelectorAll('.gallery-image');

    if (galleryButtons.length === 0 || galleryImages.length === 0) {
        console.error("Erro: Elementos da galeria não encontrados. Verifique seletores CSS ('.gallery-btn' ou '.gallery-image') ou o posicionamento do script.");
    } else {
        console.log("Elementos da galeria encontrados: ", galleryButtons.length, " botões e ", galleryImages.length, " imagens.");
    }

    // Função para exibir uma imagem e ocultar as outras
    const showImage = (imageId) => {
        console.log("Tentando exibir imagem com ID:", imageId);

        // Oculta todas as imagens
        galleryImages.forEach(img => {
            if (img.classList.contains('active')) { // Verifica se já tem a classe antes de remover
                img.classList.remove('active');
                console.log("Removida classe 'active' da imagem:", img.id);
            }
        });

        // Remove a classe 'active-btn' de todos os botões
        galleryButtons.forEach(btn => {
            if (btn.classList.contains('active-btn')) { // Verifica se já tem a classe antes de remover
                btn.classList.remove('active-btn');
                console.log("Removida classe 'active-btn' do botão:", btn.textContent);
            }
        });

        // Encontra e exibe a imagem correspondente
        const targetImage = document.getElementById(imageId);
        if (targetImage) {
            targetImage.classList.add('active');
            console.log("Adicionada classe 'active' à imagem:", targetImage.id);
        } else {
            console.error("Erro: Imagem alvo não encontrada com ID:", imageId);
        }
    };

    // Adiciona evento de clique a cada botão da galeria
    galleryButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log("Botão clicado:", button.textContent);
            const imageToShow = button.dataset.image; // Pega o ID da imagem do atributo data-image
            console.log("Valor do data-image para mostrar:", imageToShow);
            showImage(imageToShow);
            button.classList.add('active-btn'); // Adiciona a classe para estilo de botão ativo
            console.log("Adicionada classe 'active-btn' ao botão clicado:", button.textContent);
        });
    });

    // Define qual botão deve estar ativo inicialmente
    const initialActiveButton = document.querySelector('.gallery-btn.deluxe'); // O botão DELUXE inicia ativo
    if (initialActiveButton) {
        console.log("Simulando clique inicial para:", initialActiveButton.textContent);
        initialActiveButton.click(); // Simula um clique para exibir a primeira imagem e ativar o botão
    } else {
        console.warn("Aviso: Botão inicial '.gallery-btn.deluxe' não encontrado. A primeira imagem pode não ser exibida inicialmente.");
    }
});

 document.addEventListener('DOMContentLoaded', function() {
        const faqQuestions = document.querySelectorAll('.faq-question');

        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                // Seleciona o elemento pai (faq-item)
                const faqItem = this.closest('.faq-item');
                // Seleciona a resposta dentro do mesmo item
                const faqAnswer = faqItem.querySelector('.faq-answer');
                // Alterna a classe 'active' na pergunta
                this.classList.toggle('active');
                // Alterna a classe 'active' na resposta para controlar a altura e o padding
                faqAnswer.classList.toggle('active');

                // Ajusta a altura máxima da resposta para animar suavemente
                if (faqAnswer.classList.contains('active')) {
                    faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
                } else {
                    faqAnswer.style.maxHeight = '0';
                }
            });
        });
    });


   // --- Lógica para os botões de seta da Galeria de Cards (benefits-section) ---
document.addEventListener('DOMContentLoaded', function() {
    const cardsWrapper = document.querySelector('.cards-wrapper');
    const cardsLeftArrow = document.querySelector('.cards-gallery-arrow.left-arrow');
    const cardsRightArrow = document.querySelector('.cards-gallery-arrow.right-arrow');
    const toggleButtons = document.querySelectorAll('.toggle-button');

    if (cardsWrapper && cardsLeftArrow && cardsRightArrow) {

        const updateCardsArrowVisibility = () => {
            const scrollTolerance = 5; // Pequena tolerância para o final/início da rolagem

            // Esconde ambas as setas se o conteúdo for menor ou igual à área visível
            if (cardsWrapper.scrollWidth <= cardsWrapper.clientWidth + scrollTolerance) {
                cardsLeftArrow.style.display = 'none';
                cardsRightArrow.style.display = 'none';
                return;
            }

            const canScrollLeft = cardsWrapper.scrollLeft > scrollTolerance;
            // Para 'canScrollRight', verificamos se ainda há conteúdo à direita para rolar
            const canScrollRight = cardsWrapper.scrollLeft < (cardsWrapper.scrollWidth - cardsWrapper.clientWidth - scrollTolerance);

            cardsLeftArrow.style.display = canScrollLeft ? 'flex' : 'none';
            cardsRightArrow.style.display = canScrollRight ? 'flex' : 'none';
        };

        const getCardAndGapWidth = () => {
            const activeCategoryCardsContainer = cardsWrapper.querySelector('.category-cards.active');
            if (!activeCategoryCardsContainer || activeCategoryCardsContainer.children.length === 0) {
                return 0; // Retorna 0 se não houver cards ativos
            }
            // Pega o primeiro card da categoria ativa para obter a largura e o gap
            const firstCard = activeCategoryCardsContainer.children[0];
            const cardComputedStyle = window.getComputedStyle(firstCard);
            const cardWidth = firstCard.offsetWidth; // Largura total do card (incluindo padding/border)
            // Tenta obter o gap do estilo computado, ou usa um valor padrão se não encontrar
            // Como você usa 'gap: 20px;' no .category-cards, o gap não estará no card em si.
            // Precisamos garantir que ele seja considerado.
            // A forma mais segura é pegar um gap do CSS ou inferir.
            const gap = 20; // Seu CSS define 'gap: 20px' para .category-cards

            return cardWidth + gap;
        };

        // Event listener para rolar para a esquerda
        cardsLeftArrow.addEventListener('click', () => {
            const scrollAmount = getCardAndGapWidth();
            cardsWrapper.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        // Event listener para rolar para a direita
        cardsRightArrow.addEventListener('click', () => {
            const activeCategoryCardsContainer = cardsWrapper.querySelector('.category-cards.active');
            if (!activeCategoryCardsContainer || activeCategoryCardsContainer.children.length === 0) {
                return;
            }

            const cardAndGapWidth = getCardAndGapWidth();
            const cardsInView = Math.floor(cardsWrapper.clientWidth / cardAndGapWidth); // Quantos cards cabem na tela (aproximadamente)

            let targetScrollLeft = cardsWrapper.scrollLeft + (cardsInView * cardAndGapWidth);

            // Calcula o scroll máximo possível para o final dos cards
            const maxScrollLeft = activeCategoryCardsContainer.scrollWidth - cardsWrapper.clientWidth;

            // Se o targetScrollLeft calculado exceder o maxScrollLeft, ajuste para o maxScrollLeft
            // Isso garante que a rolagem pare no final do último card visível, sem espaço extra.
            if (targetScrollLeft > maxScrollLeft) {
                targetScrollLeft = maxScrollLeft;
            }

            cardsWrapper.scrollTo({
                left: targetScrollLeft,
                behavior: 'smooth'
            });
        });


        // Eventos para reavaliar a visibilidade das setas
        cardsWrapper.addEventListener('scroll', updateCardsArrowVisibility);
        window.addEventListener('resize', updateCardsArrowVisibility);

        // Ação ao clicar nos botões de toggle
        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Ao trocar de categoria, volte ao início e atualize as setas
                cardsWrapper.scrollLeft = 0;
                // Um pequeno atraso é crucial para que o navegador recalcule as larguras após a mudança de categoria.
                setTimeout(updateCardsArrowVisibility, 50);
            });
        });

        // Chamada inicial para configurar a visibilidade das setas
        setTimeout(updateCardsArrowVisibility, 200);
    } else {
        console.warn("Elementos para rolagem da galeria de cards não encontrados. Verifique seletores ou HTML.");
    }
});








// O código JavaScript permanece o MESMO que te passei na penúltima resposta.
document.addEventListener('DOMContentLoaded', function() {
    const cardsWrapper = document.querySelector('.cards-wrapper');
    const cardsLeftArrow = document.querySelector('.cards-gallery-arrow.left-arrow');
    const cardsRightArrow = document.querySelector('.cards-gallery-arrow.right-arrow');
    const toggleButtons = document.querySelectorAll('.toggle-button');
    const categoryCardContainers = document.querySelectorAll('.category-cards'); // Seleciona todos os contêineres de categoria

    // --- Funções Auxiliares ---
    const updateCardsArrowVisibility = () => {
        const scrollTolerance = 5; // Pequena tolerância para o final/início da rolagem

        // Importante: precisamos olhar para a categoria ATIVA para o scrollWidth
        const activeCategoryCardsContainer = cardsWrapper.querySelector('.category-cards.active');
        if (!activeCategoryCardsContainer) {
            cardsLeftArrow.style.display = 'none';
            cardsRightArrow.style.display = 'none';
            return;
        }

        // A rolagem acontece no cardsWrapper, mas o conteúdo vem do activeCategoryCardsContainer
        const totalContentWidth = activeCategoryCardsContainer.scrollWidth;
        const visibleWrapperWidth = cardsWrapper.clientWidth;

        // Esconde ambas as setas se o conteúdo for menor ou igual à área visível do wrapper
        if (totalContentWidth <= visibleWrapperWidth + scrollTolerance) {
            cardsLeftArrow.style.display = 'none';
            cardsRightArrow.style.display = 'none';
            return;
        }

        const canScrollLeft = cardsWrapper.scrollLeft > scrollTolerance;
        // Verifica se ainda há algo para rolar para a direita
        const canScrollRight = cardsWrapper.scrollLeft < (totalContentWidth - visibleWrapperWidth - scrollTolerance);

        cardsLeftArrow.style.display = canScrollLeft ? 'flex' : 'none';
        cardsRightArrow.style.display = canScrollRight ? 'flex' : 'none';
    };

    const getCardAndGapWidth = () => {
        const activeCategoryCardsContainer = cardsWrapper.querySelector('.category-cards.active');
        if (!activeCategoryCardsContainer || activeCategoryCardsContainer.children.length === 0) {
            return 0;
        }
        const firstCard = activeCategoryCardsContainer.children[0];
        const cardWidth = firstCard.offsetWidth;
        const gap = 20; // Seu CSS define 'gap: 20px' para .category-cards
        return cardWidth + gap;
    };

    // --- Inicialização e Event Listeners ---
    if (cardsWrapper && cardsLeftArrow && cardsRightArrow && toggleButtons.length > 0 && categoryCardContainers.length > 0) {

        // Event listener para rolar para a esquerda
        cardsLeftArrow.addEventListener('click', () => {
            const scrollAmount = getCardAndGapWidth();
            cardsWrapper.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        // Event listener para rolar para a direita
        cardsRightArrow.addEventListener('click', () => {
            const activeCategoryCardsContainer = cardsWrapper.querySelector('.category-cards.active');
            if (!activeCategoryCardsContainer || activeCategoryCardsContainer.children.length === 0) {
                return;
            }

            const cardAndGapWidth = getCardAndGapWidth();
            const cardsToScroll = Math.max(1, Math.floor(cardsWrapper.clientWidth / cardAndGapWidth) - 1);
            let targetScrollLeft = cardsWrapper.scrollLeft + (cardsToScroll * cardAndGapWidth);

            const maxScrollLeft = activeCategoryCardsContainer.scrollWidth - cardsWrapper.clientWidth;

            if (targetScrollLeft > maxScrollLeft) {
                targetScrollLeft = maxScrollLeft;
            }

            cardsWrapper.scrollTo({
                left: targetScrollLeft,
                behavior: 'smooth'
            });
        });

        // Eventos para reavaliar a visibilidade das setas
        cardsWrapper.addEventListener('scroll', updateCardsArrowVisibility);
        window.addEventListener('resize', updateCardsArrowVisibility);

        // --- Lógica para os botões de Toggle de Categoria ---
        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                // 1. Remove 'active' de todos os botões de toggle
                toggleButtons.forEach(btn => btn.classList.remove('active'));
                // 2. Adiciona 'active' ao botão clicado
                button.classList.add('active');

                // 3. Obtém a categoria que deve ser exibida
                const category = button.dataset.category;
                const targetCategoryContainer = document.getElementById(category);

                // 4. Esconde todas as categorias e mostra a alvo
                categoryCardContainers.forEach(container => {
                    container.classList.remove('active');
                    // IMPORTANTE: Se o cards-wrapper é flex, pode ser que precisamos
                    // garantir que apenas UM item flex esteja visível
                    // Isso é controlado pela classe 'active'
                });

                if (targetCategoryContainer) {
                    targetCategoryContainer.classList.add('active');
                }

                // 6. Reseta a rolagem e atualiza a visibilidade das setas
                cardsWrapper.scrollLeft = 0;
                // Um atraso um pouco maior pode ser útil aqui para garantir que o DOM se estabilize.
                setTimeout(updateCardsArrowVisibility, 100);
            });
        });

        // Chamada inicial para configurar a visibilidade das setas e a categoria ativa padrão
        setTimeout(() => {
            const defaultButton = document.querySelector('.toggle-button.active');
            if (defaultButton) {
                const defaultCategory = defaultButton.dataset.category;
                const defaultCategoryContainer = document.getElementById(defaultCategory);

                if (defaultCategoryContainer) {
                    categoryCardContainers.forEach(container => container.classList.remove('active'));
                    defaultCategoryContainer.classList.add('active');
                }
            }
            updateCardsArrowVisibility();
        }, 200);

    } else {
        console.warn("Um ou mais elementos essenciais para a galeria de cards ou toggle de categorias não foram encontrados. Verifique seletores ou HTML.");
    }
});
