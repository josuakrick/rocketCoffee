<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap" rel="stylesheet">
    <style>
       :root {
        --background: #000;
        --text-color: #FFF;
        --button: #8257E5;
        --border: #29292E;
        --border-menu-mobile: #A8A8B3;
        --text-color-menu-mobile: #E1E1E6;
    
        --font:'Manrope', sans-serif; 
      }
       /* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}


body {
    background-image: linear-gradient(to bottom , black , rgb(19, 7, 20) , rgb(70, 19, 80));;
    font-family: var(--font);
    display: grid;
}


/* HEADER */

nav {
    display:flex;
    width: 100%;
    position: relative;
    
    
    border-bottom: 1px solid var(--border-menu-mobile);
}

/* LOGO*/

nav .logo {
    position: absolute;
    top: 2.5rem;
    left: 1.5rem;
}

nav.show .logo {
    z-index: 1;
}


/* TOGGLE */

.toggle {
    cursor: pointer;
    position: absolute;
    top: 2.5rem;
    right: 2rem;
}

 nav .toggle.close {
    visibility: hidden;
    opacity: 0;

    position: absolute;
    right: 2rem;
}


 nav.show .toggle.close {
     visibility: visible;
     opacity: 1;

     z-index: 1;
 }

 /* SUBMENU */

 nav .menuBigScreen {
    opacity: 0;
    visibility: hidden;
}


 nav.show .menuBigScreen {
    display: grid;
    place-content: center;

   opacity: 1;
   visibility: visible;

   background: var(--background);
   height: 100%;
   width: 100%; 

   position: fixed;
   top: 0;
   left: 0;
}



nav.show ul.grid {
    display: grid;
    gap: 4rem;
    
}


nav.show .menuBigScreen ul li {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-color-menu-mobile);
}

/* MENU WIDTH 1080PX */

/* .menuBigScreen {
    visibility: hidden;
} */


/* TEXT MOBILE */

h1 {
    color: var(--text-color-menu-mobile);
    text-align: center;
    padding: 10rem 1.25rem 5rem 1.25rem ;
    font-size: 2rem;
    font-weight: 400; 
}

/* BUTTON */

.button {
    width: 100%;
    margin: 0 auto;
}

.button a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15rem;
    margin: 0 auto;
    padding: 1.20rem 1.45rem;

    background-color: var(--background);
    color: var(--text-color-menu-mobile);
    font-family: var(--font);
    font-size: 1.15rem;
    border: 1px solid var(--button);
    border-radius: 0.35rem;
}


.button a:hover {
    background-color: var(--button);
    width: 15.5rem;
}


/* PARAGRAFO */

 .header .paragraph {
     display: grid;
    text-align: center;
    margin-top: 4.97rem; 
    margin-bottom: 0;  
}

.header .paragraph h2 {
    color: var(--text-color-menu-mobile);
    font-size: 3.52rem;
    font-weight: 700;
    line-height: 5rem;
}

.header .paragraph .special {
    text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button), -1px 1px 0 var(--button), 1px 1px 0 var(--button);
    color: rgb(19, 7, 20);
    letter-spacing: -3%;
    padding-bottom: 2rem;
    
}

/* POSITION IMAGE */

main {
    margin: 0 auto;
}

/* LINKS */

a:active {
    color: white;
    transition: color 0.4s;
}


@media screen and (min-width:1180px) {
    body {
        width: 100%;
    }
    
    nav{
        position: relative;
        border-bottom: 0px;
        width: 100%;
    }


    nav.show .menuBigScreen {
        display: flex;
        /* width: 50%; */
        position: relative;
        top: 2.5rem;
        padding: 0 2rem;
    }

    nav.show ul.grid {
        display: flex;
        justify-content: space-around;
    }


    nav.show .menuBigScreen ul {
        display: flex;
        justify-content: center;
    }

    nav.show .menuBigScreen ul li {
        font-size: 1.3rem;
    }

    nav.show .menuBigScreen ul li a {
        color: var(--text-color-menu-mobile);
        font-weight: 700;
    }

    nav.show .menuBigScreen ul li a:hover {
        color: var(--button);
        border-bottom: 1px solid var(--border-menu-mobile);
    }
    
    h1 , .toggle {
        display:none;
    }


    .button a {
        position: absolute;
        top: 2.5rem;
        right: 2rem;

        margin-left: 1rem;

        width: 10rem;
        height: 2rem;
        font-size: 0.75rem;
    }


    .button a:hover {
        width: 10rem;
        color: var(--text-color);
    }

    .header .paragraph {
        padding-top: 2rem;
    }

    .header .paragraph .special {
         padding-bottom: 0;
    }

}
    </style>
    

    <title>Rocket Coffee</title>
</head>
<body>
    <header class="header">   
           <nav class="container">
            <img class="logo" src="./../assets/assets/logo-mobile.svg" alt="logoRocketCoffee">
            <a href="#" class="toggle open"><img src="./../assets/assets/menu-buguer-open.svg" alt=" menu burguer open"></a>
                <a href="#" class="toggle close" ><img src="./../assets/assets/menu-buguer-close.svg" alt=" menu burguer close"></a>
                    <div class="menuBigScreen">
                        <ul class="grid">
                            <li><a href="">Home</a></li>
                            <li><a href="">Menu</a></li>
                            <li><a href="">Recompensas</a></li>
                            <li><a href="">GiftCards</a></li>
                            <li><a href="">Lojas</a></li>
                        </ul>
                    </div>
                </nav>
                    <div><h1>O café que fará <br> seu código
                         decolar <br> para outro nível</h1>
                    </div>
                    <div class="button"><a href="#"> Pegar meu café <img src="./../assets/assets/arrow.svg" alt="flecha botão"></a></div>
                    <div class="paragraph">
                        <h2>GREAT COFFEE</h2>
                        <h2 class="special"> < GREAT CODE > </h2>
                    </div> 
    </header>
        <main><img class="coffee" src="./../assets/assets/rocket-coffee.png" alt="imagem rocket coffee"></main>
    <script src="main.js"></script>
</body>
</html>


