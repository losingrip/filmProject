<template>
  <div class="FilmList">
    <HeaderMenu></HeaderMenu>
    <Findbox></Findbox>
    <SelectCard></SelectCard>
  </div>
</template>

<script>
  import HeaderMenu from '../components/HeaderMenu';
  import Findbox from '../components/Findbox';
  import SelectCard from '../components/SelectCard';

  export default {
    name: 'FilmList',
    components: {
      HeaderMenu,
      Findbox,
      SelectCard,
    }
  };
</script>

<style scoped>
  .mian {
    height: 200px;
  }
</style>
