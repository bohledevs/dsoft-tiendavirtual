window.onload = () => {
    // Script 1: Efecto de sombra y opacidad en el footer
    const footer = document.querySelector('footer');
    footer.classList.add('shadow-effect', 'fade-effect');

    setInterval(() => {
        footer.classList.remove('shadow-effect');
        footer.classList.add('shadow-effect');
    }, 2000);

    // Script 2: Cambiar color de fondo de la barra de navegación al hacer scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.nav-container');
        if (window.scrollY > 50) {
            nav.style.backgroundColor = '#333';
        } else {
            nav.style.backgroundColor = 'transparent';
        }
    });

    // Guardar el estado del carrito en localStorage
    const cartLink = document.getElementById('cart-link');
    const cartCount = document.getElementById('cart-count');

    function updateCartCount() {
        const count = localStorage.getItem('cartCount') || 0;
        cartCount.textContent = `(${count})`;
    }

    cartLink.addEventListener('click', () => {
        let count = parseInt(localStorage.getItem('cartCount') || 0, 10);
        count += 1;
        localStorage.setItem('cartCount', count);
        updateCartCount();
        showNotification('Artículo agregado al carrito');
    });

    updateCartCount();

    // Mostrar una notificación temporal cuando se agrega un artículo al carrito
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#4caf50';
        notification.style.color = '#fff';
        notification.style.padding = '10px';
        notification.style.borderRadius = '5px';
        notification.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Resaltar el enlace activo en la barra de navegación
    const menuItems = document.querySelectorAll('.menu-items a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Animar el logotipo al pasar el ratón
    const logo = document.querySelector('.brand img');
    logo.addEventListener('mouseover', () => {
        logo.style.transform = 'scale(1.1)';
        logo.style.transition = 'transform 0.3s';
    });

    logo.addEventListener('mouseout', () => {
        logo.style.transform = 'scale(1)';
    });

    // Efecto de sombra en la barra de navegación
    const nav = document.querySelector('.nav-container');
    nav.classList.add('shadow-effect');

    setInterval(() => {
        nav.classList.remove('shadow-effect');
        void nav.offsetWidth;
        nav.classList.add('shadow-effect');
    }, 2000);

    // Script 3: Animación de aparición de secciones
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Script 4: Efecto de resaltado en testimonios
    const testimonios = document.querySelectorAll('.testimonio');

    if (testimonios.length === 0) {
        console.error('No se encontraron elementos con la clase .testimonio');
        return;
    }

    testimonios.forEach(testimonio => {
        testimonio.addEventListener('mouseover', () => {
            testimonio.classList.add('highlight');
        });

        testimonio.addEventListener('mouseout', () => {
            testimonio.classList.remove('highlight');
        });
    });

    // Script 5: Efecto de resaltado en nosotros
    const nosotros = document.querySelectorAll('.nosotros');

    if (nosotros.length === 0) {
        console.error('No se encontraron elementos con la clase .nosotros');
        return;
    }

    nosotros.forEach(nos => {
        nos.addEventListener('mouseover', () => {
            nos.classList.add('highlight');
        });

        nos.addEventListener('mouseout', () => {
            nos.classList.remove('highlight');
        });
    });

    // Script 6: Subrayado gris en h3
    const headings = document.querySelectorAll('h3');

    setInterval(() => {
        headings.forEach(heading => {
            heading.classList.toggle('underline');
        });
    }, 5000);


    // Boton de Whatsapp
    const whatsappButton = document.createElement('div');
    whatsappButton.id = 'whatsapp-button';

    const whatsappLink = document.createElement('a');
    whatsappLink.href = 'https://wa.me/1234567890'; // Reemplaza con tu número en formato internacional
    whatsappLink.target = '_blank';

    const whatsappImage = document.createElement('img');
    whatsappImage.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'; // Ícono de WhatsApp
    whatsappImage.alt = 'WhatsApp';
    whatsappImage.style.width = '50px'; // Tamaño pequeño
    whatsappImage.style.height = '50px'; // Tamaño pequeño
    whatsappImage.style.borderRadius = '50%'; // Ícono redondeado

    whatsappLink.appendChild(whatsappImage);
    whatsappButton.appendChild(whatsappLink);
    document.body.appendChild(whatsappButton);

    // Crear el contenedor del botón de Facebook
    const facebookButton = document.createElement('div');
    facebookButton.id = 'facebook-button';

    const facebookLink = document.createElement('a');
    facebookLink.href = 'https://www.facebook.com/tuPerfil';
    facebookLink.target = '_blank';

    const facebookImage = document.createElement('img');
    facebookImage.src = 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2013/December/131203/2D9840012-facebooklogo.jpg'; // Ícono de Facebook
    facebookImage.alt = 'Facebook';
    facebookImage.style.width = '50px'; 
    facebookImage.style.height = '50px';
    facebookImage.style.borderRadius = '50%'; 

    facebookLink.appendChild(facebookImage);
    facebookButton.appendChild(facebookLink);
    document.body.appendChild(facebookButton);



    // Agregar estilos para las animaciones
    const style = document.createElement('style');
    style.innerHTML = `
      footer {
        position: relative;
        overflow: hidden;
      }
   
      @keyframes shadowAnimation {
        0% {
          box-shadow: inset 0 0 0 rgba(0, 0, 0, 0);
        }
        50% {
          box-shadow: inset 0 -10px 20px rgba(0, 0, 0, 0.5);
        }
        100% {
          box-shadow: inset 0 0 0 rgba(0, 0, 0, 0);
        }
      }
   
      .shadow-effect {
        animation: shadowAnimation 5s infinite;
      }
   
      @keyframes fadeAnimation {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }
   
      .fade-effect {
        animation: fadeAnimation 5s infinite;
      }
   
      .nav-container {
        position: relative;
        overflow: hidden;
      }
   
      section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 3s ease-out, transform 3s ease-out;
      }
   
      section.visible {
        opacity: 1;
        transform: translateY(0);
      }
   
      .testimonio {
        background-color: white;
      }
   
      .testimonio.highlight {
        background-color: grey;
        transform: scale(1.05);
        transition: background-color 1s ease-out, transform 1s ease-out;
      }
   
   
      .nosotros.highlight {
        background-color: grey;
        transition: background-color 1s ease-out, transform 1s ease-out;
        transform: scale(1.05);
      }

   
      .underline {
        transition: text-decoration 3s ease-in-out;
        text-decoration: underline;
        text-decoration-color: grey;
      }
`;
    document.head.appendChild(style);

};