---
title: Building Blocks
layout: default
excerpt: "jekyll por vez #1000: porque soy cagao 💩, y github es gratis!"
---

Rehaciendo el repo. Instalando jekyll, scaffolding, haciendo directory structure... hola mundo, un saludo pa' los cabros 😁

¿Por qué Jekyll, de nuevo?
Es un site-generator papa. Me demoré nada en montarlo, pero creo que lo único que me gustaría que tuviera es un asset manager bueno. Ponerle imágenes a las entradas de manera … ordenada. Dentro de lo que se pueda. <em>Porque uno no le es muy ordenado, saben?</em>

Dicen que [este señor Sam Rayner lo hace](https://github.com/samrayner/jekyll-asset-path-plugin) de una manera ordenada, pero parece que le lleva high maintenance...

Jekyll es estático, y si le logro enchufar assets, se convierte en … wait for it … *un basurero de ideas mantenido por una corporación*.

Lo cual siempre es cool de hacer y mantener, aunque le lleve un poquitito más de pega 💩

Quise ponerle una librería de UI al tiro. Obvio. Y como estoy enamorado del [VueJS de Evan You](http://vuejs.org) entonces era obvio que tenía que ponerlo. *Es súper simple*. Vue JS es una librería progresiva y reactiva, por lo tanto, tengo todos los beneficios de la reactividad de los objetos js vinculados a una state machine – sin las latas de tooling. No me gusta el Webpack. Entiendo todo lo que hace por mí y los beneficios que tiene... pero eso no quiere decir que no pueda darme lata lo overengineered que se siente a veces. Sobre todo en el ventilador de mi computador.

Bueno, la cosa es que, siendo Jekyll algo compilado en Ruby por Github, y no tiene un build step, Vue se quejaba de que _no puede importar mis módulos porque el header es octet/stream en lugar de application/javascript_.

Mierda.

No quiero escribir todos mis componentes con inline templates, y tener puro código de fideos. Tampoco quiero usar jQuery para la UI porque, amiga, estamos en el futuro y el pobre [John Resig](http://www.jquery.org) ya quiere dormir en paz sin support tickets.

### AHÁ!
El amigo [Franck Freiburger](https://github.com/FranckFreiburger/http-vue-loader) lo hace! *HTTPVueLoader* te permite cargar tus componentes por ES6 directamente desde un link. Nada de build step. Fabuloso. Ya puedo dejar de sudar y hacer esto como la gente. Y porque sí: Voy a dejar el Vue de development para que haya consola, y si alguien quiere mirarlo adentro, pueda.

Y bueno... ya saben una manera de importar comps en Github si son salvajes como yo, y quieren usarlo sin un build step. Sabroso.

Eso. A riesgo de trolls, le pondré comentarios. Y paginación. Y permalinks. Y estructura de basurero clásica... para que no se diga que si buscas a liver en google,

_no sale ná_.