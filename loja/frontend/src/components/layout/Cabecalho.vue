<template>
    <header id="topo">
        <img src="/images/logo.png">
        


        <nav>
            <a href="/">Home</a> -
            <a href="/clientes">Clientes</a> -
            <a href="/fornecedores">Fornecedores</a> -
            <a href="/categorias">Categorias</a> -
            <a href="/produtos">Produtos</a>
        </nav>
        <form action="#">
            <img src="/images/lupa_icone.png">
            <input type="text" name="criterio" placeholder="Buscar...">
            <button>OK</button>
        </form>
    </header>
</template>

<style>

body {
    margin: 0;
}

#topo {
    width: 100%;
    height: 98px;
    background: #000000;
}

header#topo img {
    margin-top: 19px;
    margin-left: 26px;
}

#topo nav a{
    color: #ffffff;
    font-size: 16px;
    text-transform: uppercase;
    text-decoration: none;
    margin-right: 20px;
}

#topo nav a:hover{
    color: #E27F54;
}

#topo nav {
    position: absolute;
    left: 340px;
    top: 42px;
}

#topo form {
    width: 299px;
    height: 30px;
    position: absolute;
    right: 10px;
    top: 36px;
}
#topo form input {
    width: 260px;
    height: 30px;
    border: none;
    padding-left: 37px;
}

#topo form button {
    position: absolute;
    right: 2px;
    width: 37px;
    height: 24px;
    top: 3px;
    background: #E27F54;
    color: #ffffff;
    border: none;
    border-radius: 4px;
}

#topo form img {
    position: absolute;
    left: -18px;
    top: -13px;
}

</style>