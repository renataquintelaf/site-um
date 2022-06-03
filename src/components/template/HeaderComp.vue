<template>
  <header>
    <div class="menu-esquerdo">
      <span> <RouterLink to="/">Home</RouterLink> </span>
      <span>|</span>
      <span><RouterLink to="/jogadores">Jogadores</RouterLink></span>
      <span>|</span>
      <span><RouterLink to="/times">Times</RouterLink></span>
    </div>
    <div class="menu-direito">
      <span>Sair</span>
    </div>
  </header>
</template>

<style>
header {
  height: 10%;
  background-color: rgb(171, 76, 135);
  color: black;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-radius: 10px;
  justify-content: space-between;
}

header span {
  padding: 0 20px;
}
</style>
