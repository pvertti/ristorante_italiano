// Un comentario en JavaScript se escribe con dos barras.

// === DATOS DEL MENÚ ===
// 'const' declara una variable constante (que no cambiará).
// 'menuItems' es un 'array' (una lista) que contiene 'objetos'.
// Cada objeto representa un platillo y tiene propiedades como id, nombre, categoría, precio e imagen.

   const menuItems = [
    { 
    id: 1, 
    name: "Spaghetti al pesto", 
    category: "platillos-fuertes", 
    price: "$120", 
    image: "img/pesto.jpg",
    description: "Spaghetti sazonado con albahaca, aceite de oliva, piñones y parmesano.",
},

{ 
    id: 2, 
    name: "Pizza Margherita", 
    category: "platillos-fuertes", 
    price: "$160", 
    image: "img/pizza.jpg",
    description: "Masa con salsa de tomate, albahaca y mozzarella artesanales.",
},

 { 
    id: 3, 
    name: "Panne di aglio", 
    category: "entradas", 
    price: "$40", 
    image: "img/panajo.jpg",
    description: "Pan recién horneado cortado, sazonado con ajo.",
},

 { 
    id: 4, 
    name: "Zuppa di pomodoro", 
    category: "entradas", 
    price: "$55", 
    image: "img/sopa.jpg",
    description: "Crema espesa elaborada con tomates tradicional de Sicilia.",
},

 { 
    id: 5, 
    name: "Carpaccio di manzo", 
    category: "entradas", 
    price: "$80", 
    image: "img/carp.jpg",
    description: "Láminas finas de carne cocidas con limón, finas hierbas y parmesano.",
},

{ 
    id: 6, 
    name: "Arancini", 
    category: "entradas", 
    price: "$65", 
    image: "img/arancini.jpg",
    description: "Bolitas pequeñas de mozzarella con una capa crujiente de papa por fuera.",
},

    { 
    id: 7, 
    name: "Lasagna di Carne", 
    category: "platillos-fuertes", 
    price: "$160", 
    image: "img/lasaña.jpg",
    description: "Finas láminas de pasta, con capas de salsa de tomate y carne marinada, con una costra de queso encima.",
    },

    { 
    id: 8,
     name: "Gnocchi al pesto", 
     category: "platillos-fuertes", 
     price: "$120", 
     image: "img/ñoqui.jpg" ,
     description: "Gnocchi sazonado con albahaca, aceite de oliva, piñones y parmesano",
    },

     { 
    id: 9,
     name: "Panna Cotta", 
     category: "postres", 
     price: "$65", 
     image: "img/pannacotta.jpg",
     description: ""
    },

     { 
    id: 10,
     name: "Tiramsù", 
     category: "postres", 
     price: "$70", 
     image: "img/tiramisu.jpg" ,
     description: "Capas de café, mascarpone y bizcochos savoiardi"
    },

     { 
    id: 11,
     name: "Gelato al cocco", 
     category: "postres", 
     price: "$55", 
     image: "img/gelato.jpg",
     description: "Gelato artesanal hecho con coco fresco"
    },

      { 
    id: 12,
     name: "Cannoli Siciliani", 
     category: "postres", 
     price: "$75", 
     image: "img/cannoli.jpg",
     description: "Queso ricotta y crema batida enrollado dentro de una suave masa de trigo"
    },

      { 
    id: 13,
     name: "Mojito", 
     category: "bebidas", 
     price: "$85", 
     image: "img/mojito.jpg",
     description: "Ron blanco acompañado de agua mineral, hojas de menta y jugo de limón"
    },

      { 
    id: 14,
     name: "Larios Rosé", 
     category: "bebidas", 
     price: "$95", 
     image: "img/lariosrose.jpg",
     description: "Ginebra destilado acompañado de frutos rojos, vino rojo espumoso y menta"
    },

      { 
    id: 15,
     name: "Piña Colada", 
     category: "bebidas", 
     price: "$80", 
     image: "img/piñacolada.jpg",
     description: "Leche de coco, Ron blanco y jugo de piña en una cremosa mezcla, acompañado de una cereza."
    },

      { 
    id: 16,
     name: "Soda", 
     category: "bebidas", 
     price: "$45", 
     image: "img/soda.jpg",
     description: "Refresco de sabores. Pregunta por la disponibilidad"
    },

    // Se pueden agregar más platos aquí siguiendo el mismo formato de objeto.
];


// === FUNCIÓN PARA MOSTRAR LOS PLATILLOS EN LA PÁGINA ==
// 'function' define un bloque de código reutilizable. Esta función se llama 'displayMenuItems'.
function displayMenuItems(category = 'all') {
    const menuContainer = document.querySelector('.menu-items');
    
    // Limpiar el contenedor
    menuContainer.innerHTML = '';
    
    // Filtrar elementos según la categoría
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    // Mostrar mensaje si no hay elementos
    if (filteredItems.length === 0) {
        menuContainer.innerHTML = `
            <div class="no-items-message">
                <p>No hay elementos en esta categoría.</p>
            </div>
        `;
        return;
    }
    
    // Generar HTML para cada elemento del menú
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.dataset.category = item.category;
        
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span>${item.price}</span>
            </div>
        `;
        
        menuContainer.appendChild(menuItem);
    });
}

// Función para manejar los botones de filtrado
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Obtener la categoría del botón
            const category = button.dataset.category;
            
            // Mostrar los elementos de la categoría seleccionada
            displayMenuItems(category);
        });
    });
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(); // Carga todos los elementos al inicio
    setupFilterButtons(); // Configura los eventos de los botones de filtrado
});