<template>
 
    <div class="listagemProdutos">
      <listarProdutos/>
    </div>
  
  </template>

<script setup>
import listarProdutos from "./components/produtos/ListarProduto.vue";

    <div class="formularioClientes">
      <CadastrarCliente />
    </div>
  
    <div class="listagemClientes">
      <ListarCliente />
    </div>
  
    <div class="formularioProdutos">
      <CadastrarProduto/>    
    </div>
  </template>
  
  <CadastrarCliente />
  <ListarCliente /> 
  
  <div style="width: 25%; float: left;">
    <CadastrarFornecedor />
  </div>
  
  <div style="width: 25%; float: left;">
    <ListarFornecedor />
  </div>
  
  <div style="width: 25%; float: left;">
    <CadastrarCategoria />
  </div>
  
</template>

<script setup>
import CadastrarCliente from "./components/clientes/CadastrarCliente.vue"
import ListarCliente from "./components/clientes/ListarCliente.vue"
import CadastrarProduto from "./components/produtos/CadastrarProduto.vue";
import CadastrarFornecedor from "./components/fornecedores/CadastrarFornecedor.vue"
import CadastrarCategoria from "./components/categorias/CadastrarCategoria.vue"
import ListarFornecedor from "./components/fornecedores/ListarFornecedor.vue"
</script>

<style>
html {
  font-family: Arial;
}
</style>